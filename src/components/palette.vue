<template>
 <transition @after-enter="onAfterEnter" @before-enter='onBeforeEnter' @before-leave='onBeforeLeave' name="fade">
    <div class='palette' ref='palette' v-show='s'> 
        <palette-item @onItemClick='onClick(d)' v-for='(d,i) in paletteData' :key='i' :imgSrc='d.img' :text='d.text'></palette-item>
        <div @click='s=!s' class='palette-close'>X</div>
    </div>
</transition>
</template>
<script>
import data from '../model/paletteData';
import paletteItem from './paletteItem';
export default{
    name:'Palette',
    components:{
        paletteItem 
    },
    props:{
        show:{
            type:Boolean,
            default:false,
        }
    },
    model:{
        event:"input",
        prop:'show'
    },
    data(){
        return {
            paletteData:data,
            s:this.show,
        }
    },
    watch:{
        s(n){
            this.$emit('input',n);
        },
        show(n){
            this.s=n;
        }
    },
    methods:{
        onAfterEnter(){
            this.$refs.palette.style.transform='translate(-50%,0)'
        },
        onBeforeEnter(){
            this.$refs.palette.style.transform='';
        },
        onBeforeLeave(){
            this.$refs.palette.style.transform='';
        },
        onClick(crop){
            var model=crop.creationTool();
            this.$emit('selectCrop',model);
            this.s=false;
        }
    }

}
</script>

<style scoped>
.palette{
    position:fixed;
    bottom:0;
    width:70vmin;
    left:50%;
    display:flex;
    padding:3vmin;
    background-color:rgb(255,222,174);
    box-sizing:border-box;
    border-top-left-radius:3vmin;
    border-top-right-radius:3vmin;
    border-top:2px solid rgb(239,125,84);
    border-right:2px solid rgb(239,125,84);
    border-left:2px solid rgb(239,125,84);


}
.palette-close{
    color:white;
    font-size:3vmin;
    line-height:3vmin;
    background-color:rgb(239,125,84);
    border-radius:2vmin;
    top:0;
    width:3vmin;
    height:3vmin;
    padding:0.5vmin;
    position:absolute;
    text-align:center;
    left:100%;
    transform: translate(-50%,-50%);
}

</style>
<style>
.fade-enter-active, .fade-leave-active {
  transition: transform .5s;
  transform: translate(-50%,0);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(-50%,100%);
}
</style>
