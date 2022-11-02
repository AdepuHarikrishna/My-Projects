import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

   loginResult:boolean = false;
   loggedInUser:User = new User();

   isLoggedIn():boolean{
      return this.loginResult;
   }

   setLogin(result:boolean, user:User){
      this.loginResult = result;
      this.loggedInUser = user;
   }

   getLoggedInUser():User{
      return this.loggedInUser;
   }

}
