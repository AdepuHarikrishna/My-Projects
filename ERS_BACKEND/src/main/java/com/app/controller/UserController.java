package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.Response;
import com.app.pojo.User;
import com.app.service.IUserSrv;

@RestController  // @Controller + @ResponseBody
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value="/user")
public class UserController {
	
	@Autowired
	private IUserSrv userSrv;
	public void setUserSrv(IUserSrv userSrv) {
		this.userSrv = userSrv;
	}
	
	@PostMapping(value="/new")
	public Response createNewUser(@RequestBody User user){
		
		String responseData = userSrv.createUser(user);
		Response resp = new Response(200, responseData);
		return resp;
	}
	
	@PutMapping(value="/update")
	public Response updateUser(@RequestBody User user){
		
		String responseData = userSrv.updateUser(user);
		Response resp = new Response(200, responseData);
		return resp;
	}
	
	@DeleteMapping(value="/delete/{userId}")
	public Response deleteUser(@PathVariable int userId) {
		
		String responseData = userSrv.deleteUser(userId);
		Response resp = new Response(200, responseData);
		return resp;
		
	}
	
	@PostMapping(value="/validate")
	public Response getUser(@RequestBody User user){
		
		User userObj = userSrv.getUser(user.getUserName(), user.getPwd());
		Response resp = new Response(200, userObj);
		return resp;
	}
	

}
