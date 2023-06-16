<template >

    <div class="container">
      <div class="d-flex justify-center align-items-center bg-dark">
        <h2 class="col-10 display-3 custom-text-color " >Lista de  Veiculos</h2>
        <div class="col-2">
          <router-link to="/Adicionar-Veiculo" class="btn btn-success  col-6" >Adicionar</router-link>
        </div>
      </div>
     
      
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th class="col-4"> Modelo</th>
            <th class="col-2"> Placa</th>
            <th class="col-2"> Cor</th>
            <th class="col-2"> Tipo</th>
            <th scope="col-2">Ações</th>
          </tr>
        </thead>
        <tbody>
  
          <tr scope="row">
            <td>UNO MILLE FIRE</td>
            <td> AMC-4616</td>
            <td> Preto</td>
            <td >Carro</td>
            <td class=" custom-div-botoes">
              <button class="btn btn-editar col-5 "> Editar</button>
              <button class="btn btn-excluir col-5">Excluir</button>
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