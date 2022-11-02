export class User {

   uId:number;
   userName:string;
   pwd:string;
   fName:string;
   lName:string;
   role:string;
   emailId:string;

   constructor(uId:number=0, userName:string="", pwd:string="",
   					fName:string="", lName:string="", role:string="", emailId:string=""	) {

   		 this.uId = uId;
   		 this.userName = userName;
   		 this.pwd = pwd;
   		 this.fName = fName;
   		 this.lName = lName;
   		 this.role = role;
   		 this.emailId = emailId;
   	}

 

}

