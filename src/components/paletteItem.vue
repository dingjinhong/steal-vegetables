<template>
    <div @click='onItemClick' class='palette-item'>
        <img class='palette-img' :src='imgSrc'>
        <div class='palette-text'>{{text}}</div>
    </div>
</template>
<script>
    export default{
        props:{
            imgSrc:{
                type:String,
                default:'',
            },
            text:{
                type:String,
                default:'',
            }
        },
        methods:{
            onItemClick(){
                this.$emit('onItemClick');
            }
        }
    }
</script>
<style scoped>
    .palette-img{
        width:10vmin;
        height:10vmin;
        display:block;
    }
    .palette-text{
        font-size:2vmin;
        width:10vmin;
        text-align:center;
    }
    .palette-item{
        padding:0 2vmin;
    }
</style>