<template>
      <div class="container mt-5 bg-dark">
        <h1 class="display-4 custom-text-color">Registrar Entrada</h1>
        <form class="form-inline">
          <div class="row mt-4 mb-4 justify-content-center">
            <div class="row col-12 justify-content-center">
              
              <div class="row justify-content-center">
                
                <div class=" col-6 row justify-content-center">

                  <label class="form-label text-color">Condutor</label>

                  <select v-model="movimentacao.condutor" class="form-select" aria-label="Default select example">

                      <option v-for="condutor in condutorAtivo " :key="condutor.id" :value="condutor"   selected>{{condutor.nome}}</option>

                  </select>

                </div>

              </div>
              
            </div>
          </div>

      

          <div class="row mt-4 mb-4 justify-content-center">
            <div class="row col-12 justify-content-center">

              <div class="col-6 row justify-content-center">

                <label class="form-label text-color">Veiculo</label>

                <select v-model="movimentacao.veiculo"  class="form-select" aria-label="Default select example">
              
                    <option v-for="veiculo in veiculoAtivo " :key="veiculo.id" :value="veiculo"   selected>{{veiculo.placa}}</option>
              
                </select>

              </div>
              
             
            </div>

            
            </div>
          

          

        </form>
        <div class="col-12 mt-6 mb-6">
          <button class="btn btn-success btn-lg col-6" @click="onClickCadastrar">Registrar Entrada</button>
        </div>
      </div>
    </template>
    
    <script lang="ts">
    import { defineComponent } from 'vue';
    import { MovimentacaoClient } from '@/client/MovimentacaoClient';
    import { movimentacao } from '@/model/movimentacao';
  
    import {VeiculoClient} from "@/client/VeiculoClient"
    import { veiculo } from '@/model/veiculo';

    import { condutor } from '@/model/condutor';
    import { condutorclient } from '@/client/condutorclient';
    

export default defineComponent({
  name: 'Veiculo',

  data() {
    return {
        movimentacao: new movimentacao(),
        MovimentacaoClient: new MovimentacaoClient(),
        veiculo: new Array<veiculo>(),
        VeiculoClient: new VeiculoClient(),
        
       condutor: new Array<condutor>(),
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
    },
    veiculoAtivo() :veiculo[] {
        return this.veiculo.filter((veiculo: veiculo) => veiculo.ativo);
  },
  condutorAtivo() :condutor[] {
        return this.condutor.filter((condutor: condutor) => condutor.ativo);
  }
    
  },
  mounted() { 
    if (this.id !== undefined)
    {
        this.findbyId(Number(this.id));
        
    };

    this.findAllVeiculo();
    this.findAllCondutor();

  },
  methods: {
   
    findAllVeiculo() {
      this.VeiculoClient.listAll()
        .then((sucess: veiculo[]) => {
          
          this.veiculo = sucess
          console.log(veiculo)

          
        })
        .catch((error :any )=> {
          console.log(error);
        });
    },
    findAllCondutor() {
      this.condutorclient.listAll()
        .then((sucess: condutor[]) => {
          
          this.condutor = sucess
          console.log(condutor)

          
        })
        .catch((error :any )=> {
          console.log(error);
        });
    },

    onClickCadastrar(){
        this.MovimentacaoClient.cadastrar(this.movimentacao)
        .then(sucess => {
          this.movimentacao = new movimentacao();
          this.findAllVeiculo();
          this.findAllCondutor();

          console.log(movimentacao)
          
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    findbyId(id: number){
      this.MovimentacaoClient.findbyid(id)
        .then(sucess => {
          this.movimentacao = sucess;
          this.findAllVeiculo();
          
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    }, 
    VeiculoSelecionado(){
      const veiculoEscolhido = this.movimentacao.veiculo 
      if( veiculoEscolhido){
        this.movimentacao.veiculo.modelo.nome = veiculoEscolhido.modelo.nome
        this.movimentacao.veiculo.modelo.marca.nome = veiculoEscolhido.modelo.marca.nome
        console.log(this.movimentacao.veiculo.modelo.nome)
        console.log(this.movimentacao.veiculo.modelo.marca.nome)
      } else{
        this.movimentacao.veiculo.modelo.nome = '';
        this.movimentacao.veiculo.modelo.marca.nome = '';

      }

    }
   


  }
});

    
    </script>
    

    
    
    <style>
    
    /* Seu estilo CSS aqui */
    </style>