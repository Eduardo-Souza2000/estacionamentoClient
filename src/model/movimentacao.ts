import { abstractentity } from "@/model/abstractentity";
import { veiculo } from "@/model/veiculo";
import { condutor } from "@/model/condutor";

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