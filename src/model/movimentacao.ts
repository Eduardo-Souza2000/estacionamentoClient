import { abstractentity } from "./abstractentity";
import { veiculo } from "./veiculo";
import { condutor } from "./condutor";

export class movimentacao extends abstractentity{
    veiculo!: veiculo;
    condutor!: condutor;
    horaatual!: Date;
    entrada!: Date;
    saida!: Date;
    tempototalhora!: Number;
    tempototalminuto!: Number;
    tempodesconto!: Number;
    tempomultaminuto!: Number;
    tempomultahora!: Number;
    valordesconto!: Number;
    valormulta!: Number;
    valortotal!:Number;
    valorhora!: Number;
    valorhoramulta!: Number;
}