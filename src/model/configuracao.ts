import { abstractentity } from "@/model/abstractentity";

export class configuracao extends abstractentity{
  

    valorHora!: number;
    valorMinutoMulta!: number;
    inicioExpediente!: Array <string>;
    fimExpediente!: Array <string>;
    tempoParaDesconto!: Array <string>;
    tempoDeDesconto!: Array <string>;
    gerarDesconto!: boolean;
    vagasMoto!: number;
    vagasCarro!: number;
    vagasVan!: number;

}