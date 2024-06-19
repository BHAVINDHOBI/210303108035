// src/components/Pagination.js
import React from "react";
import Pagination from "@mui/material/Pagination";

const PaginationComponent = ({ page, setPage }) => {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return <Pagination count={10} page={page} onChange={handleChange} />;
};

export default PaginationComponent;
