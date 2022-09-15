
import potato from './potato';
import meter from './meter';
import Crop from './crop';
export default[
    {
        img:require('@/assets/potato.png'),
        creationTool:()=>{
            return new Crop('potato',potato,require('@/assets/potato_cooked.png'),-1);
        },
        text:'土豆'

    },
    {
        img:require('@/assets/meter.png'),
        creationTool:()=>{
            return new Crop('meter',meter,require('@/assets/meter_cooked.png'),-1);
        },
        text:'大米'

    },

]