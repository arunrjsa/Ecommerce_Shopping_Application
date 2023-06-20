package com.example.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.ecommerce.model.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, String>{
	
	Product findByProductId(String productId);
	Product findByName(String name);

}
