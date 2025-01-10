import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food/food.service';
import { Category } from '../../data/category-data';

@Component({
  selector: 'app-carousel',
  standalone: false,
  
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit{

  categories:Category[] = [];

  constructor(private foodService:FoodService){

  }

  ngOnInit(): void {
    this.foodService.getAllCategory();

    this.foodService.categories.subscribe((category)=>{

      this.categories = category;
    })
  }
  
}
