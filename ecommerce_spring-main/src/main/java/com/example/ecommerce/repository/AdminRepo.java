package com.example.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ecommerce.model.Admin;

@Repository
public interface AdminRepo extends JpaRepository<Admin, String> {

	Admin findByAdminId(String adminId);
	
}
