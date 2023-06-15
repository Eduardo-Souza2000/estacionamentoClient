<template>

  <div class="container">

    <div class="text-center mb-5">
        <h1 class="display-4 custom-text-color">Bem Vindo ao Estacionamento</h1>
        <h5 class=" custom-text-color">Otimo dia de Trabalho</h5>
        <div id="clock"></div>


    </div>

    <div class="col-12">
      <router-link to="/" class="btn btn-success btn-lg col-6" >Registrar Entrada</router-link>
    </div>




  </div>
  
</template>

<script lang="ts">

  function exibirRelogio() {
    const clockElement = document.getElementById('clock') as HTMLDivElement;
    const dataAtual = new Date();
    const hora = dataAtual.getHours().toString().padStart(2, '0');
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    const segundos = dataAtual.getSeconds().toString().padStart(2, '0');
    const horaFormatada = `${hora}:${minutos}:${segundos}`;
    clockElement.textContent = horaFormatada;
  }
  setInterval(exibirRelogio, 1000);

  

</script>

<style scoped>

#clock{
  color: #FFFFFF;
  font-size: 2rem;
}


</style>
