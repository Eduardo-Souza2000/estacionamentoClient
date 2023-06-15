import { abstractentity } from "@/model/abstractentity";

export class configuracao extends abstractentity{
    valorhora!: Number;
    valorminuto!: Number;
    inicioexpediente!: Date;
    fimexpediente!: Date;
    tempoparadesconto!: Date;
    tempodedesconto!: Date;
    gerardesconto!: boolean;
    vagasmotos!: Number;
    vagascarro!: Number;
    vagasvan!: Number;

}