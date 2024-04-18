<template>
  <div class="galleryContainer text-center">
    <h3>Gallery</h3>
    <p>Scroll down for my latest crafting.</p>
    <div v-if="loaded"  class="imgFrame">        
        <img v-for="path in allImages" :src=path>
    </div>
    <div v-else>..loading..

    </div>
  </div>
</template>
<script>
import { useInformationStore } from '@/Store/InformationStore.js';
import { mapState } from 'pinia';
export default{
    data(){
        return{
            loaded:null
        }
    },
    components:{
        

    },
    methods:{

    },
    mounted(){
      this.loaded=true;
    },
    computed:{
      ...mapState(useInformationStore, ['imgPaths']),
      allImages(){
        return this.imgPaths
      }
    }
       
}
</script>
<style>
.imgFrame{
  display:grid;
  margin:2rem;
  width: fit-content;
  margin-top: 3rem;
  
}
img{
  margin:auto;
  max-width:80vw;
  border-radius:1rem;
}
img{
  max-height: 80vh;
  margin-bottom: 2rem;
  animation: fade-in linear ;
  animation-timeline: view();
  animation-range: entry;
}
@keyframes fade-in{
  from {scale: .5; opacity: .1;}
  to {scale: 1; opacity: 1;}
}

.imgPlace{
  display:flex;
  flex-direction: column;
  justify-content: center;
}

</style>