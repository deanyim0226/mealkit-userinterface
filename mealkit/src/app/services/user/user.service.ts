import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../data/user-data';
import { Authentication } from '../../data/authentication-data';
import { environment } from '../../environment/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService  {
  
  private loginSubject = new BehaviorSubject(false);  //handle asynchronous data flows with observable sequences.
  public loginStatus = this.loginSubject.asObservable();

  private userSubject = new BehaviorSubject<User[]>([]);
  public users = this.userSubject.asObservable();


  SpringBaseUrl:string = environment.springIDMServiceUrl;

  constructor(private http:HttpClient) { }

  signupUser(user:User){
    return this.http.post<User>(this.SpringBaseUrl + "/register", user);
  }

  login(user:User){
    return this.http.post<Authentication>(this.SpringBaseUrl+"/login", user);
    //subscribe() allows you to get the emitted values and perform actions with those values.
  }

  setLoginInfo(tokens:Authentication){
    sessionStorage.setItem("accessToken",tokens.accessToken);
    sessionStorage.setItem("refreshToken",tokens.refreshToken);
    this.loginSubject.next(true);

  }

  logout(event:Event):void{
    event.preventDefault();
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    this.loginSubject.next(false);
  }

  getAccessToken():string | null{

    return sessionStorage.getItem('accessToken');
  }

  getRefreshToken():string | null{
    return sessionStorage.getItem('refreshToken');
  }

  /////////////////////

  getAllUsers():void{
    this.http.get<User[]>(this.SpringBaseUrl+'/getAllRegularUser').subscribe({
      next: users =>{
        this.userSubject.next(users);
      },
      error: error =>{
        alert("error while retrieving all users")
      }
    })
  }
}
