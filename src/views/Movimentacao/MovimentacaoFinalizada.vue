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


        <div class="row mt-3 justify-content-start">

            <h5> Dados do Condutor</h5>

            <div class="col-6">
                <div class="d-flex flex-column align-items-start">
                    <div class="row">
                        <p class="col">Nome:</p>
                    </div>
                    <div class="row">
                        <p class="col">CPF:</p>
                    </div>
                    <div class="row">
                        <p class="col">Telefone:</p>
                    </div>
                    <div class="row">
                        <p class="col">Horas Pagas:</p>
                    </div>
                </div>
            </div>

            <div class="dashed-line"></div>

        </div>

        <div class="row mt-3 justify-content-start">

            <h5> Dados do Veiculo</h5>

            <div class="col-6 ">
                
                <div class="d-flex flex-column align-items-start" >
                    <div class="row"> 
                        <p>Placa: </p>
                    </div>
                    <div class="row"> 
                        <p>Modelo: </p>
                    </div>
                    <div class="row"> 
                        <p>Marca: </p>
                    </div>
                    <div class="row"> 
                        <p>Tipo do Veiculo: </p>
                    </div>
                    <div class="row"> 
                        <p>Ano do Veiculo: </p>
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
                        <p class="col">Hora de Entrada:</p>
                    </div>
                    <div class="row">
                        <p class="col">Hora da Saida</p>
                    </div>
                    <div class="row">
                        <p class="col">Tempo de Permanencia: </p>
                    </div>
                    <div class="row">
                        <p class="col">Minutos apos Horario Comercial: </p>
                    </div>
                    <div class="row">
                        <p class="col"> Tempo para Desconto: </p>
                    </div>
                </div>
            </div>

        </div>

        <div class="dashed-line"></div>

        <div class="row mt-3">
            <div class="col">
                <h5> Dados Sobre Desconto </h5>
                <div class="d-flex flex-column align-items-start">
                    
                    <div class="row">
                        <p class="col">Horas Acumuladas pelo Condutor: </p>
                    </div>
                    <div class="row">
                        <p class="col"> Valor de Desconto: </p>
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
                        <p class="col">Valor a Pagar por Tempo Estacionado: </p>
                    </div>
                    <div class="row">
                        <p class="col"> Valor a Pagar por Exceder o horario comercial (MULTA): </p>
                    </div>
                    <div class="row">
                        <p class="col"> Valor Desconto: </p>
                    </div>

                    <div class="row">
                        <h4> Valor Toral a Pagar: </h4>
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

    <!-- Modal -->
    <div class="modal fade" id="modalRecibo" tabindex="-1" aria-labelledby="modalReciboLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title" id="modalReciboLabel">Recibo</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <p class="fw-bold">Nome da Loja</p>
            <p>Endereço da Loja</p>
            <p>Telefone da Loja</p>

            <table class="table mt-4">
                <thead>
                <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Preço Unitário</th>
                    <th scope="col">Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Produto 1</td>
                    <td>2</td>
                    <td>R$ 10,00</td>
                    <td>R$ 20,00</td>
                </tr>
                <tr>
                    <td>Produto 2</td>
                    <td>1</td>
                    <td>R$ 5,00</td>
                    <td>R$ 5,00</td>
                </tr>
                <tr>
                    <td>Produto 3</td>
                    <td>3</td>
                    <td>R$ 8,00</td>
                    <td>R$ 24,00</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <td colspan="3" class="text-end">Total:</td>
                    <td>R$ 49,00</td>
                </tr>
                </tfoot>
            </table>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="button" class="btn btn-primary">Imprimir</button>
            </div>
        </div>
        </div>
    </div>
  </template>


<script lang="ts">


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