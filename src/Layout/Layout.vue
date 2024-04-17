<template>
  <div class="dafaultLayout">
      <header id="DefaultHeader">
        <h1 class="text-center">Elin Sjögren</h1>
          <nav class="nav ">
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/education">Education</RouterLink>
              <RouterLink to="/experience">Experience</RouterLink>
              <RouterLink to="/contact">Contact</RouterLink>
              <RouterLink to="/gallery">Gallery</RouterLink>
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
  header{
    margin-bottom: 1rem;
  }
.viewContent{
  display: flex;
  justify-content: center;
  width:80vw;
  margin:auto;
  margin-bottom: 5rem;
}
nav{
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 720px) {

header{
  padding:1rem;
}
}


</style>
