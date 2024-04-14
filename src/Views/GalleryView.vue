<template>
  <div class="galleryContainer">
    <h1>Hello:)</h1>
    
    <div v-for="path in allImages" class="">        
        <img  :src=path>
    </div>
  </div>
</template>
<script>
import { useInformationStore } from '@/Store/InformationStore.js';
import { mapState } from 'pinia';
export default{
    data(){
        return{
            imgSrc:"/src/assets/paintings/img1.jpg"
        }
    },
    components:{
        

    },
    methods:{

    },
    mounted(){

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
  max-height:500px;
  border-radius: 3px;
}
img{
  animation: fade-in linear;
  animation-timeline: view();
}
@keyframes fade-in{
  from {scale: .5; opacity: 0;}
  to {scale: 1; opacity: 1;}
}
.imgPlace{
  display:flex;
  flex-direction: column;
  justify-content: center;
}
.galleryContainer{
  
}
</style>