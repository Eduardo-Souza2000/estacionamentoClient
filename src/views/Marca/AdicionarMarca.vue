<template >

    <div class="container ">
      
      <div class="text-center mb-5">
            <h1 v-if="form === undefined" class="display-4 custom-text-color">Adicionar Marca</h1>
            <h1 v-if="form === 'excluir'" class="display-4 custom-text-color">Excluir Marca</h1>
            <h1 v-if="form === 'editar'" class="display-4 custom-text-color">Editar Marca</h1>
        </div>

        <div v-if="mensagem.ativo" class="row">
          <div class="col-md-12 text-start">
            <div :class="mensagem.css" role="alert">
              <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
        </div>

        

        <form class="row g-3 d-flex justify-content-center bg-dark">
            <div class="col-md-4" >
                <label for="inputNome" class="form-label">Nome da Marca</label>
                <input type="nome" class="form-control" id="inputNome" v-model="marca.nome">
            </div>
            
            
            <div v-if="form === undefined" class="col-12">
                <button  class="btn btn-success " @click="onClickCadastrar" >Adicionar</button>
            </div>
            
            <div v-if="form === 'excluir'" class="d-flex justify-content-center ">
                <div class="row ">
                    <div class="col-5">
                        <button  class="btn btn-primary "  @click="onClickExcluir" >Excluir</button>
                    </div>
                    <div class="col-5">
                      <router-link to="/listarmarca" class="btn btn-info " >Voltar</router-link>
                    </div>
                </div>

            </div>

            <div v-if="form === 'editar'" class="d-flex justify-content-center ">
                <div class="row ">
                  <div class="col-5">
                        <button class="btn btn-warning"  @click="onClickEditar" >Editar</button>
                  </div>
                    <div class="col-5">
                        <router-link to="/listarmarca" class="btn btn-info " >Voltar</router-link>
                    </div>
                </div>

            </div>

        </form>

    </div>
  
</template>
  
<script lang="ts">


import {MarcaClient} from "@/client/MarcaClient";
import { marca} from "@/model/marca";

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MarcaFormulario',
  data() {
    return {
        marcaclient: new MarcaClient(),
        marca: new marca(),
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
    }

  },
  methods: {
    onClickCadastrar(){
        this.marcaclient.cadastrar(this.marca)
        .then(sucess => {
          this.marca = new marca();

          
          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";

          setTimeout(() => {
            this.$router.push({ name: 'listarmarca' });
           }, 3000); // Transição para a outra página após 2 segundos (ajuste o valor conforme necessário)
    })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error.data;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
});
    },
    findbyId(id: number){
      this.marcaclient.findbyid(id)
        .then(sucess => {
          this.marca = sucess;
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
      this.marcaclient.editar(this.marca.id, this.marca)
        .then(sucess => {
          this.marca = new marca()
          
          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
          setTimeout(() => {
            this.$router.push({ name: 'listarmarca' });
           }, 50000); // Transição para a outra página após 2 segundos (ajuste o valor conforme necessário)
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickExcluir(){
      this.marcaclient.delete(this.marca.id)
        .then(sucess => {
          this.marca = new marca()

          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
          setTimeout(() => {
            this.$router.push({ name: 'listarmarca' });
           }, 50000); // Transição para a outra página após 2 segundos (ajuste o valor conforme necessário)
          
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    fecharMensagem() {
      this.mensagem.ativo = false;
      this.$router.push({ name: 'listarmarca' });
    }
  }
});
  
  
</script>
  
 
<style scoped>

.container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 50vh; /* Define a altura do container como 100% da altura da viewport */

}
  
.form-label{
    color: #FFFFFF; 
}
  
</style>