<template >

    <div class="container">

      <div v-if="mensagem.ativo" class="row">
          <div class="col-md-12 text-start">
            <div :class="mensagem.css" role="alert">
              <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
        </div>

        <div class="text-center mb-5">
            <h1 v-if="form === undefined" class="display-4 custom-text-color">Adicionar Condutor</h1>
            <h1 v-if="form === 'editar'" class="display-4 custom-text-color">Editar Condutor</h1>
            <h1  v-if="form === 'excluir'" class="display-4 custom-text-color">Excluir Condutor</h1>
        </div>

        <form class="row g-3 d-flex justify-content-center bg-dark">

            <div class="row justify-content-center mt-2 mb-3">

                <div class="col-md-3" >
                    <label for="inputcondutor" class="form-label text-color">Nome do Condutor</label>
                    <input type="nome" class="form-control" id="inputNomeCondutor" v-model="condutor.nome" >
                </div>

            </div>
            <div class="row justify-content-center mt-2 mb-3">

                <div class="col-md-3" >
                    <label for="inputPlaca" class="form-label text-color">CPF do Condutor</label>
                    <input type="nome" class="form-control" id="inputCPF" v-model="condutor.cpf">
                </div>

            </div>
            <div class="row justify-content-center mt-2 mb-3">

                <div class="col-md-3" >
                    <label for="inputPlaca" class="form-label text-color">Telefone</label>
                    <input type="nome" class="form-control" id="inputTelefone" v-model="condutor.telefone">
                </div>
                
            </div>
           

            <div v-if="form === undefined" class="row justify-content-center mt-3 mb-3 col-3">

                <router-link to="/Listar-Condutor" class="btn btn-success " @click="onClickCadastrar" >Adicionar</router-link>

            </div>

            <div v-if="form === 'excluir'"  class="d-flex justify-content-center ">
                <div class="row ">
                    
                    <div class="col-5">
                        <router-link to="/Listar-Condutor" class="btn btn-primary" @click="onClickExcluir">Excluir</router-link>
                    </div>
                
                    <div class="col-5">
                        <router-link to="/Listar-Condutor" class="btn btn-info">Voltar</router-link>
                        
                    </div>
                </div>

            </div>

            <div v-if="form === 'editar'"  class="d-flex justify-content-center ">

                <div class="row ">
                    
                <div v-if="form === 'editar'" class="col-5">
                        <router-link to="/Listar-Condutor" class="btn btn-warning" @click="onClickEditar" >Editar</router-link>
                </div>
                    <div class="col-5">
                        <router-link to="/Listar-Condutor" class="btn btn-info">Voltar</router-link>
                        
                    </div>
                </div>

            </div>

        </form>
                
    
  
    </div>
  
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { condutor } from '@/model/condutor';
import { condutorclient } from '@/client/condutorclient';




export default defineComponent({
  name: 'MarcaFormulario',

  data() {
    return {
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
   
   
    onClickCadastrar(){
        this.condutorclient.cadastrar(this.condutor)
        .then(sucess => {
          this.condutor = new condutor();

          
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },

    findbyId(id: number){
      this.condutorclient.findbyid(id)
        .then(sucess => {
          this.condutor = sucess;
          
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickEditar(){
      this.condutorclient.editar(this.condutor.id, this.condutor)
        .then(sucess => {
          this.condutor = new condutor()
          this.mensagem.ativo = true;
          this.mensagem.mensagem = sucess;
          this.mensagem.titulo = "Parabens. ";
          this.mensagem.css = "alert alert-success alert-dismissible fade show";
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },
    onClickExcluir(){
      this.condutorclient.delete(this.condutor.id)
        .then(sucess => {
          this.condutor = new condutor()          
          this.$router.push({ name: 'Listar-condutor' });
        })
        .catch(error => {
          this.mensagem.ativo = true;
          this.mensagem.mensagem = error;
          this.mensagem.titulo = "Error. ";
          this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        });
    },


  }
});



  
  
</script>

<style scoped>
.text-color{
    color: #FFFFFF;
    
}


</style>