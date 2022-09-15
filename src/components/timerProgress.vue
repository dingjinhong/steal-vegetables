<template>
<div class='timer-progress' :style='{"backgroundColor":barBgColor}'>
    <div class='timer-bar' :style='{"backgroundColor":barColor,"width":barWidth+"%"}'></div>
    <div class='timer-text'>{{frontText}} {{text}}</div>
</div>
</template>
<script>
export default{
    props:{
        barBgColor:{
            type:String,
            default:'rgb(71,52,11)'
        },
        barColor:{
            type:String,
            default:'rgb(255,180,32)'
        },
        totalTime:{
            type:Number,
            default:100,
        },
        extent:{
            type:Number,
            default:1,
        },
        frontText:{
            type:String,
            default:'剩'
        },
        cuePoints:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    data(){
        return {
            time:this.totalTime,
            intervalId:'',
            barWidth:0,
        }
    },
    watch:{
        totalTime(n){
            this.time=n;
            goInterval();
        }
    },
    computed:{
        text(){
            var h=parseInt(this.time/3600);
            if((h+"").length===1){
                h='0'+h;
            }
            var min=parseInt(this.time%3600/60);
            if((min+"").length===1){
                min='0'+min;
            }
            var s=this.time%3600%60;
            if((s+"").length===1){
                s='0'+s;
            }
            return h+":"+min+":"+s;

        }
    },
    methods:{
        goInterval(){
            if(this.intervalId){
                clearInterval(this.intervalId);
            }
            this.$emit('fireTimerStart');
            this.intervalId=setInterval(()=>{
                var time=this.time-this.extent
                var duringTime=this.totalTime-time;
                for(var i=0;i<this.cuePoints.length;i++){
                    var cp=this.cuePoints[i];
                    if(cp.hasFire){
                        continue;
                    }
                    if(duringTime>cp.time){
                        cp.hasFire=true;
                        this.$emit('fireCuePoint',i);
                    }
                }
                if(time<=0){
                    clearInterval(this.intervalId);
                    this.time=0;
                    this.barWidth=100;
                    this.$emit('fireTimerEnd');
                }else{
                    this.time=time;
                    this.barWidth=(this.totalTime-this.time)/this.totalTime*100;
                }
                    
                    
            },this.extent*1000)
            
        }
    },
    created(){
        this.goInterval();
    }
}
</script>
<style scoped>
    .timer-progress{
        position:relative;
        overflow:hidden;
        width:fit-content;
        border:1px solid #ffffff;
        border-radius:1.2vmin;
    }
    .timer-bar{
        position:absolute;
        top:0;
        left:0;
        height:100%;
    }
    .timer-text{
        position:relative;
        font-size:2vmin;
        line-height:2.4vmin;
        height:2.4vmin;
        padding:0 1vmin;
        text-align:center;
        color:#ffffff;
    }
</style>