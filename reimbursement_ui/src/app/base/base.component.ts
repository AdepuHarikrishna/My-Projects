import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private routerVar:Router, private userSrv:UserService) { }

  ngOnInit(): void {
     this.loggedInUser = this.userSrv.getLoggedInUser();
     this.loggedInUserRole = this.loggedInUser.role;
  }

   loggedInUser:User = new User();
   loggedInUserRole:string="";

  logout() {
     this.userSrv.setLogin(false, new User());
     this.routerVar.navigate(['/login']);
  }

}
