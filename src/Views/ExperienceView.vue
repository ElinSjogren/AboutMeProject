<template>
  <div class="experienceContainer">
    <p>My work experience has mainly revolved around customer service. An important lesson that I have taken with me is that communication is not as simple as you might think. You can speak the same language but still not understand each other. The importance of asking questions and ensuring that you understand your customer is paramount. </p>
    <div class="tableWrapper"></div>
    <div class="row tableHeadings">
      <div class="col">Workplace</div>
      <div class="col">Position</div>
      <div class="col">Duration</div>
      <div class="col">Start year</div>
    </div>
    <div v-for="w in allWorkExperience" class="row rowsOfData">
      <div class="col dataCell" data-cell="Workplace">{{w.Workplace}}</div>
      <div class="col dataCell" data-cell="Position">{{w.position}}</div>
      <div class="col dataCell" data-cell="Duration">{{w.duration}}</div>
      <div class="col dataCell" data-cell="Start year">{{w.startyear}}</div>
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
      ...mapState(useInformationStore, ['cv']),
      allWorkExperience(){
        return this.cv[0].recentWorkExperience
      }
    }
       
}
</script>
<style>
@media screen and (max-width: 750px) {
.tableWrapper ,
.rowsOfData{
display: grid;
padding:5px;
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
.experienceContainer{
  width: 80vw;
  height: fit-content;
  padding: 2rem;
  box-shadow: 0px 0px 25px 8px rgb(255, 238, 0);
}

</style>