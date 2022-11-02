package com.app.repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.app.pojo.User;

public class UserRowMapper implements RowMapper<User> {

	public User mapRow(ResultSet rs, int arg1) throws SQLException {

		User user = new User();
		user.setuId(rs.getInt(1));
		user.setUserName(rs.getString(2));
		user.setPwd(rs.getString(3));
		user.setfName(rs.getString(4));
		user.setlName(rs.getString(5));
		user.setRole(rs.getString(6));
		user.setEmailId(rs.getString(7));
		
		return user;
	}

}
