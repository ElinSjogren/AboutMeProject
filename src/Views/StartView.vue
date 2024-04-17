<template>
  <div class="startContainer ">
    <p>{{ introduction }}</p>
    <br>
    <div class="startIntro">
      <img id="profilPic" src="../assets/private/profil.jpg" alt="profilPicture">
      <div class="fastFact">
          <p>
            <i class="bi bi-star-fill"></i> Name: Elin Sjögren
          </p>
          <p>
            <i class="bi bi-star-fill"></i>Age: 30
          </p>
          <p>
            <i class="bi bi-star-fill"></i>Living: Gislaved, SWE
          </p>
          <p>
            <i class="bi bi-star-fill"></i> Family: My husband Simon and our two cats.
          </p>
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
.fastFact{
  border:1px rgb(9, 224, 195) sodivd;
  border-radius: 1rem;
  padding-top:1rem;
  padding-bottom: 1rem;
  margin: 1rem;
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
@media screen and (max-width: 480px) {
.startContainer{
  padding:1rem;
  width:95vw;
}
#profilPic{
  margin: 0px;
}

}
@media screen and (min-width: 950px) {

  .startIntro{
    display: flex;
  }

}
</style>