package com.app.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.app.pojo.User;

@Repository
public class UserRepoImpl implements IUserRepo {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public int createUser(User user) {

		String query = "insert into user_tab(userName, pwd, firstName, lastName, role, emailId) values (?, ?, ?, ?, ?, ?)";
		int result =jdbcTemplate.update(query, new Object[] {user.getUserName(), user.getPwd(), user.getfName(), user.getlName(), user.getRole(), user.getEmailId()});
		
		return result;
	}

	public int updateUser(User user) {
		String query = "update user_tab set userName = ?, pwd = ?, firstName = ?, lastName = ?, emailId =? where userId = ?";
		int result = jdbcTemplate.update(query, new Object[] {user.getUserName(), user.getPwd(), user.getfName(), user.getlName(), user.getEmailId(), user.getuId()});
		return result;
	}

	public int deleteUser(int userId) {
		String query = "delete from user_tab where userId = ?";
		int result = jdbcTemplate.update(query, new Object[] {userId});
		return result;
	}

	public User getUser(String userName, String pwd) {
		String query = "select * from user_tab where userName = ? and pwd = ?";
		try {
			User user = jdbcTemplate.queryForObject(query, new Object[] {userName, pwd}, new UserRowMapper());
			return user;
		}catch(EmptyResultDataAccessException ex) {
			return null;
		}
	}

}
