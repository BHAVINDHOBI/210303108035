import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const ProductPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) return <Typography variant="h6">Product not found</Typography>;

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={`https://via.placeholder.com/600?text=${product.productName}`}
          alt={product.productName}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {product.productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Company: {product.company}
            <br />
            Category: {product.category}
            <br />
            Price: ${product.price}
            <br />
            Rating: {product.rating}
            <br />
            Discount: {product.discount}%<br />
            Availability: {product.availability}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductPage;
