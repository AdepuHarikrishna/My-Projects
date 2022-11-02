package com.app.repository;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.app.pojo.Reimbursement;
import com.app.util.DateConversion;

public class ReimbursementRowMapper implements RowMapper<Reimbursement> {

	public Reimbursement mapRow(ResultSet rs, int rowNum) throws SQLException {

		Reimbursement rObj = new Reimbursement();
		
		rObj.setReimbursementId(rs.getInt("reimbursementId"));
		rObj.setUserId(rs.getInt("userId"));
		rObj.setReason(rs.getString("reason"));
		rObj.setAmount(rs.getInt("amount"));
		rObj.setStatus(rs.getString("status"));
		if(rs.getDate("raisedOn")!=null) {
			rObj.setRaisedOn(DateConversion.convertDateFromSqlToUtil(rs.getDate(6)));
		}
	//	if(rs.getString("userName") != null) {
			rObj.setUserName(rs.getString("userName"));
		//}
		
		
		return rObj;
	}

}
