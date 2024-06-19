import React, { useEffect, useState } from "react";
import { Grid, Container, Typography } from "@mui/material";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const categories = [
    "Phone",
    "Computer",
    "TV",
    "Earphone",
    "Tablet",
    "Charger",
    "Mouse",
    "Keypad",
    "Bluetooth",
    "Pendrive",
    "Remote",
    "Speaker",
    "Headset",
    "Laptop",
    "PC",
  ];
  const companies = ["AMZ", "ELP", "SNP", "MYN", "AZO"];

  useEffect(() => {
    const fetchProducts = async () => {
      const { company, category, minPrice, maxPrice } = filters;
      const top = 10; // Example value, you can make this dynamic
      if (company && category) {
        const response = await getProducts(
          company,
          category,
          top,
          minPrice,
          maxPrice
        );
        setProducts(response.data);
      }
    };
    fetchProducts();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Top Products
      </Typography>
      <Filter
        categories={categories}
        companies={companies}
        onFilterChange={handleFilterChange}
      />
      <Grid container spacing={4}>
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProductCard
              product={{
                ...product,
                company: filters.company,
                category: filters.category,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllProducts;
