// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  const productImage = `http://localhost:8001${product.image}`;

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    maxWidth: '450px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '10px',
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={productImage} alt={product.name} style={imageStyle} />
      <div className="card-body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p><strong>Size:</strong> {product.size}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Discount:</strong> {product.Discount}%</p>
        <p><strong>About Art:</strong> {product.Aboutart}</p>
        <p><strong>Painting Description:</strong> {product.Paintingdescription}</p>
        <p><strong>Terms and Conditions:</strong> {product.Termsandcondition}</p>
      </div>
    </div>
  );
};

export default ProductCard;
