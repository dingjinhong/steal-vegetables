<template>
    <div ref='container'>
        <canvas ref='canvas'></canvas>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                imgSrc:require('../assets/img.png'),
            }
        },
        methods:{
            drawImage(){
                var img=new Image();
                img.onload=()=>{
                    let {width,height}=this.$refs.container.getBoundingClientRect();
                    var c=this.$refs.canvas;
                    var ctxt=c.getContext('2d');
                    ctxt.clearRect(0,0,c.width||0,c.height||0);
                    c.setAttribute('width',width);
                    c.setAttribute('height',height);
                    ctxt.beginPath();
                    ctxt.drawImage(img, 0, 0,width,height);
                    ctxt.closePath();
         
                }
                img.src=this.imgSrc;
            },
            containFigure(x,y){
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
        created(){
            window.addEventListener('resize',this.drawImage,false);
            this.drawImage();
        },
        beforeDestroy(){
            window.removeEventListener('resize',this.drawImage);
        }
   
    }
</script>
