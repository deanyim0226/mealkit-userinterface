import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  isLoggedIn?:boolean;

  constructor(private userService:UserService){

  }
  
  ngOnInit(): void {

    this.userService.loginStatus.subscribe(result =>{
 
      this.isLoggedIn = result;

      if(this.userService.getAccessToken() && this.userService.getRefreshToken()){
        this.isLoggedIn = true;
      }
    })
  }

  logout(event:Event):void{
    this.userService.logout(event);
  }

}
