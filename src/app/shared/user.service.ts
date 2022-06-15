import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '..';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public addUser(user:any){
    
    let users:any =[]
    if(localStorage.getItem("Users")){
      users=localStorage.getItem("Users")
      users=JSON.parse(users)
      users=[user,...users]
    }
    else{
      users=[user]
    }
    localStorage.setItem("Users",JSON.stringify(users))
  }  
}
