<template>
    <div class="container col-5 mt-5 bg-notinha">

        <h1 class="mt-4">Recibo <br> Estacionamento do Semestre</h1>
      
        <div class="row">
            <div class="col-md-12 text-end">
                <p class="fw-bold">Número do Recibo: 001</p>
                <p>Data: 16/06/2023</p>
            </div>
        </div>
        
        
        <div class="dashed-line"></div>
      

        <div v-if="movimentacao.condutor" class="row mt-3 justify-content-start">

            <h5> Dados do Condutor</h5>

            <div class="col-6">
                <div class="d-flex flex-column align-items-start">
                    <div class="row">
                        <p class="col">Nome: {{ movimentacao.condutor.nome }}</p>
                    </div>
                    <div class="row">
                        <p class="col">CPF: {{ movimentacao.condutor.cpf }}</p>
                    </div>
                    <div class="row">
                        <p class="col">Telefone: {{ movimentacao.condutor.telefone }}</p>
                    </div>
                    <div class="row">
                        <p class="col">Horas Pagas: {{ movimentacao.tempoTotalhora }}</p>
                    </div>
                </div>
            </div>

            <div class="dashed-line"></div>

        </div>
     
        <div v-if="movimentacao.veiculo" class="row mt-3 justify-content-start">

            <h5> Dados do Veiculo</h5>

            <div class="col-6 ">
                
                <div class="d-flex flex-column align-items-start" >
                    <div class="row"> 
                        <p>Placa: {{ movimentacao.veiculo.placa }}</p>
                    </div>
                    <div class="row"> 
                        <p>Modelo: {{ movimentacao.veiculo.modelo.nome }} </p>
                    </div>
                    <div class="row"> 
                        <p>Marca:  {{ movimentacao.veiculo.placa }}  </p>
                    </div>
                    <div class="row"> 
                        <p>Tipo do Veiculo: {{ movimentacao.veiculo.tipo }}</p>
                    </div>
                    <div class="row"> 
                        <p>Ano do Veiculo: {{ movimentacao.veiculo.ano }}</p>
                    </div>
                </div>
            </div>

        </div>
  

        <div class="dashed-line"></div>

        <div class="row mt-3">
            <div class="col">
                <h5> Dados da Movimentaçao </h5>
                <div class="d-flex flex-column align-items-start">
                    <div class="row">
                        <p class="col">Hora de Entrada: {{ movimentacao.entrada }}</p>
                    </div>
                    <div class="row">
                        <p class="col">Hora da Saida: {{ movimentacao.saida }}</p>
                    </div>
                    <div class="row">
                        <p class="col">Tempo de Permanencia: {{ movimentacao.tempoTotalhora }}</p>
                    </div>
                    <div class="row">
                        <p class="col">Minutos apos Horario Comercial: {{ movimentacao.tempoMultaMinuto }} </p>
                    </div>
                    <div class="row">
                        <p class="col"> Tempo para Desconto: {{ movimentacao.tempoDesconto }}</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="dashed-line"></div>

        <div v-if="movimentacao.condutor" class="row mt-3">
            <div class="col">
                <h5> Dados Sobre Desconto </h5>
                <div class="d-flex flex-column align-items-start">
                    
                    <div class="row">
                        <p class="col">Horas Acumuladas pelo Condutor: {{ movimentacao.condutor.tempototal}}</p>
                    </div>
                    <div class="row">
                        <p class="col"> Valor de Desconto: {{ movimentacao.valorDesconto }}</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="dashed-line"></div>

        <div class="row mt-3 mb-5">
            <div class="col">
                <h5> Financeiro </h5>
                <div class="d-flex flex-column align-items-start">
                    
                    <div class="row">
                        <p class="col">Valor por Hora: {{ movimentacao.valorHora }}</p>
                    </div>

                    <div class="row">
                        <p class="col">Valor por Minuto Multa: {{ movimentacao.valorHoraMulta }}</p>
                    </div>

                    <div class="row">
                        <p class="col">Valor Desconto: {{ movimentacao.valorDesconto }}</p>
                    </div>

                    <div class="row">
                        <p class="col">Valor a pagar da Multa: {{ movimentacao.valorMulta }}</p>
                    </div>

                    <div class="row">
                        <p class="col">Valor a Pagar por Tempo Estacionado: {{ movimentacao.valorHora }}</p>
                    </div>
                    <div class="row">
                        <p class="col"> Valor a Pagar por Exceder o horario comercial (MULTA): {{ movimentacao.valorMulta }}</p>
                    </div>
                    <div class="row">
                        <p class="col"> Valor Desconto: {{ movimentacao.valorDesconto }}</p>
                    </div>

                    <div class="row">
                        <h4> Valor Toral a Pagar: {{ movimentacao.valorTotal }}</h4>
                    </div>
                </div>
            </div>

        </div>

        <div class="dashed-line"></div>

        <div class="row mt-3">

            <div class="row justify-content-center mt-4">
                <button type="button" class="btn btn-primary mt-4 col-6" data-bs-toggle="modal" data-bs-target="#modalRecibo">Imprimir Recibo</button>
             </div>
            <div class="row justify-content-center mt-2">
                <router-link to="/Movimentacao" class="btn btn-primary-voltar mt-4 col-6">Voltar</router-link>
            </div>
        </div>
        
    
    </div>

  
  </template>


