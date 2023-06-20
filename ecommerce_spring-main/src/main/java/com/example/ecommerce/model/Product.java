package com.example.ecommerce.model;

import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "product")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
	
	@Id
	private String productId;
	private String name;
	@Column(length = 500)
	private String description;
	private double price;
	private String imageUrl;
	
//	@ManyToOne
//    @JoinColumn(name = "categoryid", nullable = false)
//    private ProductCategory category;
	
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	
//	public ProductCategory getCategory() {
//		return category;
//	}
//	public void setCategory(ProductCategory category) {
//		this.category = category;
//	}
	
//	public String getCategoryid() {
//		return categoryid;
//	}
//	public void setCategoryid(String categoryid) {
//		this.categoryid = categoryid;
//	}
	
	
	
}
