<template>
  <div class="educationContainer">
    <table class="">
        <tr>
          <th class="col">Level</th>
          <th class="col">School</th>
          <th class="col">Field</th>
          <th class="col">Period</th>
          <th class="col">Started</th>
        </tr>
        <tr v-for="e in allEducaton"  class="row">
          <td class="col">{{e.schoolLevel}}</td>
          <td class="col">{{e.SchoolName}}</td>
          <td class="col">{{e.field}}</td>
          <td class="col">{{e.period}}</td>
          <td class="col">{{e.started}}</td>
        </tr>
    </table>
    
      {{ allEducaton }}
     
    <p ></p>
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
      allEducaton(){
        return this.educaton
      }
    }
       
}
</script>
<style>
.educationContainer{
  width: 80vw;
  height: fit-content;
  padding: 2rem;
  box-shadow: 0px 0px 25px 8px rgb(255, 0, 0);
}

</style>