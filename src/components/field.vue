<template>
    <div class='field' ref='container'>
        <canvas ref='canvas'></canvas>
        <transition @after-enter="afterEnter" @before-enter="beforeEnter"name="crop">
            <img class='img' v-if='crop!==null' :src='cropImage'>
        </transition>
        <timerProgress @fireTimerStart='onFireTimerStart' :cuePoints='cuePoints' :totalTime='totalTime' v-if='timerShow' class='timer' @fireCuePoint='onFireCuePoint' @fireTimerEnd='onFireTimerEnd' />
        <handActive class='hand-active'/>
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
                imgSrc:require('../assets/img.png'),
                fieldImage:require('../assets/field.png'),
                cropImage:'',
                timerShow:false,
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
            },
            onFireTimerStart(){
                // this.cropImage=this.crop.process.beginImg;
                // this.drawImage(this.fieldImage);
            },
            drawImage(src){
                var img=new Image();
                img.onload=()=>{
                    var c=this.$refs.canvas;
                    var ctxt=c.getContext('2d');
                    var width= c.getAttribute('width');
                    var height=c.getAttribute('height');
                    ctxt.clearRect(0,0,width,height);
                    ctxt.beginPath();
                    ctxt.drawImage(img, 0, 0,width,height);
                    ctxt.closePath();
         
                }
                img.src=src;
            },
            containFigure(x,y){
                if(this.crop!==null){
                    return false;
                }
                x=Math.ceil(x);
                y=Math.ceil(y);
                var c=this.$refs.canvas;
                var ctxt=c.getContext('2d');
                var width=c.getAttribute('width');
                var height=c.getAttribute('height');
                var imageData= ctxt.getImageData(0, 0, width, height);
               // console.log(x,y,imageData.width,imageData.data);
                var a = imageData.data[(x-1)*4+(y-1)*imageData.width*4-1+4];
                return a>0;
                //console.log(a);
            },
        },
        mounted(){
            let {width,height}=this.$refs.container.getBoundingClientRect();
            var c=this.$refs.canvas;
            c.setAttribute('width',width);
            c.setAttribute('height',height);
            this.drawImage(this.imgSrc);
            // var img=new Image();
            // img.onload=()=>{
            //     var c=this.$refs.canvas;
            //     var ctxt=c.getContext('2d');
            //     let {width,height}=this.$refs.container.getBoundingClientRect();
            //     c.setAttribute('width',width);
            //     c.setAttribute('height',height);
               
            //     //c.style.width='100%';
            //    // c.style.height='100%';
            //     ctxt.beginPath();
            //     ctxt.drawImage(img, 0, 0,width,height);
            //     ctxt.closePath();
            //     //var data = ctxt.getImageData(0, 0, width, height).data;//读取整张图片的像素。
			
			//    // console.log(data);
            // }
            // img.src=this.imgSrc;
        }
    }
</script>
<style>
.crop-enter-active, .crop-leave-active {
  transition: opacity .8s;
}
.crop-enter, .crop-leave /* .fade-leave-active below version 2.1.8 */ {
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