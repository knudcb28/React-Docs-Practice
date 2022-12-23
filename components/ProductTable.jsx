import React from "react";
import ProductRow from "./ProductRow";
import ProductTableHeader from "./ProductTableHeader";

const ProductTable = ({ products }) => {
  let rows = [];
  let previousCategory = null;

  products.map((product) => {
    if (previousCategory !== product.category) {
        rows.push(<ProductTableHeader category={product.category} />)
    } rows.push(<ProductRow product = {product}/>)
    previousCategory = product.category
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
