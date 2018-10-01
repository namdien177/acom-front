import { Author } from "./author";
import { Tag } from "./tag";

export class Manga{
    id:number;
    name:string;
    aliases:string[];
    author:Author[];
    view:number;
    tags:Tag[];
}