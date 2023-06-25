import { abstractentity } from "@/model/abstractentity";

export class condutor extends abstractentity{

    nome!: string;
    cpf!:string;
    telefone!: string;
    tempopago!: Number;
    tempodesconto!: Number;
    tempototal!:Number; 


}