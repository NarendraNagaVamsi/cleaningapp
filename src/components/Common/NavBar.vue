  <template>
    <header class="container">
   <div class="row">
   <div class="col-8">
    <router-link to="/"> <h4>Thecleanic</h4></router-link>
   
   </div>
   <div class="col-4">
    
     <ul class="list-unstyled flex-items">
     <router-link  to="/plans"><li>Plans</li></router-link> 
      <router-link to="/services"> <li> Services</li></router-link>
      <router-link to="/about"><li> About</li></router-link> 
       <router-link to="/login"><li>Log In</li></router-link>
     </ul>
    
    </div>

   </div>
    </header>
    <main>


    </main>
    <footer>

    </footer>
  </template>
  <script setup>

</script>
<style scoped>
.flex-items{
display: flex;
  gap: 50px;
}

</style>