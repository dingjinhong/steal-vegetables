<template>
    <div class='field' ref='container'>
        <canvas v-if='crop!==null' ref='canvas'></canvas>
        <transition @after-enter="afterEnter" @before-enter="beforeEnter" name="crop">
            <img class='img' v-if='crop!==null' :src='cropImage'>
        </transition>
        <timerProgress @fireTimerStart='onFireTimerStart' :cuePoints='cuePoints' :totalTime='totalTime' v-if='timerShow' class='timer' @fireCuePoint='onFireCuePoint' @fireTimerEnd='onFireTimerEnd' />
    </div>
</template>
<script>
import timerProgress from './timerProgress';
import handActive from './handActive';
    export default{
        components:{
            timerProgress,
            handActive
        },
        props:{
            crop:{
                type:Object,
                default(){
                    return null;
                }
            }
        },
        data(){
            return {
                fieldImage:require('../assets/field.png'),
                cropImage:'',
                timerShow:false,
            }
        },
        watch:{
            crop(n){
                console.log(n);
            }
        },
        computed:{
            cuePoints(){
                if(this.crop===null){
                    return []
                }
                return this.crop.process.during.map(c=>{
                    return {
                        time:c.time,
                        hasFire:false,
                    }
                })
            },
            totalTime(){
                if(this.crop===null){
                    return 0
                }
                return this.crop.process.totalTime;
            }
        },
        // watch:{
        //     crop(n){
        //         if(n===null){
        //             this.status=-1;
        //         }
        //     }
        // },
        methods:{
            beforeEnter(){
                this.cropImage=this.crop.process.beginImg;
                this.drawImage(this.fieldImage);
            },
            afterEnter(){
                this.timerShow=true;
            },
            onFireCuePoint(index){
                 this.cropImage=this.crop.process.during[index].img;
                 this.crop.status=0;
            },
            onFireTimerEnd(){
                this.cropImage=this.crop.process.endImg;
                this.crop.status=1;
                this.timerShow=false;
                this.$emit('cooked');
            },
            onFireTimerStart(){
                // this.cropImage=this.crop.process.beginImg;
                // this.drawImage(this.fieldImage);
            },
            drawImage(src){
                var img=new Image();
                img.onload=()=>{
                    let {width,height}=this.$refs.container.getBoundingClientRect();
                    var c=this.$refs.canvas;
                    c.setAttribute('width',width);
                    c.setAttribute('height',height);
                    var ctxt=c.getContext('2d');
                    ctxt.clearRect(0,0,width,height);
                    ctxt.beginPath();
                    ctxt.drawImage(img, 0, 0,width,height);
                    ctxt.closePath();
         
                }
                img.src=src;
            },
        },
        created(){
            console.log(this.crop);
        }

    }
</script>
<style>
.crop-enter-active, .crop-leave-active {
  transition: opacity .8s;
}
.crop-enter, .crop-leave-to/* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<style scoped>
.img{
    width:100%;
    height:auto;
    display:block;
    position:absolute;
    bottom:0;
    left:0;
}
.timer{
    position:absolute!important;
    left:50%;
    bottom:0;
    transform:translate(-50%,-100%);
}

</style>