import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../data/user-data';

@Component({
  selector: 'app-view-users',
  standalone: false,
  
  templateUrl: './view-users.component.html',
  styleUrl: './view-users.component.css'
})
export class ViewUsersComponent implements OnInit{

  users?:User[];
  searchTerm:string ='';
  
  constructor(private userService:UserService){
  }

  ngOnInit(): void {
    this.userService.getAllUsers();

    this.userService.users.subscribe((userList) =>{
      this.users = userList;
    })
  }

  get filteredUsers(){
    console.log("filtered");
    if(this.users){ 

      return this.users.filter( currUser =>
        currUser.email.toString().includes(this.searchTerm)
      );
    }

    return;
  }
}

