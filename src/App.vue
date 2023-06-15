<template>

  <nav class="navbar navbar-expand navbar-dark bg-dark fixed-top">
    
    <ul class="nav nav-pills nav-fill">

      <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/about" class="nav-link">About</router-link>      
      </li>
      <li class="nav-item">
        <router-link to="/listarmarca" class="nav-link">Marca</router-link>
      </li>
     
    </ul>
  </nav>


  <router-view/>
  
</template>



<style lang="scss">


// Variable overrides first
$primary: #900;
$enable-shadows: true;
$prefix: "mo-";



// Then import Bootstrap
@import "../node_modules/bootstrap/scss/bootstrap";
@import url();

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.nav-link{
  color: #FFFFFF;
}


</style>
