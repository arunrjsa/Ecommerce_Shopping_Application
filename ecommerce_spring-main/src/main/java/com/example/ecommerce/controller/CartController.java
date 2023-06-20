package com.example.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ecommerce.model.Cart;
import com.example.ecommerce.repository.CartRepo;
import com.example.ecommerce.service.EmailService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class CartController {
	
	@Autowired
	private CartRepo cart;
	@Autowired
	private EmailService emailService;
	
	@PostMapping("/cart")
	public ResponseEntity<?> addToCart (@RequestBody Cart cartData) {
		
		Cart temp = cart.searchProductByUserId(cartData.getProductId(), cartData.getUserId());
		if(temp != null)
			return (ResponseEntity<?>) ResponseEntity.badRequest();
	
		return (ResponseEntity<?>) ResponseEntity.ok(cart.save(cartData));
		
	}
	
	@GetMapping("/getCartItem/{userId}")
	public List<Cart> getCartByUser(@PathVariable("userId") String userId) {
		return cart.getCartByUserId(userId);
	}

	@Transactional
	@DeleteMapping("/deleteItem/{userId}/{productId}")  
    public ResponseEntity<?> deleteCartItem(@PathVariable("productId") String productId, @PathVariable("userId") String userId) {   
		cart.deleteByProductId(userId, productId);
        return ResponseEntity.ok("success");
    }
	
	@Transactional
	@DeleteMapping("/emptyCart/{userId}")
	public void emptyCart(@PathVariable("userId") String userId) {
		cart.deleteAllByUserId(userId);
	}
	
	@Transactional
	@PostMapping("/updateQuantity/{userId}/{quantity}")
	public void updateQuantity(@RequestBody Cart cartDetails, @PathVariable("quantity") String quantity, @PathVariable("userId") String userId) {
		
		Cart temp = cart.searchProductByUserId(cartDetails.getProductId(), cartDetails.getUserId());
		temp.setQuantity(quantity);
		String subTotal = (String.valueOf(Integer.parseInt(quantity)*(int)cartDetails.getPrice()));
		cart.updateQuantityByUserId(quantity, subTotal, userId, cartDetails.getProductId());
		
	}
	
	@PostMapping("/buy/{userId}")
	public void sendEmail(@RequestBody Cart cart, @PathVariable("userId") String userId) {
		String email = userId;
        String emailBody = "Thank You for shopping with us";
        String subject = "Order Details";
        emailService.sendSimpleEmail(email, emailBody, subject);
	}
	
	
}
