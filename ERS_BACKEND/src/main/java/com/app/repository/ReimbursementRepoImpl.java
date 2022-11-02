package com.app.repository;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.app.pojo.Reimbursement;
import com.app.util.DateConversion;

@Repository
public class ReimbursementRepoImpl implements IReimbursementRepo {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	public int insertReimbursement(Reimbursement rObj) {
		
		String query = "insert into reimbursement_info (userId, reason, amount, status, raisedOn) values (?, ?, ?, ?, ?)";
		
		int result = jdbcTemplate.update(query, new Object[] {rObj.getUserId(), rObj.getReason(), rObj.getAmount(), "PENDING", DateConversion.convertDateFromUtilToSql(new Date())});
		return result;
	}

	public List<Reimbursement> getAllReimbursements(int userId) {
		String query = "select r.reimbursementId, r.userId, r.reason, r.amount, r.status,\r\n" + 
				"r.raisedOn, u.userName from reimbursement_info r join user_tab u on r.userid = u.userid and r.userId = ?";
		List<Reimbursement> reimbursements = jdbcTemplate.query(query, new Object[] {userId}, new ReimbursementRowMapper());
		return reimbursements;
	}

	public List<Reimbursement> getAllReimbursements() {
		String query = "select reimbursementId, r.userId, reason, amount, status, raisedOn, userName from reimbursement_info r " + 
				" join user_tab u  on r.userId = u.userId";
		List<Reimbursement> reimbursements = jdbcTemplate.query(query, new ReimbursementRowMapper());
		return reimbursements;
	}

	public int updateReimbursement(Reimbursement rObj) {
		String query = "update reimbursement_info set status = ? where reimbursementId = ?";
		int result = jdbcTemplate.update(query, new Object[] {rObj.getStatus(), rObj.getReimbursementId()});
		return result;
	}

}
