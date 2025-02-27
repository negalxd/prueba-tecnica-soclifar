import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { ProductContext } from "@/app/providers/productProvider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateProductDialog() {
  const [open, setOpen] = useState(false); // Estado para manejar el diálogo
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset, // Para limpiar el formulario
  } = useForm();
  const { createProduct } = useContext(ProductContext);

  const onSubmit = async (data) => {
    data.price = Number(data.price);
    await createProduct(data);
    reset(); // Limpia el formulario después del envío
    setOpen(false); // Cierra el diálogo
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Crear nuevo producto
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear nuevo producto</DialogTitle>
          <DialogDescription>
            Ingresa los campos solicitados para crear un nuevo producto.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nombre
              </Label>
              <Input
                id="name"
                {...register("name", { required: "Nombre es requerido" })}
                className="col-span-3"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Precio
              </Label>
              <Input
                id="price"
                type="number"
                {...register("price", { required: "Precio es requerido" })}
                className="col-span-3"
              />
              {errors.price && (
                <p className="text-red-500">{errors.price.message}</p>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Categoría
              </Label>
              <Select
                onValueChange={(value) => setValue("category", value)}
                defaultValue={watch("category")}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Selecciona una categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Medicina">Medicina</SelectItem>
                    <SelectItem value="Comida">Comida</SelectItem>
                    <SelectItem value="Electrónicos">Electrónicos</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="text-red-500">{errors.category.message}</p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button
              className="bg-green-600 hover:bg-green-800 cursor-pointer"
              type="submit"
            >
              Crear producto
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
