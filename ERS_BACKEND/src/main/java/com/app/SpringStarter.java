package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringStarter {

	public static void main(String[] args) {

		SpringApplication.run(SpringStarter.class, args);
		
	}

}

// controller  -- handle web services
// service     -- handle business logic 
// repository  -- handle jdbc logic 
// pojo        -- handle properties of an entity ex : User, Reimbursement