export const validateProduct = (product) => {
  const { name, price, category, stock } = product;

  if (!name || !price || !category) {
    return { valid: false, message: "Name, price, and category are required" };
  }

  if (typeof price !== "number" || price <= 0) {
    return { valid: false, message: "Price must be a positive number" };
  }

  if (category && !["Medicina", "Comida", "Electrónicos"].includes(category)) {
    return {
      valid: false,
      message: "Category must be one of: Medicina, Comida, Electrónicos",
    };
  }

  if (stock && (typeof stock !== "number" || stock < 0)) {
    return { valid: false, message: "Stock must be a non-negative number" };
  }

  return { valid: true };
};

export const validateProductUpdate = (product) => {
  const { name, price, category, stock } = product;

  if (name && typeof name !== "string") {
    return { valid: false, message: "Name must be a string" };
  }

  if (price && (typeof price !== "number" || price <= 0)) {
    return { valid: false, message: "Price must be a positive number" };
  }

  if (category && !["Medicina", "Comida", "Electrónicos"].includes(category)) {
    return {
      valid: false,
      message: "Category must be one of: Medicina, Comida, Electrónicos",
    };
  }

  if (stock && (typeof stock !== "number" || stock < 0)) {
    return { valid: false, message: "Stock must be a non-negative number" };
  }

  return { valid: true };
};
