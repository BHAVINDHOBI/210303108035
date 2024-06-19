import React from "react";
import Typography from "@mui/material/Typography";

const ProductDetails = ({ product }) => {
  return (
    <div>
      <Typography variant="h5">{product.name}</Typography>
      <Typography variant="body1">Company: {product.company}</Typography>
      {/* Display other product details */}
    </div>
  );
};

export default ProductDetails;
