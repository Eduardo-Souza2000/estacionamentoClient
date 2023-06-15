<template >

    <div class="container">
        <div class="text-center mb-5">
            <h1 class="display-4 custom-text-color">Adicionar Marca</h1>
        </div>

        <form class="row g-3 d-flex justify-content-center">
            <div class="col-md-4" >
                <label for="inputNome" class="form-label">Nome da Marca</label>
                <input type="nome" class="form-control" id="inputNome">
            </div>
            
            <div class="col-12">
                <router-link to="/listarmarca" class="btn btn-success " >Adicionar</router-link>
            </div>

        </form>
                
    
  
    </div>
  
</template>
  
<script lang="ts">
  
  
</script>
  
 
<style>

.container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 50vh; /* Define a altura do container como 100% da altura da viewport */

}
  
.form-label{
    color: #FFFFFF; 
}
  
</style>