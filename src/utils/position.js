var Position = function(){}
var fw=30;
var fh=19;
var hw=fw/2;
var hh=fh/2;
var spacing=3;
var left=3;
var top=15;
Position.getPath=(len)=>{
    var rootLeft=Flexible(left);
   // console.log(rootLeft);
    var rootTop=Flexible(top); 
    var halfWidth=Flexible(hw);
    var halfHeight=Flexible(hh);
    var figureWidth=Flexible(fw);
    var figureHeight=Flexible(fh);
    var angle=Math.atan(halfWidth/halfHeight);
    var x=Math.sin(angle)*Flexible(spacing);
    var y=Math.cos(angle)*Flexible(spacing);
    var distance=Flexible(1.5);

    var _a=Math.PI/3;
    var _dis=Flexible(2);

    var _r=distance+_dis;

    var _xx=Math.cos(_a)*(_dis+distance);
    var _yy=Math.sin(_a)*(_dis+distance);

    var _yyy=Math.sin(_a)*(_dis);
    var _xxx=Math.cos(_a)*(_dis);


    var dis=Flexible(2);
    var r=distance+dis;
    var a=Math.PI/6;
    var xx=Math.cos(a)*(dis+distance);
    var yy=Math.sin(a)*(dis+distance);
    var xxx=Math.cos(a)*dis;
    var yyy=Math.sin(a)*dis;

    var d='';
    if(len>0){
        d='M'+(rootLeft+_dis-_xx)+' '+(rootTop+halfHeight+_yy)+' A'+_r+','+_r+' 0 0,1 '+(rootLeft+_dis-_xx)+','+(rootTop+halfHeight-_yy);
        if(len===1){
            d+=' L '+(rootLeft+halfWidth-yy)+' '+(rootTop+dis-xx)+' A'+r+','+r+' 0 0,1 '+(rootLeft+halfWidth+yy)+','+(rootTop+dis-xx);
            d+=' L '+(rootLeft+figureWidth-_dis+_xx)+' '+(rootTop+halfHeight-_yy)+' A'+_r+','+_r+' 0 0,1 '+(rootLeft+figureWidth-_dis+_xx)+','+(rootTop+halfHeight+_yy);
            d+=' L '+(rootLeft+halfWidth+yy)+' '+(rootTop+figureHeight-dis+xx)+' A'+r+','+r+' 0 0,1 '+(rootLeft+halfWidth-yy)+','+(rootTop+figureHeight-dis+xx);
            d+=' L '+(rootLeft+_dis-_xx)+' '+(rootTop+halfHeight+_yy);
        }else{
            var num=parseInt(len/3);
            console.log(num);
            if(len%3===0){
                for(var i=0;i<num;i++){
                    d+=' L '+(rootLeft+figureWidth+x-yy+(figureWidth+2*x)*i)+' '+(rootTop-halfHeight+dis-xx-y)+' A'+r+','+r+' 0 0,1 '+(rootLeft+figureWidth+x+yy+(figureWidth+2*x)*i)+','+(rootTop-halfHeight+dis-xx-y);
                    if(num>1&&i<num-1){
                        d+=' L '+(rootLeft+figureWidth+2*x-yyy+halfWidth+(figureWidth+2*x)*i)+' '+(rootTop-xxx-y)+' A'+dis+','+dis+' 0 0,0 '+(rootLeft+figureWidth+2*x+yyy+halfWidth+(figureWidth+2*x)*i)+','+(rootTop-xxx-y);
                    }else{
                        d+=' L '+(rootLeft+figureWidth+x-_dis+_xx+halfWidth+(figureWidth+2*x)*i)+' '+(rootTop-_yy-y)+' A'+_r+','+_r+' 0 0,1 '+(rootLeft+figureWidth+x-_dis+_xx+halfWidth+(figureWidth+2*x)*i)+','+(rootTop+_yy-y);
                    }
                }

                    
                d+=' L '+(rootLeft+(figureWidth+2*x)*(num)+_xxx)+' '+(rootTop+halfHeight-_yyy)+' A'+_dis+','+_dis+' 0 0,0 '+(rootLeft+(figureWidth+2*x)*(num)+_xxx)+','+(rootTop+halfHeight+_yyy);
                
                for(var i=num-1;i>=0;i--){	
                    if(num>1&&i<num-1){
                        d+=' L '+(rootLeft+figureWidth+2*x+yyy+halfWidth+(figureWidth+2*x)*i)+' '+(rootTop+figureHeight+xxx+y)+' A'+dis+','+dis+' 0 0,0 '+(rootLeft+figureWidth+2*x-yyy+halfWidth+(figureWidth+2*x)*i)+','+(rootTop+figureHeight+xxx+y);
                    
                    }else{
                        d+=' L '+(rootLeft+figureWidth+x-_dis+_xx+halfWidth+(figureWidth+2*x)*i)+' '+(rootTop+figureHeight-_yy+y)+' A'+_r+','+_r+' 0 0,1 '+(rootLeft+figureWidth+x-_dis+_xx+halfWidth+(figureWidth+2*x)*i)+','+(rootTop+figureHeight+_yy+y);
                    }
                    
                        
                    
                        d+=' L '+(rootLeft+figureWidth+x+yy+(figureWidth+2*x)*i)+' '+(rootTop+figureHeight+halfHeight-dis+xx+y)+' A'+r+','+r+' 0 0,1 '+(rootLeft+figureWidth+x-yy+(figureWidth+2*x)*i)+','+(rootTop+figureHeight+halfHeight-dis+xx+y);
                    
                }
                d+=' L '+(rootLeft+_dis-_xx)+' '+(rootTop+halfHeight+_yy);
                
                
            }else if(len%3===1){
                for(var i=0;i<num;i++){
                    d+=' L '+(rootLeft+figureWidth+x-yy+(figureWidth+2*x)*i)+' '+(rootTop-halfHeight+dis-xx-y)+' A'+r+','+r+' 0 0,1 '+(rootLeft+figureWidth+x+yy+(figureWidth+2*x)*i)+','+(rootTop-halfHeight+dis-xx-y);
                    if(num>1&&i<num-1){
                        d+=' L '+(rootLeft+figureWidth+2*x-yyy+halfWidth+(figureWidth+2*x)*i)+' '+(rootTop-xxx-y)+' A'+dis+','+dis+' 0 0,0 '+(rootLeft+figureWidth+2*x+yyy+halfWidth+(figureWidth+2*x)*i)+','+(rootTop-xxx-y);
                    }else{
                        d+=' L '+(rootLeft+2*figureWidth+2*x-_dis+_xx+(figureWidth+2*x)*i)+' '+(rootTop-_yy+halfHeight)+' A'+_r+','+_r+' 0 0,1 '+(rootLeft+2*figureWidth+2*x-_dis+_xx+(figureWidth+2*x)*i)+','+(rootTop+_yy+halfHeight);
                    }
                    
                }
                for(var i=num-1;i>=0;i--){
                    
                    if(num>1&&i<num-1){
                        d+=' L '+(rootLeft+figureWidth+2*x+yyy+halfWidth+(figureWidth+2*x)*i)+' '+(rootTop+figureHeight+xxx+y)+' A'+dis+','+dis+' 0 0,0 '+(rootLeft+figureWidth+2*x-yyy+halfWidth+(figureWidth+2*x)*i)+','+(rootTop+figureHeight+xxx+y);
                        d+=' L '+(rootLeft+figureWidth+x+yy+(figureWidth+2*x)*i)+' '+(rootTop+figureHeight+halfHeight-dis+xx+y)+' A'+r+','+r+' 0 0,1 '+(rootLeft+figureWidth+x-yy+(figureWidth+2*x)*i)+','+(rootTop+figureHeight+halfHeight-dis+xx+y);
                    
                    }else{
                        d+=' L '+(rootLeft+figureWidth+x+yy+(figureWidth+2*x)*i)+' '+(rootTop+figureHeight+halfHeight-dis+xx+y)+' A'+r+','+r+' 0 0,1 '+(rootLeft+figureWidth+x-yy+(figureWidth+2*x)*i)+','+(rootTop+figureHeight+halfHeight-dis+xx+y);
            
                    }
                    
                }
                d+=' L '+(rootLeft+_dis-_xx)+' '+(rootTop+halfHeight+_yy);
            }else{
                for(var i=0;i<num+1;i++){
                    d+=' L '+(rootLeft+figureWidth+x-yy+(figureWidth+2*x)*i)+' '+(rootTop-halfHeight+dis-xx-y)+' A'+r+','+r+' 0 0,1 '+(rootLeft+figureWidth+x+yy+(figureWidth+2*x)*i)+','+(rootTop-halfHeight+dis-xx-y);
                    console.log(num!=i);
                    if(num!=i){
                        d+=' L '+(rootLeft+figureWidth+2*x-yyy+halfWidth+(figureWidth+2*x)*i)+' '+(rootTop-xxx-y)+' A'+dis+','+dis+' 0 0,0 '+(rootLeft+figureWidth+2*x+yyy+halfWidth+(figureWidth+2*x)*i)+','+(rootTop-xxx-y);
                    }else{
                        d+=' L '+(rootLeft+figureWidth+x-_dis+_xx+halfWidth+(figureWidth+2*x)*i)+' '+(rootTop-_yy-y)+' A'+_r+','+_r+' 0 0,1 '+(rootLeft+figureWidth+x-_dis+_xx+halfWidth+(figureWidth+2*x)*i)+','+(rootTop+_yy-y);
                    }
                }

                    
                if(num===0){
                    d+=' L '+(rootLeft+halfWidth+yy)+' '+(rootTop+figureHeight-dis+xx)+' A'+r+','+r+' 0 0,1 '+(rootLeft+halfWidth-yy)+','+(rootTop+figureHeight-dis+xx);
                }else{
                    for(var i=num;i>=1;i--){
                        if(i==num){
                            d+=' L '+(rootLeft+x+figureWidth+yy+(figureWidth+2*x)*(i-1))+' '+(rootTop+figureHeight+halfHeight-dis+xx+y)+' A'+r+','+r+' 0 0,1 '+(rootLeft+x+figureWidth-yy+(figureWidth+2*x)*(i-1))+','+(rootTop+figureHeight+halfHeight-dis+xx+y);
                        }else{
                            d+=' L '+(rootLeft+figureWidth+2*x+yyy+halfWidth+(figureWidth+2*x)*(i-1))+' '+(rootTop+figureHeight+xxx+y)+' A'+dis+','+dis+' 0 0,0 '+(rootLeft+figureWidth+2*x-yyy+halfWidth+(figureWidth+2*x)*(i-1))+','+(rootTop+figureHeight+xxx+y);
                            d+=' L '+(rootLeft+figureWidth+x+yy+(figureWidth+2*x)*(i-1))+' '+(rootTop+figureHeight+halfHeight-dis+xx+y)+' A'+r+','+r+' 0 0,1 '+(rootLeft+figureWidth+x-yy+(figureWidth+2*x)*(i-1))+','+(rootTop+figureHeight+halfHeight-dis+xx+y);
                                    
                                
                        }
                    }
                }
                            
                d+=' L '+(rootLeft+_dis-_xx)+' '+(rootTop+halfHeight+_yy);
            }
            
        }
    }
    //console.log(d);
    return d
}
Position.getFieldStyle=(i)=>{
    var rootLeft=left;
    var rootTop=top; 
    var halfWidth=hw;
    var halfHeight=hh;
    var figureWidth=fw;
    var figureHeight=fh;
    var angle=Math.atan(halfWidth/halfHeight);
    var x=Math.sin(angle)*spacing;
    var y=Math.cos(angle)*spacing;

    var num=parseInt(i/3)+1;
    var style={
        width:figureWidth+"vmin",
        height:figureHeight+"vmin",
        position:'absolute',
    };
    if(i%3===0){
        for(var j=0;j<num;j++){
            var imageTop=rootTop;
            var imageLeft=rootLeft+(figureWidth+2*x)*j;
            style.top=imageTop+'vmin';
            style.left=imageLeft+"vmin";
        }
    }else if(i%3===1){
        for(var j=0;j<num;j++){
            var imageTop=rootTop;
            var imageLeft=rootLeft+(figureWidth+2*x)*j;
            style.top=imageTop+'vmin';
            style.left=imageLeft+"vmin";
            for(var j=0;j<num;j++){
                var imageTop=rootTop-y-halfHeight;
                var imageLeft=rootLeft+halfWidth+x+(figureWidth+2*x)*j;
                style.top=imageTop+'vmin';
                style.left=imageLeft+"vmin";
            }
        }
    }else{
        for(var j=0;j<num;j++){
            var imageTop=rootTop;
            var imageLeft=rootLeft+(figureWidth+2*x)*j;
            style.top=imageTop+'vmin';
            style.left=imageLeft+"vmin";
            for(var j=0;j<num;j++){
                var imageTop=rootTop+y+halfHeight;
                var imageLeft=rootLeft+halfWidth+x+(figureWidth+2*x)*j;
                style.top=imageTop+'vmin';
                style.left=imageLeft+"vmin";
            }
        }
    }
    return style;
}
export default Position;