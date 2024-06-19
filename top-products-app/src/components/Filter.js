import React from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const Filter = ({ categories, companies, onFilterChange }) => {
  const [filters, setFilters] = React.useState({
    category: "",
    company: "",
    minPrice: "",
    maxPrice: "",
    rating: "",
    availability: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onFilterChange(filters);
  };

  return (
    <Box>
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          value={filters.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Company</InputLabel>
        <Select name="company" value={filters.company} onChange={handleChange}>
          {companies.map((company) => (
            <MenuItem key={company} value={company}>
              {company}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Min Price"
        name="minPrice"
        value={filters.minPrice}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Max Price"
        name="maxPrice"
        value={filters.maxPrice}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Rating"
        name="rating"
        value={filters.rating}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Availability</InputLabel>
        <Select
          name="availability"
          value={filters.availability}
          onChange={handleChange}
        >
          <MenuItem value="yes">Yes</MenuItem>
          <MenuItem value="no">No</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filter;
