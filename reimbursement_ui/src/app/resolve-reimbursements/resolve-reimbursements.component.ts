import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Reimbursement } from '../reimbursement';

@Component({
  selector: 'app-resolve-reimbursements',
  templateUrl: './resolve-reimbursements.component.html',
  styleUrls: ['./resolve-reimbursements.component.css']
})
export class ResolveReimbursementsComponent implements OnInit {

  constructor(private srv:RestApiService) { }

  ngOnInit(): void {
    this.srv.getAllReimbursementsForMgr().subscribe(data => {
      this.allReimbursements =  data.info;
    //  this.allReimbursementsBackUp = data.info;
    });
  }

  resolveOptions:string[] = ["PENDING", "ACCEPT", "DENY"];

  resolveStatus:string = "";
  rId:number = 0;

  allReimbursements:Reimbursement[] = [];
  selectedReimbursement:Reimbursement = new Reimbursement();

  msg:string = "";

  resolveReimbursement(){  
    this.srv.resolveReimbursements(this.selectedReimbursement).subscribe(data => {
      this.msg =  data.info;
      this.selectedReimbursement = new Reimbursement();
    });
  }

}
