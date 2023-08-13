import { useState } from "react";
import fillerImage from "../fillerImage.jpg";
import "./Product.css";

const Product = ({ product }) => {
  const [error, setError] = useState(false);
  const jackcoverimage = product.images?.find((image) =>
    image.uri.includes("jacket_covers")
  );

  const author = product.author?.split(",").reverse().join(" ");
  
  const catchError = () => {
    setError(true);
  };

  return (
    <div className="product-div" key={product.title}>
      <div className="image-div">
        <img
          alt="cover"
          onError={catchError}
          src={jackcoverimage && !error ? jackcoverimage.uri : fillerImage}
        />
      </div>

      <div className="product-info">
        <h3>{product.name ? product.name : "Unkown"}</h3>
        <h4>By: {product.author ? author : "Unkown"}</h4>
        <p>{product.category ? product.category : "Unkown Category"}</p>
      </div>
    </div>
  );
};

export default Product;
