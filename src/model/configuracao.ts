import { abstractentity } from "@/model/abstractentity";

export class configuracao extends abstractentity{
  

    valorHora!: number;
    valorMinutoMulta!: number;
    inicioExpediente!: Date;
    fimExpediente!: Date;
    tempoDeDesconto!: Date;
    gerarDesconto!: boolean;
    vagasMoto!: number;
    vagasCarro!: number;
    vagasVan!: number;

}