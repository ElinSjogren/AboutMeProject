<template>
  <div class="educationContainer">
    <div class="tableWrapper"></div>
    <div class="row tableHeadings">
      <div class="col">Level</div>
      <div class="col">School</div>
      <div class="col">Field</div>
      <div class="col">Period</div>
      <div class="col">Started year</div>
    </div>
    <div v-for="e in allEducaton" class="row rowsOfData">
      <div class="col dataCell" data-cell="Level">{{e.schoolLevel}}</div>
      <div class="col dataCell" data-cell="SchoolName">{{e.SchoolName}}</div>
      <div class="col dataCell" data-cell="Field">{{e.field}}</div>
      <div class="col dataCell" data-cell="Period">{{e.period}}</div>
      <div class="col dataCell" data-cell="Started">{{e.started}}</div>
    </div>
     
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
@media screen and (max-width: 750px) {
.tableWrapper ,
.rowsOfData{
display: grid;
padding:3px;
}
.tableHeadings{
  display:none;
}
.dataCell::before{
 content: attr(data-cell)": ";
 font-weight: 500;
}
}

.rowsOfData:nth-child(2n){
  background-color: rgb(41, 41, 41);
}
.tableHeadings{
  background-color: black;
}
.educationContainer{
  width: 80vw;
  height: fit-content;
  padding: 2rem;
  box-shadow: 0px 0px 25px 8px rgb(255, 0, 0);
}

</style>