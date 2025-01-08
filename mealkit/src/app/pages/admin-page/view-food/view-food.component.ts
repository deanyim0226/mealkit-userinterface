import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food/food.service';
import { Food } from '../../../data/food-data';

@Component({
  selector: 'app-view-food',
  standalone: false,
  
  templateUrl: './view-food.component.html',
  styleUrl: './view-food.component.css'
})
export class ViewFoodComponent implements OnInit{

  searchTerm:string = '';
  foods:Food[] = [];
  
  constructor(private foodService:FoodService){
    
  }

  ngOnInit(): void {
    this.foodService.getAllFood();

    this.foodService.foods.subscribe((foodList) =>{
      this.foods = foodList;
    })

  }


  deleteFood(foodId:number){

    this.foodService.deleteFood(foodId).subscribe({
      next: (deletedFood) =>{
        alert("successfully deleted " + deletedFood);
      },
      error: (error)=>{
        alert("error while deleting food with Id: " + foodId);
      }
    })
  }
}