<script lang="ts">

import { defineComponent } from 'vue';

import { movimentacao } from '@/model/movimentacao';
import { MovimentacaoClient } from '@/client/MovimentacaoClient';
import { condutorclient } from '@/client/condutorclient';
import {condutor} from '@/model/condutor';
import { MarcaClient } from '@/client/MarcaClient';
import { marca } from '@/model/marca';
import { VeiculoClient } from '@/client/VeiculoClient';
import { veiculo } from '@/model/veiculo';
import { ModeloClient } from '@/client/ModeloClient';
import { modelo } from '@/model/modelo';

export default defineComponent({ 
    name: 'MovimentacaoFormulario',

data() {
  return {
      movimentacao: new movimentacao(),
      MovimentacaoClient: new MovimentacaoClient(),
      modelo: new modelo(),
      modeloclient: new ModeloClient(),
      marcaclient: new MarcaClient(),
      marca: new marca(),
      VeiculoClient: new VeiculoClient(),
      veiculo: new veiculo(),
      condutor: new condutor(),
      condutorclient: new condutorclient(),
      mensagem: {
      ativo: false as boolean,
      titulo: "" as string,
      mensagem: "" as string,
      css: "" as string
    }
  }
},
computed: {
  id () { 
    return this.$route.query.id
  },
  form () {
    return this.$route.query.form
  }
  
},
mounted() { 

  if (this.id !== undefined)
  {
      this.findbyId(Number(this.id));
      
  };

  
},
methods: {
 
  findbyId(id: number){
    this.MovimentacaoClient.findbyid(id)
      .then(sucess => {

        this.movimentacao = sucess;
        this.procuraVeiculo();
        this.procuraCondutor();            
        
      })
      .catch(error => {
        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      });
  }, procuraVeiculo(){
        this.VeiculoClient.findbyid(this.movimentacao.veiculo.id)
                .then(sucesso => {
                    this.veiculo = sucesso;
                    this.modeloclient.findbyid(this.veiculo.modelo.id)
                        .then(sucesso => {
                            this.modelo = sucesso;

                            this.marcaclient.findbyid(this.modelo.marca.id)
                                .then(sucesso => {
                                    this.marca = sucesso;
                                    
                                })
                                .catch(error => {
                                    this.mensagem.ativo = true;
                                    this.mensagem.mensagem = error;
                                    this.mensagem.titulo = "Error. ";
                                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                                });
                        })
                        .catch(error => {
                            this.mensagem.ativo = true;
                            this.mensagem.mensagem = error;
                            this.mensagem.titulo = "Error. ";
                            this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                        });
                   

                })
                    .catch(error => {
                        this.mensagem.ativo = true;
                        this.mensagem.mensagem = error;
                        this.mensagem.titulo = "Error. ";
                        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                    });
  },
  procuraCondutor(){
    this.condutorclient.findbyid(this.movimentacao.condutor.id)
                .then(sucesso => {
                    this.condutor = sucesso;

                })
                .catch(error => {
                    this.mensagem.ativo = true;
                    this.mensagem.mensagem = error;
                    this.mensagem.titulo = "Error. ";
                    this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                });
  }
  


 }



 })



</script>

<style>
.bg-notinha{
    background-color: rgba(255, 255, 84, 0.856);
    color: black;

}

.btn-primary-voltar{
    background-color: blue;
    color: white;
}

.btn-primary-voltar:hover{
    background-color: rgb(1, 1, 128);
    color: white;
}

.dashed-line {
  border-top: 1px dashed #000;
}

</style>