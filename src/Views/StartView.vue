<template>
  <div class="startContainer ">
    <p>{{ introduction }}</p>
    <br>
    <div class="startIntro">
      <img id="profilPic" src="../assets/private/profil.jpg" alt="profilPicture">
      <div class="fastFact">
        <ul>
          <li>
            Name: Elin Sjögren
          </li>
          <li>
            Age: 30
          </li>
          <li>
            Live: Gislaved, SWE
          </li>
          <li>
            Family: My husband Simon and our two cats.
          </li>
        </ul>
      </div>
    </div>
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
@media screen and (min-width: 950px) {

  .startIntro{
    display: flex;
  }

}
.fastFact{
  border:1px rgb(9, 224, 195) solid;
  border-radius: 1rem;
  padding:1rem;
  margin: 1rem;
}
ul li{
  text-decoration: none;

}
#profilPic{
  max-height: 10rem;
  margin: 1rem;
}
.startContainer{
  width: 60vw;
  height: fit-content;
  padding: 2rem;
  box-shadow: 0px 0px 25px 8px rgb(9, 224, 195);
}
</style>