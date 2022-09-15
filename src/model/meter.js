//import Crop from './crop';
var process={
    totalTime:20,
    endImg:require('@/assets/meter_cooked.png'),
    during:[
        {
            time:10,//after this time show img,
            img:require('@/assets/meter_cooked.png')
        },
    ],
    beginImg:require('@/assets/seedling.png'),
}
//var meter = new Crop('meter',process,require('@/assets/meter_cooked.png'),-1);
export default process;