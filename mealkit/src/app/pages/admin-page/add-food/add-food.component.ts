import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food/food.service';
import { Category } from '../../../data/category-data';

@Component({
  selector: 'app-add-food',
  standalone: false,
  
  templateUrl: './add-food.component.html',
  styleUrl: './add-food.component.css'
})
export class AddFoodComponent implements OnInit {
  
  categoryList:Category[] = [];

  foodObj:any = {
    name:'',
    description:'',
    category_id:0,
    stock:0,
    file:null
  }

  constructor(private foodService:FoodService){

  }

  ngOnInit(): void {
    
    this.foodService.getAllCategory();
    
    this.foodService.categories.subscribe((categoryList) =>{
      this.categoryList = categoryList;
    })

  }
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.foodObj.file = file;
    }
  }

  saveFood(){

    alert("saved" + this.foodObj.category_id);

    const formData = new FormData();
    formData.append('name', this.foodObj.name);
    formData.append('description', this.foodObj.description);
    formData.append('categoryId', this.foodObj.category_id);
    formData.append('stock', this.foodObj.stock.toString()); // Ensure number is sent as string

    if (this.foodObj.file) {
        formData.append('file', this.foodObj.file);
    }

    this.foodService.saveFood(formData).subscribe({
      next: data=>{
        alert("successfully saved" + data);
      },
      error: error=>{
        alert("error");
      }
    })
  }


}
