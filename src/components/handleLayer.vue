<template>
<div class='handle-layer'>
    <handle-field v-for="(item,i) in fields" :key='i' :crop='item' :style='getFieldStyle(i)'></handle-field>
</div>
</template>
<script>
import handleField from './handleField';
import position from '../utils/position';
export default{
    components:{
        handleField
    },
    props:{
        fields:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    methods:{
        getFieldStyle(i){
            return position.getFieldStyle(i);
        }
    }
}
</script>
<style scoped>
    .handle-layer{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
</style>