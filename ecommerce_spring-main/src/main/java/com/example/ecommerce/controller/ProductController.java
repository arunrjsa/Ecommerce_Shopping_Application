package com.example.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ecommerce.model.Cart;
import com.example.ecommerce.model.Product;
import com.example.ecommerce.repository.ProductRepo;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	
	@Autowired
	private ProductRepo product;
	
	@PostMapping("/addProduct")
	public ResponseEntity<?> addProduct (@RequestBody Product productData) {
		String userId = productData.getProductId();
		boolean exist = product.existsById(userId);
		if(exist)
			return (ResponseEntity<?>) ResponseEntity.badRequest();
		
		Product pro = product.save(productData);
		return ResponseEntity.ok(pro);
		
	}
	
	@GetMapping("/getAllProducts")
	public List<Product> getAll() {
		return product.findAll();
	}
	
	@DeleteMapping("/deleteProduct/{productId}")
	public ResponseEntity<String> deleteProduct(@PathVariable("productId") String productId) {
	
		product.deleteById(productId);
		return ResponseEntity.ok("success");
	}
	
	@GetMapping("search/{name}")
	public Product serchProduct(@PathVariable("name") String name) {
		return product.findByName(name);
	}
	
	
	@PostMapping("/updateProduct")
	public Product updateQuantity(@RequestBody Cart productDetails) {
		
		String id = productDetails.getProductId();
	    Product std = product.findByProductId(id);
		
		std.setProductId(productDetails.getProductId());
		std.setName(productDetails.getName());
		std.setDescription(productDetails.getDescription());
		std.setPrice(productDetails.getPrice());
		std.setImageUrl(productDetails.getImageUrl());
		return product.save(std);
		
	}
	
}
