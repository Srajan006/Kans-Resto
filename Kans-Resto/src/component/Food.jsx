import React, { useState } from "react";
import "./food.css";


const products = [
  {
    id: 1,
    name: "Tomato with Tofu Salad",
    discount: 15,
    originalPrice: 115000,
    discountedPrice: 97750,
    available: 12,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qc-Vuzeb4V1iCTz1KZ1VBnUlDeiVZ0rKWw&s",
  },
  {
    id: 2,
    name: "Japanese Chicken Gyoza",
    discount: 15,
    originalPrice: 95000,
    discountedPrice: 81700,
    available: 8,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlJp3_sCAMvs3CgmVMN7jislB125ayxI3kIg&s",
  },
  {
    id: 3,
    name: "2pcs of Amazing Avocado",
    discount: 15,
    originalPrice: 80000,
    discountedPrice: 68000,
    available: 10,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMv0YCyc-z7BLzU-Pgr-et50Sn5jmqUJKjiw&s",
  },
  {
    id: 4,
    name: "Lettuce with Stuff",
    discount: 15,
    originalPrice: 200000,
    discountedPrice: 170000,
    available: 5,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8VQPfxEk2E-wTbuWbYbcO5OJLkXNb9YAow&s",
  },
];

const ProductCard = ({ product, showQuantityControls }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < product.available) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="card">
       <img src={product.image} alt={product.name} className="item-image" />
      <div className="content">
        <p className="available">Available: {product.available}</p>
        <h3 className="name">{product.name}</h3>
        <div className="discount-container">
        <p className="discount">{product.discount}%</p>
        <p className="original-price">Rp {product.originalPrice.toLocaleString()}</p>
        </div>
        <p className="discounted-price">Rp {product.discountedPrice.toLocaleString()}</p>
        {showQuantityControls && (
          <div className="quantity-controls">
            <button className="quantity-btn" onClick={handleDecrease}>
              -
            </button>
            <input
              type="text"
              className="quantity-display"
              value={quantity}
              readOnly
            />
            <button className="quantity-btn" onClick={handleIncrease}>
              +
            </button>
          </div>
        )}
        <button className="order-button">Order</button>
      </div>
    </div>
  );
};

const Food = () => {
  try {
    return (
      <div className="container">
        <h1 className="title">Kans Resto</h1>
        <h2 className="subtitle">Special Discount Today</h2>
        <div className="grid">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              showQuantityControls={index >= 1} // Only show for the last 3 items
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>Error loading component</div>;
  }
};

export default Food;
