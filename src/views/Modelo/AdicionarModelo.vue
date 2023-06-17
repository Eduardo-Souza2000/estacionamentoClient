<template >

    <div class="container">

        <div class="text-center mb-5">
            <h1 class="display-4 custom-text-color">Adicionar Modelo</h1>
        </div>

        <form class="row g-3 d-flex justify-content-center bg-dark">

            <div class="row justify-content-center mt-3">
                <div class="col-md-4" >
                    <label for="inputModelo" class="form-label text-color">Modelo do Veiculo</label>
                    <input type="nome" class="form-control" id="inputModelo">
                </div>
                <div class="col-md-4" >
                    <label for="inputMarca" class="form-label text-color">Marca</label>
                    <input type="nome" class="form-control" id="inputMarca">
                </div>
 
                
            </div>
            
            <div class="row justify-content-center mt-3 mb-3 col-3">
                <router-link to="/Listar-Modelo" class="btn btn-success " >Adicionar</router-link>
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