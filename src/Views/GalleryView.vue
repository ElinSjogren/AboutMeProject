<template>
  <div class="galleryContainer">
    <h1>Hello:)</h1>
    {{ allImages }}
    <div class="imgPlace">
      <img v-for="path in allImages" src="path">
    </div>
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

.galleryContainer{
  
}
</style>