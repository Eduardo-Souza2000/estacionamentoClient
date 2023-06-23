import { abstractentity } from "@/model/abstractentity";

export class configuracao extends abstractentity{
   /* valorhora!: BigDecimal;
    valorminuto!: Number;
    inicioexpediente!: Date;
    fimexpediente!: Date;
    tempoparadesconto!: Date;
    tempodedesconto!: Date;
    gerardesconto!: boolean;
    vagasmotos!: Number;
    vagascarro!: Number;
    vagasvan!: Number;*/
    valorhora!: number;
    valorminuto!: number;
    inicioexpediente!: string;
    fimexpediente!: string;
    tempoparadesconto!: string;
    tempodedesconto!: string;
    gerardesconto!: boolean;
    vagasmotos!: number;
    vagascarro!: number;
    vagasvan!: number;

}