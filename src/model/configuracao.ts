import { abstractentity } from "@/model/abstractentity";

export class configuracao extends abstractentity{
  

    valorhora!: number;
    valorminuto!: number;
    inicioexpediente!: Date;
    fimexpediente!: Date;
    tempoparadesconto!: Date;
    tempodedesconto!: Date;
    gerardesconto!: boolean;
    vagasmotos!: number;
    vagascarro!: number;
    vagasvan!: number;

}