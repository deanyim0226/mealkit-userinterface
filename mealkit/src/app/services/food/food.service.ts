import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Category } from '../../data/category-data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  SpringBaseUrl:string = environment.springFoodServiceUrl;
   
  constructor(private http:HttpClient) { }

  
  uploadCategory(category:Category){

    return this.http.post<Category>(this.SpringBaseUrl+'/createCategory',category);
    
  }
}
