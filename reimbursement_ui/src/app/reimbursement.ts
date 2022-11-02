export class Reimbursement {

	reimbursementId:number;
	userId:number;
	reason:string;
	amount:number;
	status:string;
	raisedOn:Date;
	userName:string;

	constructor(reimbursementId:number=0, userId:number=0, reason:string='', amount:number=0, status:string='', raisedOn:Date=new Date(), userName:string='') {
	   this.reimbursementId = reimbursementId;
	   this.userId = userId;
	   this.reason = reason;
	   this.amount = amount;
	   this.status = status;
	   this.raisedOn = raisedOn;
	   this.userName = userName;
	}

}
