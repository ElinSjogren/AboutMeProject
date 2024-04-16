<template>
  <div class="startContainer text-center">
    <p>{{ introduction }}</p>
    <br>
    <div class="laser"></div>
    <p>
      {{ personalLife }}
    </p>
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
      ...mapState(useInformationStore, ['cv']),
      introduction(){
        return this.cv[0].introduction
      },
      personalLife(){
        return this.cv[0].personalLife
      }
    }
       
}
</script>
<style>
.startContainer{
  width: 80vw;
  height: fit-content;
  padding: 2rem;
  box-shadow: 0px 0px 25px 15px rgb(9, 224, 195);
}
</style>