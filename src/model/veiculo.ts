import { abstractentity } from "./abstractentity";
import { modelo } from "./modelo";
import { cor } from "./enum/cor";
import { tipo } from "./enum/tipo";

export class veiculo extends abstractentity{
    placa!: string;
    modelo!: modelo;
    cor!: cor;
    tipo!: tipo;


}