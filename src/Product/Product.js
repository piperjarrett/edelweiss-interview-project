import logo from "../logo.svg";
import "./Product.css";

const Product = ({ product }) => {
  const jackcoverimage = product.images?.find((image) =>
    image.uri.includes("jacket_covers")
  );

  const author = product.author?.split(",").reverse().join(" ");
  console.log(author);
  return (
    <div
      className="product-div"
      key={product.sku}
      //   style={
      //     jackcoverimage
      //       ? {
      //           backgroundImage: `url("${jackcoverimage.uri}")`,
      //           backgroundPosition: "center",
      //           backgroundSize: "cover",
      //           backgroundRepeat: "no-repeat",
      //         }
      //       : {
      //           backgroundImage: `url("${logo}")`,
      //           backgroundPosition: "center",
      //           backgroundSize: "cover",
      //           backgroundRepeat: "no-repeat",
      //         }
      //   }
    >
      <div className="image-div">
        <img src={jackcoverimage ? jackcoverimage.uri : logo} />
      </div>
      <div className="product-info">
        <h4>Title: {product.fullName ? product.fullName : "Unkown"}</h4>
        <p>By: {product.author ? author : "Unkown"}</p>
      </div>
    </div>
  );
};

export default Product;
