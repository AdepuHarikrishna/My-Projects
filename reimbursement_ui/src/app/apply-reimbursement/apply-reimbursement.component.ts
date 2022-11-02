import { Component, OnInit } from '@angular/core';
import { Reimbursement } from '../reimbursement';
import { RestApiService } from '../rest-api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-apply-reimbursement',
  templateUrl: './apply-reimbursement.component.html',
  styleUrls: ['./apply-reimbursement.component.css']
})
export class ApplyReimbursementComponent implements OnInit {

  constructor(private restSrv:RestApiService, private userSrv:UserService) { }

  ngOnInit(): void {
  }

  reimObj:Reimbursement = new Reimbursement();
  acknowledgeMsg:string = '';

  applyReim(){
  	 this.reimObj.userId = this.userSrv.getLoggedInUser().uId;
  	  this.restSrv.applyReimbursement(this.reimObj).subscribe(data=>{
  	        this.acknowledgeMsg = data.info;
  	        this.reimObj.reason = "";
  	        this.reimObj.amount = 0;
  	  })

  }

}
