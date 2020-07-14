import React from "react";

import "./Products.css";
import { products } from "../../service/products";
import { ProductsItemType } from "../../types/products-item.types";
import ProductsItem from "../../components/ProductsItem/ProductsItem";

export default function Products() {
  return (
    <div className="products">
      <h1>Products</h1>
      <div className="products-list">
        {products.map((product: ProductsItemType) => (
          <ProductsItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
