import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { Authentication } from '../../data/authentication-data';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login-page',
  standalone: false,
  
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  
  logObj:any = {
    email:'',
    password:''
  }

  errorMessage:string | null = null;

  constructor(private userService:UserService, private router:Router){

  }

  login():void{

    alert("data entered " + this.logObj.email + " " + this.logObj.password);
    this.userService.login(this.logObj).subscribe({
      next: (response:Authentication) =>{
        this.userService.setLoginInfo(response);

        alert("response is " + response.accessToken);

        this.router.navigateByUrl('');
        

      },
      error: (error) =>{
        alert("error while login");
        if(error.status == 400){
          this.errorMessage = "The password you have entered is wrong";
        }else if(error.status == 401){
          this.errorMessage = "The email does not exist";
        }
      }
    });
  }

}
