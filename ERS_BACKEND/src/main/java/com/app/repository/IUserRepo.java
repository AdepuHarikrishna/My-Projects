package com.app.repository;

import com.app.pojo.User;

public interface IUserRepo {
	
	int createUser(User user);
	
	int updateUser(User user);
	
	int deleteUser(int userId);
	
	User getUser(String userName, String pwd);

}
