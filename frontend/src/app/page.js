"use client";
import React, { useContext } from "react";
import { ProductContext } from "./providers/productProvider";
import ProductsTable from "@/components/ProductsTable";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { CreateProductDialog } from "@/components/CreateProductDialog";

export default function Home() {
  const { products, loading, error, page, setPage, totalPages } =
    useContext(ProductContext);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Error al cargar el listado de productos: {error.message} , asegurate de
        que el backend de la aplicación esté ejecutandose
      </p>
    );

  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col justify-center items-center w-full max-w-5xl gap-8">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Tabla de productos
        </h1>
        <div className="flex justify-end w-[70%] mx-auto">
          <CreateProductDialog />
        </div>
        <div className="w-[70%] mx-auto">
          <ProductsTable products={products} />
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => setPage(index + 1)}
                    className={page === index + 1 ? "bg-gray-200 shadow" : ""}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    setPage((prev) => Math.min(prev + 1, totalPages))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>
    </div>
  );
}
