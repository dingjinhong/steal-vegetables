<template>
    <div class='hand-container'>
        <div class='hand'></div>
    </div>  
</template>
<script>
export default{
  
}
</script>
<style>
    @keyframes bounce-in {
        0% {
            background-position:0px 0px
        }
        50% {
            background-position:-9vmin 0px;

        }
        100% {
            background-position:0px 0px;
    
        }
    }
    @keyframes updown{
        0% {
           transform:translate(-50%,0);
        }
        25%{
            transform:translate(-50%,-25%);
        }
        50% {
            transform:translate(-50%,-50%);
        }
        75% {
            transform:translate(-50%,-25%);
        }
        100%{
            transform:translate(-50%,0);
        }
    }
</style>
<style scoped>
    .hand-container{
        animation: updown 1s linear infinite;
        width:fit-content;
        height:fit-content;
        position:absolute;
        bottom:50%;
        left:50%;
        transform:translateX(-50%);
    }
    .hand{
        width:9vmin;
        height:10.5vmin;
        background:url(../assets/hand.png) no-repeat;
        background-size:cover;
        /* background-position:-12vmin 0; */
        animation: bounce-in 1s step-start infinite;
        
       
    }
</style>