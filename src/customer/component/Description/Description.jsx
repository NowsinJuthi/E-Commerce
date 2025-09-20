import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProduct } from '../Product/AllProduct';

const Description = () => {
  const { title } = useParams(); // ✅ must match your route
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (title) {
      const foundProduct = allProduct.find(
        item => item.title.toLowerCase() === title.toLowerCase()
      );
      setProduct(foundProduct || null);
      console.log("Route title:", title, "Matched:", foundProduct); // debug
    }
  }, [title]);

  if (!product) {
    return (
      <div className="main">
        <p className="text-gray-400">No description available</p>
      </div>
    );
  }

  return (
    <div className="main">
      <p>Description: {product.description}</p>
    </div>
  );
};

export default Description;
