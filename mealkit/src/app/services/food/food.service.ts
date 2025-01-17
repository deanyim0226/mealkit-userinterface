import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Category } from '../../data/category-data';
import { BehaviorSubject, tap } from 'rxjs';
import { Food } from '../../data/food-data';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private categorySubject = new BehaviorSubject<Category[]>([]);
  public categories = this.categorySubject.asObservable();

  private foodSubject = new BehaviorSubject<Food[]>([]);
  public foods = this.foodSubject.asObservable();

  SpringBaseUrl:string = environment.springFoodServiceUrl;
   
  constructor(private http:HttpClient, private userService:UserService) { }

  deleteFood(foodId:number){

    return this.http.delete(this.SpringBaseUrl + '/deleteFood/' + foodId).pipe(
      tap(() =>{

        const modifiedFoodList = this.foodSubject.value.filter((food)=> food.food_id !== foodId);
        this.foodSubject.next(modifiedFoodList);

      })
    );
  }

  saveFood(food:FormData){

    return this.http.post<Food>(this.SpringBaseUrl+'/saveFood', food).pipe(
      tap((savedFood) =>{
        console.log(savedFood);
        const currentFoodList = this.foodSubject.value;
        this.foodSubject.next([...currentFoodList, savedFood]);
      })
    )

  }

  getAllFood():void{

     this.http.get<Food[]>(this.SpringBaseUrl + '/getAllFood').subscribe({
      next: foods =>{
        this.foodSubject.next(foods);
      },
      error: error =>{
        alert("error while retrieving food list")
      }
     })
  }

  
  saveCategory(category:Category){

    return this.http.post<Category>(this.SpringBaseUrl+'/createCategory',category).pipe(
      
      tap((savedCategory) =>{
        
        const currentCategoryList = this.categorySubject.value;
        this.categorySubject.next([...currentCategoryList, savedCategory]);
      })
    )
    
  }

  deleteCategory(categoryId:number){
    return this.http.delete(this.SpringBaseUrl + '/deleteCategory/' + categoryId).pipe(

      tap(() =>{
        const updatedCategory = this.categorySubject.value.filter((category)=> category.category_id !== categoryId);
        this.categorySubject.next(updatedCategory);
      })
    );
  }

  getAllCategory():void{

    this.http.get<Category[]>(this.SpringBaseUrl + '/getAllCategory').subscribe({
      next: categories =>{
        this.categorySubject.next(categories);
      },
      error: error =>{
        alert("error while retrieving category list")
      }
    })
  }
}
