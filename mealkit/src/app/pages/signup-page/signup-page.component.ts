import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { User } from '../../data/user-data';


@Component({
  selector: 'app-signup-page',
  standalone: false,
  
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {

  registerObj:any = {
    email:'',
    password:'',
    re_password:''
  }

  errorMessage:string | null = null;

  constructor(private userService:UserService, private router:Router){

  }


  register():void{

    if(this.registerObj.password !== this.registerObj.re_password){
      alert("check password again");
      this.errorMessage = "Password does not match";
      return ;
    }

    this.userService.signupUser(this.registerObj).subscribe({
      next: (response) =>{

        alert("you have successfully created an account " + response);
        this.errorMessage = null;
        this.router.navigateByUrl("/login");
      },
      error: (error) => {
        alert("error while registering user" + error.status);

        if(error.status == 409){
          this.errorMessage = "User already exists";
        }
      }
    })
  }
}
