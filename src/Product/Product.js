import fillerImage from "../fillerImage.jpg";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  const jackcoverimage = product.images?.find((image) =>
    image.uri.includes("jacket_covers")
  );

  const author = product.author?.split(",").reverse().join(" ");

  const categories = product.category?.split("/").map((cat) => {
    return <p>{cat}</p>;
  });

  return (
    <div className="product-div" key={product.sku}>
      <div className="media">
        <div className="layer">
          <p>{product.category ? product.category : "Unkown Category"}</p>
        </div>
        <div className="image-div">
          <img
            alt="cover"
            src={jackcoverimage ? jackcoverimage.uri : fillerImage}
          />
        </div>
      </div>
      <div className="product-info">
        <h4>{product.name ? product.name : "Unkown"}</h4>
        <p>By: {product.author ? author : "Unkown"}</p>
      </div>
    </div>
  );
};

export default Product;
