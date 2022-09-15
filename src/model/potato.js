//import Crop from './crop';
var process={
    totalTime:20,
    endImg:require('@/assets/potato_cooked.png'),
    during:[
        {
            time:10,//after this time show img,
            img:require('@/assets/potato_cooked.png')
        },
    ],
    beginImg:require('@/assets/seedling.png'),
}
//var potato = new Crop('potato',process,require('@/assets/potato_cooked.png'),-1);
export default process;
