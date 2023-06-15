import { abstractentity } from "@/model/abstractentity";
import { marca } from "@/model/marca";

export class modelo extends abstractentity{
    nome!: string;
    marca!: marca;
}