<template>
<div class='feedback-layer' v-if='s'>
   
        <transition @after-enter="afterFeedbackEnter" name="feedback">
            <div class='feedback' v-if='showEffect'></div>
        </transition>
        <transition name="imgFeedback" @after-enter='afterImgEnter' @after-leave='afterImgLever'>
            <img class='feedback-img' v-if='showImage' :src='image'>
        </transition>
      
    
</div>
</template>
<script>
    export default{
        props:{
            image:{
                type:String,
                default:''
            },
            show:{
                type:Boolean,
                default:false
            }
        },
        model:{
            event:'input',
            prop:"show"
        },
        watch:{
            show(n){
                this.s=n;
            },
            s(n){
                this.$emit('input',n);
                this.showFeedback();
                
            }
        },
        data(){
            return {
                s:this.show,
                showEffect:false,
                showImage:false,
            }
        },
        methods:{
            showFeedback(){
                if(this.s){
                    this.$nextTick(()=>{
                        this.showEffect=true;
                    })
                }
            },
            afterFeedbackEnter(){
                this.showImage=true;
                this.showEffect=false;
            },
            afterImgEnter(){
                this.showImage=false
            },
            afterImgLever(){
                this.s=false;
            }
        },
        created(){
            this.showFeedback();
        }
    }
</script>
<style scoped>
    .feedback-enter-active{
        transition: transform 1s;
    }
    .feedback-leave-active {
        transition: opacity .5s;
    }
    .feedback-enter{
        transform: scale(0,0);
    }
    .feedback-leave-to/* .fade-leave-active below version 2.1.8 */ {
        opacity:0;
    }


    .feedback-layer{
        position:fixed;
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;

    }
    .feedback{
        width:30vmin;
        height:30vmin;
        border-radius:15vmin;
        border:1px solid red;
    }
    .feedback-img{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:30vmin;
        height:19vmin;
    }
    .imgFeedback-enter-active{
        transition: opacity .5s;
    }
    .imgFeedback-leave-active {
        transition: all 1s;
    }
    .imgFeedback-enter{
        opacity: 0;
    }
    .imgFeedback-leave-to/* .fade-leave-active below version 2.1.8 */ {
        transform: scale(0.5,0.5);
        left:calc(100% - 30vmin);
        top:0;
    }
</style>