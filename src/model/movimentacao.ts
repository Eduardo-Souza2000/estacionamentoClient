import { abstractentity } from "@/model/abstractentity";
import { veiculo } from "@/model/veiculo";
import { condutor } from "@/model/condutor";

export class movimentacao extends abstractentity{
    veiculo!: veiculo;
    condutor!: condutor;
    horaAtual!: Date;
    entrada!: Date;
    saida!: Date;
    tempoTotalhora!: number;
    tempoTotalminuto!: number;
    tempoDesconto!: number;
    tempoMultaMinuto!: number;
    tempoMultaHora!: number;
    valorDesconto!: number;
    valorMulta!: number;
    valorTotal!:number;
    valorHora!: number;
    valorHoraMulta!: number;
}