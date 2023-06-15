import { abstractentity } from "@/model/abstractentity";

export class condutor extends abstractentity{

    nome!: string;
    cpf!:string;
    telefone!: string;
    tempogasto!: Number;
    tempodesconto!: Number;
    tempototal!:Number; 


}