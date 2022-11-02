package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojo.User;
import com.app.repository.IUserRepo;

@Service
public class UserSrvImpl implements IUserSrv {
	
	@Autowired
	private IUserRepo userRepo;
	public void setUserRepo(IUserRepo userRepo) {
		this.userRepo = userRepo;
	}

	public String createUser(User user) {

		int result = userRepo.createUser(user);
		if(result != 0) {
			return "User creation success";
		}else {
			return "User creation failure";
		}
		
	}

	public String updateUser(User user) {
		
		int result = userRepo.updateUser(user);
		if(result != 0) {
			return "User updation success";
		}else {
			return "User updation failure";
		}
	}

	public String deleteUser(int userId) {
		
		int result = userRepo.deleteUser(userId);
		if(result != 0) {
			return "User deletion success";
		}else {
			return "User deletion failure";
		}
	}

	public User getUser(String userName, String pwd) {
		User user = userRepo.getUser(userName, pwd);
		return user;
	}

}
