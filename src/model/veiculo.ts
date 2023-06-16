import { abstractentity } from "@/model/abstractentity";
import { modelo } from "@/model/modelo";
import { cor } from "@/model/enum/cor";
import { tipo } from "@/model/enum/tipo";

export class veiculo extends abstractentity{
    placa!: string;
    modelo!: modelo;
    cor!: cor;
    tipo!: tipo;
    ano!:number;


}