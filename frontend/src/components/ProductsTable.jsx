import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { ProductContext } from "../app/providers/productProvider";

function ProductsTable({ products }) {
  const { deleteProduct } = useContext(ProductContext);

  return (
    <Table className={"my-4"}>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[30%]">Nombre</TableHead>
          <TableHead className="w-[15%]">Precio</TableHead>
          <TableHead className="w-[15%]">Categoría</TableHead>
          <TableHead className="w-[15%]">Stock</TableHead>
          <TableHead className="text-center w-[15%]">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product._id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell className="text-right">
              <Button
                variant="destructive"
                onClick={() => deleteProduct(product._id)}
              >
                Eliminar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ProductsTable;
