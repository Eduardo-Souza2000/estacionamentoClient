<template >

    <div class="container">

        <div class="text-center mb-5">
            <h1 class="display-4 custom-text-color">Editar Veiculo</h1>
        </div>

        <form class="row g-3 d-flex justify-content-center bg-dark">
            <div class="row">
                <div class="col-md-3" >
                    <label for="inputmodelo" class="form-label text-color">Modelo do Veiculo</label>
                    <input type="nome" class="form-control" id="inputmodelo">
                </div>
                <div class="col-md-2" >
                    <label for="inputPlaca" class="form-label text-color">Placa do Veiculo</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>

                <div class="col-md-2" >
                    <label for="inputPlaca" class="form-label text-color">Cor do Veiculo</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>
                <div class="col-md-2" >
                    <label for="inputPlaca" class="form-label text-color">Tipo do Veiculo</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>
                <div class="col-md-2" >
                    <label for="inputPlaca" class="form-label text-color">Ano do Veiculo</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>
            </div>
            <!--
            <div class="col-12">
                <router-link to="/Listar-Veiculo" class="btn btn-success " >Adicionar</router-link>
            </div>-->

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