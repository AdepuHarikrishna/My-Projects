import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RestApiService } from '../rest-api.service';
import { Router }  from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private srv:RestApiService, private routerVar:Router, private userSrv:UserService) { }

  ngOnInit(): void {
  }

   userObj:User = new User();
   loginErrMsg:string = '';

   validateLogin(){
       this.srv.checkUser(this.userObj).subscribe(data => {
            var user = data.info;
            alert("recieved response data "+user);
            if(user == null){
              this.userObj = new User();
              this.loginErrMsg = "Invalid Credentials";
            }else{
              this.userSrv.setLogin(true, user);             
              this.routerVar.navigate(['/base']);
            }
      });
   }




}
