import Product from "../Product/Product";
import catalog from "../data";
import { useState } from "react";
import "./ProductContainer.css";

const ProductContainer = () => {
  const [catalogInfo, setCatalogInfo] = useState(catalog); // this is a placeholder for a proper fetch
  let removeDuplicates;
  for (let i in catalogInfo.products) {
    // could probably optimize so we dont' have O(n^2)
    removeDuplicates = catalogInfo.products.filter((product, index) => {
      if (
        index !== i &&
        // check to make sure the original object wouldn't be compared
        product.sku !== catalogInfo.products[i].sku
        // assuming each sku is different
      ) {
        return product;
      }
    });
  }
  const products = removeDuplicates.map((product) => {
    return (
      <div key={product.name + product.author + product.sku}>
        <Product product={product} />
      </div>
    );
  });
  return <section>{products}</section>;
};

export default ProductContainer;
