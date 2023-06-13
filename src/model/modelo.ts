import { abstractentity } from "./abstractentity";
import { marca } from "./marca";

export class modelo extends abstractentity{
    nome!: string;
    marca!: marca;
}