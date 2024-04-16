<template>
  <div class="educationContainer">
    <p>{{ educaton }}</p>
  </div>
</template>
<script>
import { useInformationStore } from '@/Store/InformationStore.js';
import { mapState } from 'pinia';
export default{
    data(){
        return{
            
        }
    },
    components:{
        

    },
    computed:{
      ...mapState(useInformationStore, ['educaton']),
      educaton(){
        return this.educaton[0]
      }
    }
       
}
</script>
<style>
.educationContainer{
  width: 80vw;
  height: fit-content;
  box-shadow: 0px 0px 25px 15px rgb(255, 0, 0);
}
</style>