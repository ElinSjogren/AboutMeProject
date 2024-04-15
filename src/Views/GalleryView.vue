<template>
  <div class="galleryContainer">
    <h3>Gallery</h3>
    <p>Scroll down for my latest crafting.</p>
    <div v-if="loaded" v-for="path in allImages" class="">        
        <img  :src=path>
    </div>
    <div v-else>
      <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
  </div>
</template>
<script>
import { useInformationStore } from '@/Store/InformationStore.js';
import { mapState } from 'pinia';
export default{
    data(){
        return{
            imgSrc:"/src/assets/paintings/img1.jpg",
            loaded:false
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
  width: fit-content;
  height: fit-content;
}
img{
  margin:auto;
  max-width:80vw;
  border-radius:1rem;
}
img{
  animation: fade-in linear ;
  animation-timeline: view();
  animation-range: entry;
}
@keyframes fade-in{
  from {scale: .5; opacity: .1;}
  to {scale: 1; opacity: 1;}
}
@keyframes fade-out{
  from {scale: 1; opacity: 1;}
  to {scale: .8; opacity: .1;}
}
.imgPlace{
  display:flex;
  flex-direction: column;
  justify-content: center;
}
.galleryContainer{
  
}
</style>