import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Product detail page</h1>
      <p>{id}</p>
      <Link to=".." relative="path">Back</Link>
    </>
  );
};

export default ProductDetailPage;
