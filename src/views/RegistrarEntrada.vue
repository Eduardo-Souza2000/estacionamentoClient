<template>
      <div class="container mt-5 bg-dark">
        <h1 class="display-4 custom-text-color">Registrar Entrada</h1>
        <form class="form-inline">
          <div class="row mt-4 mb-4">
            <div class="row col-12">
              <div class="col-6">
                <input type="text" class="form-control" id="cpf" placeholder="Digite o CPF do condutor..." maxlength="14">
              </div>
              <div class="col-1">
                <button class="btn bg-warning" @click="formatarCPF">Pesquisar</button>
              </div>
              <div class="col-3">
                <router-link to="/Entrada" class="btn btn-success">Cadastrar Condutor</router-link>
              </div>
            </div>
          </div>
          <div class="row mt-4 mb-4">
            <div class="col-3">
              <input class="form-control" type="text" readonly>
            </div>
            <div class="col-3">
              <input class="form-control" type="text" readonly>
            </div>
          </div>
          <div class="row mt-4 mb-4">
            <div class="col-3">
              <input type="text" class="form-control col-2" id="placa" placeholder="Digite a Placa do Veiculo" maxlength="14">
            </div>
            <button class="btn bg-warning col-1">Pesquisar</button>
            <div class="col-3">
              <router-link to="/Adicionar-Veiculo" class="btn btn-success">Cadastrar Veiculo</router-link>
            </div>
          </div>
          <div class="row mt-4 mb-4">
            <div class="col-3">
              <input class="form-control" type="text" readonly>
            </div>
            <div class="col-3">
              <input class="form-control" type="text" readonly>
            </div>
          </div>

          

        </form>
        <div class="col-12 mt-4 mb-4">
          <button class="btn btn-success btn-lg col-6" @click="registrarEntrada">Registrar Entrada</button>
        </div>
      </div>
    </template>
    
    <script lang="ts">
    
    </script>
    
    <style>
    /* Seu estilo CSS aqui */
    </style>