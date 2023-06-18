<template >

    <div class="container">
      <div class="d-flex justify-center align-items-center bg-dark">
        <h2 class="col-10 display-3 custom-text-color " >Configuração</h2>
        <div class="col-2">
          <router-link to="/Adicionar-Configuracao" class="btn btn-success  col-8" >Adicionar Configuração</router-link>
        </div>
      </div>

      <table class="table table-bordered table-dark">
      <thead>
        <tr>
          <th>Inicio Expediente</th>
          <th>Fim expediente </th>
          <th>Valor Hora</th>
          <th>Valor Minuto Multa</th>
          <th>Tempo para Desconto </th>
          <th>Tempo de Desconto </th>
          <th>Gerar Desconto </th>
          <th>Vagas Moto </th>
          <th>Vagas Carro </th>
          <th>Vagas Van </th>
          <th scope="col-3">Ações</th>
        </tr>
      </thead>
      <tbody>

        <tr scope="row">
            <th>08:00:00</th>
          <th>18:00:00</th>
          <th>10.00</th>
          <th>5.00</th>
          <th>50:00:00</th>
          <th>05:00:00</th>
          <th>Não</th>
          <th>25</th>
          <th>25</th>
          <th>25</th>
          <td class=" custom-div-botoes">
            <button class="btn btn-editar col-5 "> Editar</button>
            <button class="btn btn-excluir col-6">Excluir</button>
          </td>
        </tr>

       

      </tbody>
    
    </table>
     
      

  
    </div>
  
  </template>
  
  <script lang="ts">
  
  
  </script>
  
  
  <style scoped>
  .custom-text-color{
    color: #FFFFFF;
  }
  
  .custom-div-botoes{
    display: flex;
    justify-content: space-around;
  
  }
  
  .custom-text-left{
    text-align: left;
  }
  
  .btn-editar{
    background-color: rgb(243, 207, 5);
  }
  
  .btn-editar:hover{
    background-color: rgb(71, 70, 4);
  }
  
  
  .btn-excluir{
    background-color: rgb(255, 0, 0);
    color: #FFFFFF;
  }
  
  .btn-excluir:hover{
    background-color: rgb(128, 3, 3);
    color: #FFFFFF;
  }
  
  body {
      background-color: black;
      padding-top: 90px; /* ou qualquer valor que seja a altura da sua navbar */
    }
  
  </style>