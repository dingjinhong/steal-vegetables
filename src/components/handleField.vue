<template>
    <div>
        <handActive v-if='crop&&crop.status===1' class='hand-active'/>
    </div>
</template>
<script>
import handActive from './handActive';
    export default{
        components:{
            handActive
        },
        props:{
            crop:{
                type:Object,
                default(){
                    return null;
                }
            }
        },

    }
</script>