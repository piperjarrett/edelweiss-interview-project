import Product from "../Product/Product";
import catalog from "../data";
import { useState } from "react";
import "./ProductContainer.css";

const ProductContainer = () => {
  const [catalogInfo, setCatalogInfo] = useState(catalog);

  const products = catalogInfo.products.map((product) => {
    return <Product product={product} />;
  });
  return <section>{products}</section>;
};

export default ProductContainer;
