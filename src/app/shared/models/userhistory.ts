import { Product } from "./product";

export class UserHistory{
    products!:Product[];
    email!:string;
    date:Date = new Date();
}