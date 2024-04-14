<template>
  <div class="dafaultLayout">
      <header id="DefaultHeader">
        <h1 class="text-center">Welcome!</h1>
          <nav class="nav nav-center">
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/education">Education</RouterLink>
              <RouterLink to="/gallery">Gallery</RouterLink>
              <RouterLink to="/contact">Contact me</RouterLink>
          </nav>   
      </header>
      
      <main>
        <div></div>
        <div class="viewContent">
          <RouterView></RouterView>
        </div>
        <div></div>
      </main>
  </div>

</template>
<script>
import { RouterLink, RouterView } from 'vue-router';
export default{
  data(){
      return{

      }
  },
  components:{
      
  }
}
</script>
<style>
@media screen and (min-width: 720px) {
  .viewContent{
  display: flex;
  justify-content: center;
}
}
img{
  animation: fade-in linear;
  animation-timeline: view();
}
@keyframes fade-in{
  from {scale: .8; opacity: 0;}
  to {scale: 1; opacity: 1;}
}

</style>
