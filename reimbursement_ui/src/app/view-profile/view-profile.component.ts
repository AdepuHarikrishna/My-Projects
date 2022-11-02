import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor(private restSrv:RestApiService) { }

  ngOnInit(): void {

      this.restSrv.checkUser(this.userObj).subscribe(data => {
      		this.userObj = data.info;
      });

  }

  userObj:User = new User(0, "harsha", "java", "", "", "", "");
  

}
