import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-food',
  standalone: false,
  
  templateUrl: './view-food.component.html',
  styleUrl: './view-food.component.css'
})
export class ViewFoodComponent implements OnInit{

  searchTerm:string = '';
  
  constructor(){
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
