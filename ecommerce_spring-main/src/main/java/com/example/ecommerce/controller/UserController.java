package com.example.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ecommerce.model.Admin;
import com.example.ecommerce.model.User;
import com.example.ecommerce.repository.AdminRepo;
import com.example.ecommerce.repository.UserRepo;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserRepo repo;
	
	@PostMapping("/userlogin")
	public ResponseEntity<?> loginUser(@RequestBody User userData){
		
		User user = repo.findByUserId(userData.getUserId());
		if(user.getPassword().equals(userData.getPassword()))
			return ResponseEntity.ok(user);
		 
		return (ResponseEntity<?>) ResponseEntity.badRequest();
		
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@RequestBody User signupData) {
		String userId = signupData.getUserId();
		boolean exist = repo.existsById(userId);
		if(exist)
			return (ResponseEntity<?>) ResponseEntity.badRequest();
		User user =repo.save(signupData);
		return ResponseEntity.ok(user);
		
	}
	
	@Autowired
	private AdminRepo admn;
	@PostMapping("/adminlogin")
	public ResponseEntity<?> loginAdmin(@RequestBody Admin adminData){
		
		Admin admin = admn.findByAdminId(adminData.getAdminId());
		if(admin.getPassword().equals(adminData.getPassword()))
			return ResponseEntity.ok(admin);
		 
		return (ResponseEntity<?>) ResponseEntity.badRequest();
		
	}
}
