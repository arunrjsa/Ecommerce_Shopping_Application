package com.example.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.ecommerce.model.Cart;

@Repository
public interface CartRepo extends JpaRepository<Cart, Long> {
	
	Cart findByProductId(String productId);

	@Query("SELECT a FROM Cart a where a.userId =?1")
    List<Cart> getCartByUserId(String userId);
	
	@Query("SELECT a FROM Cart a where a.productId = ?1 AND a.userId = ?2")
	Cart searchProductByUserId(String productId, String userId);
	
	@Modifying
	@Query("DELETE FROM Cart c WHERE c.userId = ?1 AND c.productId = ?2")
	void deleteByProductId(String userId, String productId);
	
	@Modifying
	@Query("UPDATE Cart c set c.quantity = ?1, subTotal = ?2 where c.userId = ?3 AND c.productId = ?4")
	void updateQuantityByUserId(String quantity, String subTotal, String userId, String productId);
	
	@Modifying
	@Query("DELETE FROM Cart c WHERE c.userId = ?1")
	void deleteAllByUserId(String userId);
	
}
