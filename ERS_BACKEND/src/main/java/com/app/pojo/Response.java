package com.app.pojo;

public class Response {
	
	private int statusCode;
	private Object info;
	
	public Response() {
		super();
	}
	public Response(int statusCode, Object info) {
		super();
		this.statusCode = statusCode;
		this.info = info;
	}
	public int getStatusCode() {
		return statusCode;
	}
	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}
	public Object getInfo() {
		return info;
	}
	public void setInfo(Object info) {
		this.info = info;
	}
	@Override
	public String toString() {
		return "Response [statusCode=" + statusCode + ", info=" + info + "]";
	}
	
}
