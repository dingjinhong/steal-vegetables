export default function(rate){
    let clientWidth = document.body.clientWidth||document.documentElement.clientWidth||window.innerWidth;
    let clientHeight = document.body.clientHeight||document.documentElement.clientHeight||window.innerHeight;
    if (!clientWidth||!clientHeight) return;
    var min=Math.min(clientWidth,clientHeight);
    let len = min/100*rate;
    return len;
}