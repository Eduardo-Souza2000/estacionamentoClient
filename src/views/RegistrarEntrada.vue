<template>
      <div class="container mt-5 bg-dark">
        <h1 class="display-4 custom-text-color">Registrar Entrada</h1>
        <form class="form-inline">
          <div class="row mt-4 mb-4 justify-content-center">
            <div class="row col-12 justify-content-center">
              
              <div class="row justify-content-center">
                <div class="col-6">
                  <input type="text" class="form-control col-6" id="cpf" placeholder="Digite o CPF do condutor..." maxlength="14">
                </div>
              </div>
              <div class="col-2 mt-3">
                <button class="btn bg-warning" @click="formatarCPF">Pesquisar</button>
              </div>
              <div class="col-3 mt-3">
                <router-link to="/Adicionar-Condutor" class="btn btn-success">Cadastrar Condutor</router-link>
              </div>
            </div>
          </div>

          <div class="row mt-4 mb-4 justify-content-center col-md-6 offset-md-3">
            <div class="col-5">
              <input class="form-control" type="text" readonly>
            </div>
            <div class="col-5">
              <input class="form-control" type="text" readonly>
            </div>
          </div>

          <div class="row mt-4 mb-4 justify-content-center">
            <div class="row col-12 justify-content-center">

              <div class="row justify-content-center">
                <div class="col-6">
                  <input type="text" class="form-control col-2" id="placa" placeholder="Digite a Placa do Veiculo" maxlength="14">
                </div>
              </div>
              <div class="row justify-content-center align-items-center">
                <div class="col-2 mt-3">
                  <button class="btn bg-warning">Pesquisar</button>
                </div>
                <div class="col-3 mt-3">
                  <router-link to="/Adicionar-Veiculo" class="btn btn-success">Cadastrar Veiculo</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4 mb-4 justify-content-center col-md-6 offset-md-3">
            <div class="col-5">
              <input class="form-control" type="text" readonly>
            </div>
            <div class="col-5">
              <input class="form-control" type="text" readonly>
            </div>
          </div>

          

        </form>
        <div class="col-12 mt-6 mb-6">
          <button class="btn btn-success btn-lg col-6" >Registrar Entrada</button>
        </div>
      </div>
    </template>
    
    <script lang="ts">
    
    </script>
    
    <style>
    /* Seu estilo CSS aqui */
    </style>