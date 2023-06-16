<template >

    <div class="container">

        <div class="text-center mb-5">
            <h1 class="display-4 custom-text-color">Adicionar Condutor</h1>
        </div>

        <form class="row g-3 d-flex justify-content-center bg-dark">
            <div class="row">
                <div class="col-md-6" >
                    <label for="inputmodelo" class="form-label text-color">Nome do Condutor</label>
                    <input type="nome" class="form-control" id="inputmodelo">
                </div>
                <div class="col-md-3" >
                    <label for="inputPlaca" class="form-label text-color">CPF do Condutor</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>

                <div class="col-md-3" >
                    <label for="inputPlaca" class="form-label text-color">Telefone</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>
                
            </div>
            
            <div class="col-12">
                <router-link to="/Listar-Condutor" class="btn btn-success " >Adicionar</router-link>
            </div>

        </form>
                
    
  
    </div>
  
</template>
  
<script lang="ts">


  
  
</script>

<style scoped>
.text-color{
    color: #FFFFFF;
    
}


</style>