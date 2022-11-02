import { Injectable } from '@angular/core';
import { User } from './user';
import { Reimbursement } from './reimbursement';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private httpVar:HttpClient) { }

  getHeadersInfo():any{
    return {
	         headers: new HttpHeaders({
	         'Content-Type':  'application/json',
	         'Accept':'*/*' 
	       })
	    };
  }

  checkUser(userObj:User):Observable<any>{
      var validateLoginRestApi = "http://localhost:8080/user/validate";
      return this.httpVar.post(validateLoginRestApi, userObj, this.getHeadersInfo());
  }

  applyReimbursement(rObj:Reimbursement):Observable<any> {
      var restApi = "http://localhost:8080/reimbursement/apply";
      return this.httpVar.post(restApi, rObj, this.getHeadersInfo());
  }

  getAllReimbursements(rId:number):Observable<any> {
      var restApi = "http://localhost:8080/reimbursement/all/"+rId;
      return this.httpVar.get(restApi);
  }

  resolveReimbursements(rObj:Reimbursement):Observable<any> {
      var restApi = "http://localhost:8080/reimbursement/resolve";
      return this.httpVar.put(restApi, rObj, this.getHeadersInfo());
  }

  getAllReimbursementsForMgr():Observable<any> {
    var restApi = "http://localhost:8080/reimbursement/all/";
    return this.httpVar.get(restApi);
}

}
