<template>
    <div class='farm' >
      <Graden @selectField='onSelectField' @finishField='onFinishField' :fields='fields'></Graden>
      <Palette v-model='showPalette' @selectCrop='onSelectCrop'></Palette>
      <feedback-layer v-model='showFeedback' :image='feedbackImage'></feedback-layer>
    </div>
</template>
<script>
import Graden from '../components/graden';
import Flexible from '../utils/flexible';
import Palette from '../components/palette';
import feedbackLayer from '../components/feedbackLayer'
export default{
    name:"farm",
    components:{
        Graden,
        Palette,
        feedbackLayer
    },
    data(){
        return {
            fields:[null,null,null,null,null,null,null,null,null],
            selectIndex:-1,
            showPalette:false,
            feedbackImage:'',
            showFeedback:false,
        }
    },
    methods:{
        onSelectCrop(field){
            
            this.$set(this.fields,this.selectIndex,field);
        },
        onSelectField(index){
             console.log('select');
            this.selectIndex=index;
            this.showPalette=true;
        },
        onFinishField(index){
             this.feedbackImage=this.fields[index].feedbackImage;
             this.$set(this.fields,index,null);
            this.showFeedback=true;

        }
    },
    created(){
       
    },
    beforeDestroy(){
        
    }
    

}
</script>
<style scoped>
    .farm{
        width:200vmin;
        height:100vmin;
        position:relative;
        overflow:hidden;
    }
</style>