import { useState } from "react";
import fillerImage from "../fillerImage.jpg";
import "./Product.css";

const Product = ({ product }) => {
  const [imageLoadedError, setImageLoadedError] = useState(false); // rename to be imageLoadedError
  const jackCoverImage = product.images?.find((image) =>
    image.uri.includes("jacket_covers")
  );

  const author = product.author?.split(",").reverse().join(" ");

  const catchError = () => {
    setImageLoadedError(true);
  };

  return (
    <div className="product-div">
      <div className="image-div">
        <img
          alt="cover"
          onError={catchError}
          src={jackCoverImage && !imageLoadedError ? jackCoverImage.uri : fillerImage}
        />
      </div>
      <div className="product-info">
        <h3>{product.name ? product.name : "Unknown"}</h3>
        <h4>By: {product.author ? author : "Unknown"}</h4>
        <p>{product.category ? product.category : "Unknown Category"}</p>
      </div>
    </div>
  );
};

export default Product;
