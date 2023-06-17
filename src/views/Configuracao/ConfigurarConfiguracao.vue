<template >

    <div class="container ">

        <div class="text-center mb-5">
            <h1 class="display-4 custom-text-color">Adicionar Configuraçao</h1>
        </div>

        <form class="row g-3 d-flex justify-content-center bg-dark">

            <div class="row justify-content-center mt-3">

                <div class="col-md-3" >
                    <label for="inputInicio" class="form-label text-color">Inicio Expediente</label>
                    <input type="nome" class="form-control" id="inputInicio">
                </div>
                <div class="col-md-3" >
                    <label for="inputPlaca" class="form-label text-color">Fim Expediente</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>
            </div>


            <div class="row justify-content-center mt-3">
                <div class="col-md-3" >
                    <label for="inputPlaca" class="form-label text-color">Valor Hora</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>

                <div class="col-md-3" >
                    <label for="inputPlaca" class="form-label text-color">Valor Minuto Multa</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>
                
            </div>

            <div class="row justify-content-center mt-3">
                <div class="col-md-3" >
                    <label for="inputInicio" class="form-label text-color">Tempo para Desconto</label>
                    <input type="nome" class="form-control" id="inputInicio">
                </div>
                <div class="col-md-3" >
                    <label for="inputPlaca" class="form-label text-color">Tempo de Desconto</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>
            </div>

            <div class="row justify-content-center mt-3">
                <div class="col-md-3" >
                    <label for="inputPlaca" class="form-label text-color">Gerar Desconto</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>
                
            
                <div class="col-md-3" >
                    <label for="inputInicio" class="form-label text-color">Vagas Moto</label>
                    <input type="nome" class="form-control" id="inputInicio">
                </div>

            </div>

            <div class="row justify-content-center mt-3">

                <div class="col-md-3" >
                    <label for="inputPlaca" class="form-label text-color">Vagas Carro</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>

                <div class="col-md-3" >
                    <label for="inputPlaca" class="form-label text-color">Vagas Van</label>
                    <input type="nome" class="form-control" id="inputPlaca">
                </div>
                
            </div>
            
            <div class="col-12 mb-5 mt-5">
                <router-link to="/Listar-Configuracao" class="btn btn-success " >Adicionar</router-link>
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