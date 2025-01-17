import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { Food } from '../../data/food-data';
import { Category } from '../../data/category-data';

@Component({
  selector: 'app-delivery-page',
  standalone: false,
  
  templateUrl: './delivery-page.component.html',
  styleUrl: './delivery-page.component.css'
})
export class DeliveryPageComponent implements OnInit {

  categories:Category[] = [];

  constructor(private foodService:FoodService){

  }

  ngOnInit(): void {

    this.foodService.getAllCategory();

    this.foodService.categories.subscribe(categoryList=>{
      this.categories = categoryList;
      console.log(this.categories[0]);
    })


    

  }

}
