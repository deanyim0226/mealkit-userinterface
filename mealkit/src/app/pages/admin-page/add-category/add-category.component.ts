import { Component } from '@angular/core';
import { FoodService } from '../../../services/food/food.service';

@Component({
  selector: 'app-add-category',
  standalone: false,
  
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  constructor(private foodService:FoodService){

  }

  categoryObj:any ={
    name:'',
  }


  saveCategory(){
    
    this.foodService.uploadCategory(this.categoryObj).subscribe({
      next: data=>{
        alert("successfully saved");
      },
      error: error=>{
        alert("error");
      }
    })
  }

}
