<template >

  <div class="container">
    <div class="d-flex justify-center align-items-center bg-dark">
      <h2 class="col-10 display-3 custom-text-color " >Listar Marcas</h2>
      <div class="col-2">
        <router-link to="/Adicionar" class="btn btn-success  col-6" >Adicionar</router-link>
      </div>
    </div>
   
    
    <table class="table table-bordered table-dark">
      <thead>
        <tr>
          <th class="col-10"> Marca</th>
          <th scope="col-2">Ações</th>
        </tr>
      </thead>
      <tbody>

        <tr scope="row">
          <td class="col-10 custom-text-left">Chevrolet</td>
          <td class=" custom-div-botoes">
            <button class="btn btn-editar col-5 "> Editar</button>
            <button class="btn btn-excluir col-5">Excluir</button>
          </td>
        </tr>

        <tr scope="row">
          <td class="col-10 custom-text-left">Fiat</td>
          <td class="custom-div-botoes ">
            <button class="btn btn-editar col-5"> Editar</button>
            <button class="btn btn-excluir col-5">Excluir</button>
          </td>
        </tr>
        <tr scope="row">
          <td class="col-10 custom-text-left">Ford</td>
          <td class="custom-div-botoes">
            <button class="btn btn-editar col-5"> Editar</button>
            <button class="btn btn-excluir col-5">Excluir</button>
          </td>
        </tr>
        <tr scope="row">
          <td class="col-10 custom-text-left">Toyota</td>
          <td class="custom-div-botoes">
            <button class="btn btn-editar col-5"> Editar</button>
            <button class="btn btn-excluir col-5">Excluir</button>
          </td>
        </tr>
        <tr scope="row">
          <td class="col-10 custom-text-left">Honda</td>
          <td class="custom-div-botoes">
            <button class="btn btn-editar col-5"> Editar</button>
            <button class="btn btn-excluir col-5">Excluir</button>
          </td>
        </tr>
        <tr scope="row"> 
          <td class="col-10 custom-text-left">Volkswagen</td>
          <td class="custom-div-botoes">
            <button class="btn btn-editar col-5"> Editar</button>
            <button class="btn btn-excluir col-5">Excluir</button>
          </td>
        </tr>
        <tr scope="row">
          <td class="col-10 custom-text-left">Nissan</td>
          <td class="custom-div-botoes">
            <button class="btn btn-editar col-5"> Editar</button>
            <button class="btn btn-excluir col-5">Excluir</button>
          </td>
        </tr>
        <tr scope="row">
          <td class="col-10 custom-text-left">BMW</td>
          <td class="custom-div-botoes">
            <button class="btn btn-editar col-5"> Editar</button>
            <button class="btn btn-excluir col-5">Excluir</button>
          </td>
        </tr>
        <tr scope="row">
          <td class="col-10 custom-text-left">Audi</td>
          <td class="custom-div-botoes">
            <button class="btn btn-editar col-5"> Editar</button>
            <button class="btn btn-excluir col-5">Excluir</button>
          </td>
        </tr>
        <tr scope="row">
          <td class="col-10 custom-text-left">Mitsubishi</td>
          <td class="custom-div-botoes">
            <button class="btn btn-editar col-5"> Editar</button>
            <button class="btn btn-excluir col-5"> Excluir</button>
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