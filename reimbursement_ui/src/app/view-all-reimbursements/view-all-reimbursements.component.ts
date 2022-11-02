import { Component, OnInit } from '@angular/core';
import { Reimbursement } from '../reimbursement';
import { RestApiService } from '../rest-api.service'; 

@Component({
  selector: 'app-view-all-reimbursements',
  templateUrl: './view-all-reimbursements.component.html',
  styleUrls: ['./view-all-reimbursements.component.css']
})
export class ViewAllReimbursementsComponent implements OnInit {

  constructor(private srv : RestApiService) { }

  ngOnInit(): void {
    this.srv.getAllReimbursementsForMgr().subscribe(data => {
      this.allReimbursements =  data.info;
      for(var r of this.allReimbursements){
            this.allUserNames.push(r.userName);
      }
      this.allReimbursementsBackUp = data.info;
     // this.allUserNames = [...new Set(this.allUserNames)];
    });
  
  }

  allReimbursements:Reimbursement[] = [];
  allReimbursementsBackUp:Reimbursement[] = [];
  allUserNames:string[] = [];
  selectedUserName:string = '';

  statusSelected:string = '';

  filterTable(){
    if(this.statusSelected == 'ALL' && this.selectedUserName ==''){
      this.allReimbursements = this.allReimbursementsBackUp;             
      return;
    }
    if(this.selectedUserName != ''){
      this.allReimbursements = [];
      for(var r of this.allReimbursementsBackUp) {
        if(r.userName == this.selectedUserName) {
             this.allReimbursements.push(r);
        }
      }
    }else{
        this.allReimbursements = this.allReimbursementsBackUp;
    }
    
      for(var i=0; i<this.allReimbursements.length; i++){
              if(this.allReimbursements[i].status == this.statusSelected){
                   this.allReimbursements.push(this.allReimbursements[i]);
              }
      }
    
}

}
