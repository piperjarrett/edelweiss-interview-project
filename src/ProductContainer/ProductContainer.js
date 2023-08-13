import Product from "../Product/Product";
import catalog from "../data";
import { useState } from "react";
import "./ProductContainer.css";

const ProductContainer = () => {
  const [catalogInfo, setCatalogInfo] = useState(catalog);
  let removeDuplicates;
  for (let i in catalogInfo.products) {
    removeDuplicates = catalogInfo.products.filter((product, index) => {
      if (
        index !== i &&
        JSON.stringify(product) !== JSON.stringify(catalogInfo.products[i])
      ) {
        return product;
      }
    });
  }
  const products = removeDuplicates.map((product) => {
    return <Product product={product} />;
  });
  return <section>{products}</section>;
};

export default ProductContainer;
