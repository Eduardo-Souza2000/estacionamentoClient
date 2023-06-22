<template >

    <div class="container">

        <div class="text-center mb-5">
            <h1 class="display-4 custom-text-color">Editar Condutor</h1>
        </div>

        <form class="row g-3 d-flex justify-content-center bg-dark">

            <div class="row justify-content-center mt-2 mb-3">

                <div class="col-md-3" >
                    <label for="inputmodelo" class="form-label text-color">Nome do Condutor</label>
                    <input type="nome" class="form-control" id="inputmodelo" >
                </div>

            </div>
            <div class="row justify-content-center mt-2 mb-3">

                <div class="col-md-3" >
                    <label for="inputPlaca" class="form-label text-color">CPF do Condutor</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>

            </div>
            <div class="row justify-content-center mt-2 mb-3">

                <div class="col-md-3" >
                    <label for="inputPlaca" class="form-label text-color">Telefone</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>
                
            </div>
            <!--
            <div class="col-12 mt-5 mb-3">
                <router-link to="/Listar-Condutor" class="btn btn-success " >Adicionar</router-link>
            </div>
            -->

            <div class="d-flex justify-content-center ">
                <div class="row ">
                    <!--<div class="col-5">
                        <router-link to="/listarmarca" class="btn btn-primary " >Excluir</router-link>
                    </div>-->
                  <div class="col-5">
                        <router-link to="/listarmarca" class="btn btn-warning " >Editar</router-link>
                  </div>
                    <div class="col-5">
                        <router-link to="/listarmarca" class="btn btn-info " >Voltar</router-link>
                    </div>
                </div>

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