import { Food } from "./food-data";

export interface Category{
    category_id:number,
    name:string,
    foods:Food[]

}