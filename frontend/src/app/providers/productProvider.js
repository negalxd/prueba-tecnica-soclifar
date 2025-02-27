"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductContext = React.createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products?page=${page}&limit=${limit}`
        );
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page, limit]);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
      toast.success("Producto eliminado exitosamente");
    } catch (err) {
      setError(err);
      toast.error("Error al eliminar el producto");
    }
  };

  const createProduct = async (product) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`, product);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/products?page=${page}&limit=${limit}`
      );
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
      toast.success("Producto creado exitosamente");
    } catch (err) {
      setError(err);
      toast.error("Error al crear el producto");
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        page,
        setPage,
        limit,
        setLimit,
        totalPages,
        deleteProduct,
        createProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
