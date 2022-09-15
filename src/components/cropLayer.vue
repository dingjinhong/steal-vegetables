<template>
<div class='crop-layer'>
    <crop-field v-for="(item,i) in fields" :key='i' :crop='item' :style='getFieldStyle(i)'></crop-field>
</div>
</template>
<script>
import cropField from './cropField';
import position from '../utils/position';
export default{
    components:{
        cropField
    },
    props:{
        fields:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    watch:{
        fields(n){
            console.log(n);
        }
    },
    methods:{
        getFieldStyle(i){
            console.log(i);
            return position.getFieldStyle(i);
        }
    }
}
</script>
<style scoped>
    .crop-layer{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
</style>