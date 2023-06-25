import { abstractentity } from "@/model/abstractentity";
import { veiculo } from "@/model/veiculo";
import { condutor } from "@/model/condutor";

export class movimentacao extends abstractentity{
    veiculo!: veiculo;
    condutor!: condutor;
    horaatual!: Date;
    entrada!: Date;
    saida!: Date;
    tempototalhora!: number;
    tempototalminuto!: number;
    tempodesconto!: number;
    tempomultaminuto!: number;
    tempomultahora!: number;
    valordesconto!: number;
    valormulta!: number;
    valortotal!:number;
    valorhora!: number;
    valorhoramulta!: number;
}