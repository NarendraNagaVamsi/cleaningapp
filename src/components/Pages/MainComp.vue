<template>
  <div class="img-container ">
    <div class="container">
    <h1>Remarkably Cleaner.</h1>
    <h1>Amazingly Simpler.</h1>
  </div>  
  </div>
  <div class=" container   form " >
    <FormComp />
  </div>
</template>

<script setup>
import FormComp from '../Common/FormComp.vue';
</script>

<style scoped>
.img-container {
  background-image: url("../../assets/images/kitchen-2565105_640.jpg");
  background-color: transparent;
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  height: 100vh; 
  width: 100%; 
}
.form{
 
  margin-top: -350px;
  position: absolute;
  left: 35%;
  

}
</style>


