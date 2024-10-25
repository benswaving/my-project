import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div className="price">€{product.price}</div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
