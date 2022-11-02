package com.app.pojo;

import java.util.Date;

public class Reimbursement {
	
	private int reimbursementId;
	private int userId;
	private String reason;
	private int amount;
	private String status;
	private Date raisedOn;
	private String userName;
	
	public Reimbursement() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Reimbursement(int reimbursementId, int userId, String reason, int amount, String status, Date raisedOn, String userName) {
		super();
		this.reimbursementId = reimbursementId;
		this.userId = userId;
		this.reason = reason;
		this.amount = amount;
		this.status = status;
		this.raisedOn = raisedOn;
		this.userName = userName;
	}
	public int getReimbursementId() {
		return reimbursementId;
	}
	public void setReimbursementId(int reimbursementId) {
		this.reimbursementId = reimbursementId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getRaisedOn() {
		return raisedOn;
	}
	public void setRaisedOn(Date raisedOn) {
		this.raisedOn = raisedOn;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	@Override
	public String toString() {
		return "Reimbursement [reimbursementId=" + reimbursementId + ", userId=" + userId + ", reason=" + reason
				+ ", amount=" + amount + ", status=" + status + ", raisedOn=" + raisedOn + ", userName=" + userName
				+ "]";
	}
	
}
