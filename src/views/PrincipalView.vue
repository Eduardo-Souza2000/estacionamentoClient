<template>

    <div class="container">
  
      <div class="text-center mb-5">
          <h1 class="display-4 custom-text-color">Bem Vindo ao Estacionamento</h1>
          <h5 class=" custom-text-color">Otimo dia de Trabalho</h5>
          <div id="clock"></div>
  
  
      </div>
  
      <div class="col-12 mt-4 mb-4">
        <router-link to="/Entrada" class="btn btn-success btn-lg col-6" >Registrar Entrada</router-link>
      </div>
  
  
      <table class="table table-bordered table-dark">
  
        <thead >
          <tr>
            <th class="col-4"> Condutor</th>
            <th class="col-4"> Placa</th>
            <th class="col-5"> Hora Entrada</th>
            <th >Registrar Saida</th>
          </tr>
  
        </thead>
  
        <tbody>
  
          <tr scope="row">
            <td>Eduardo</td>
            <td>RHS 8648</td>
            <td>01/06/2023 10:08:01</td>
            <td>
              <button class="btn bg-warning">Sair</button>
            </td>
          </tr>
  
        </tbody>
  
  
      </table>
  
    </div>
    
  </template>
  
  <script lang="ts">
  
    
  
  
  
  </script>
  
  <style scoped>
  
  #clock{
    color: #FFFFFF;
    font-size: 2rem;
  }
  
  .btn-success{
    background-color: rgb(0, 160, 0);
    color: #e7e7e7;
  }
  
  .btn-success:hover{
    background-color: rgb(5, 95, 5);
  }
  
  
  </style>
  