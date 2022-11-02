import { Component } from '@angular/core';
import { User  } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reimbursement_ui';

  isLoggedIn:boolean = false;
  loggedInUser:User = new User();

  updateLogin(obj:any){
      this.loggedInUser = obj;
      this.isLoggedIn = true;
  }

}
