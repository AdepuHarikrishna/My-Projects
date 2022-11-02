package com.app.pojo;

public class User {
	
	private int uId;
	private String userName;
	private String pwd;
	private String fName;
	private String lName;
	private String role;
	private String emailId;
	
	public User() {
		super();
	}
	public User(int uId, String userName, String pwd, String fName, String lName, String role, String emailId) {
		super();
		this.uId = uId;
		this.userName = userName;
		this.pwd = pwd;
		this.fName = fName;
		this.lName = lName;
		this.role = role;
		this.emailId = emailId;
	}
	public int getuId() {
		return uId;
	}
	public void setuId(int uId) {
		this.uId = uId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	@Override
	public String toString() {
		return "User [uId=" + uId + ", userName=" + userName + ", pwd=" + pwd + ", fName=" + fName + ", lName=" + lName
				+ ", role=" + role + ", emailId=" + emailId + "]";
	}
	
}
