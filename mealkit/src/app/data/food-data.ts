import { Category } from "./category-data";

export enum Service{
    FOOD_SERVICE,
    MEALKIT_SERVICE
}

export interface Food{
    food_id:number,
    name:string,
    description:string,
    service:Service,
    imageUrl:string,
    videoUrl:string,
    stock:number,
    rating:number,
    category:Category
}