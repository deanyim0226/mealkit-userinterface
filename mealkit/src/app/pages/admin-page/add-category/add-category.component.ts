import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food/food.service';
import { Category } from '../../../data/category-data';

@Component({
  selector: 'app-add-category',
  standalone: false,
  
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit {

  categories:Category[] = [];

  categoryObj:any ={
    name:'',
  }

  constructor(private foodService:FoodService){

  }

  ngOnInit(): void {

    this.foodService.getAllCategory();

    this.foodService.categories.subscribe((categoryList)=>{
      this.categories = categoryList;
    })
  }

  saveCategory(){
    
    this.foodService.saveCategory(this.categoryObj).subscribe({
      next: data=>{
        alert("successfully saved" + data);
      },
      error: error=>{
        alert("error");
      }
    })
  }

  deleteCategory(categoryId:number){
    
    alert("clicked")
    this.foodService.deleteCategory(categoryId).subscribe({
      next: data=>{
        alert("successfully deleted" + data);
      },
      error: error=>{
        alert("error");
      }
    })
    
  }

}
