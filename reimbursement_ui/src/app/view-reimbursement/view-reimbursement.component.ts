import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Reimbursement } from '../reimbursement';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-view-reimbursement',
  templateUrl: './view-reimbursement.component.html',
  styleUrls: ['./view-reimbursement.component.css']
})
export class ViewReimbursementComponent implements OnInit {

  constructor(private restSrv:RestApiService, private userSrv:UserService) { }

  ngOnInit(): void {
        this.loggedInUser = this.userSrv.getLoggedInUser();
        this.restSrv.getAllReimbursements(this.loggedInUser.uId).subscribe(data => {
               this.allReimbursements =  data.info;
               this.allReimbursementsBackUp = data.info;
        })
  }

  loggedInUser:User = new User(); 
  allReimbursements: Reimbursement[] = [];
  allReimbursementsBackUp:Reimbursement[] = [];

  statusSelected:string = "";

  filterTable(){
  		if(this.statusSelected == 'ALL'){
  		    this.allReimbursements = this.allReimbursementsBackUp;
  		}else{
  			this.allReimbursements = [];
	  		for(var i=0; i<this.allReimbursementsBackUp.length; i++){
	  		        if(this.allReimbursementsBackUp[i].status == this.statusSelected){
	  		             this.allReimbursements.push(this.allReimbursementsBackUp[i]);
	  		        }
	  		}
  		}
  }

}

//getAllReimbursements