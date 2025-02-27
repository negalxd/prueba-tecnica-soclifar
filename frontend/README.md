# Proyecto de Prueba Técnica

Este es un proyecto [Next.js](https://nextjs.org) creado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Descripción

Este proyecto es una aplicación de gestión de productos que permite crear, listar y eliminar productos. Utiliza React para la interfaz de usuario y Context API para la gestión del estado global. Axios se utiliza para realizar solicitudes HTTP a una API REST.

## Estructura del Proyecto

- **`/components`**: Contiene los componentes reutilizables de la aplicación, como la tabla de productos y el diálogo para crear productos.
- **`/app/providers`**: Contiene el proveedor de contexto para los productos, que maneja el estado global y las operaciones CRUD.
- **`/app/page.js`**: Página principal que muestra la tabla de productos y la paginación.
- **`/app/layout.js`**: Layout principal que envuelve la aplicación con el proveedor de productos y el contenedor de notificaciones.

## Instalación

Primero, clona el repositorio:

```bash
git clone https://github.com/negalxd/prueba-tecnica-soclifar.git
cd prueba-tecnica-soclifar/frontend
```

Luego, instala las dependencias:

```bash
npm install
# o
yarn install
# o
pnpm install
```

## Ejecución en Desarrollo

Para ejecutar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador para ver el resultado.

## Despliegue

Para este proyecto el frontend fue desplegado en Vercel para facilitar su visualización, puedes acceder a la aplicación en el siguiente enlace: [https://prueba-tecnica-soclifar.vercel.app/](https://prueba-tecnica-soclifar.vercel.app/)

## Funcionamiento del Código

### Proveedor de Productos (`/app/providers/productProvider.js`)

Este archivo contiene el contexto de productos que maneja el estado global de la aplicación. Proporciona funciones para obtener, crear y eliminar productos, y utiliza `axios` para realizar solicitudes HTTP a la API.

### Tabla de Productos (`/components/productsTable.jsx`)

Este componente muestra una tabla con los productos. Utiliza el contexto de productos para obtener la lista de productos y la función para eliminar productos.

### Diálogo para Crear Producto (`/components/CreateProductDialog.jsx`)

Este componente muestra un formulario en un diálogo modal para crear un nuevo producto. Utiliza `react-hook-form` para manejar el formulario y el contexto de productos para crear el producto.

### Página Principal (`/app/page.js`)

Esta es la página principal de la aplicación. Muestra la tabla de productos y la paginación. Utiliza el contexto de productos para obtener la lista de productos y manejar la paginación.

### Layout Principal (`/app/layout.js`)

Este archivo define el layout principal de la aplicación. Envuelve la aplicación con el proveedor de productos y el contenedor de notificaciones de `react-toastify`.

## Consideraciones

- La aplicación utiliza una variable de entorno `NEXT_PUBLIC_API_URL` para la URL de la API. Por defecto, se establece en `http://localhost:4000/products` para el servidor de desarrollo.
- La aplicación utiliza `react-toastify` para mostrar notificaciones de éxito y error al realizar operaciones CRUD.
- La aplicación utiliza `react-hook-form` para manejar el formulario de creación de productos.
- La aplicación utiliza `axios` para realizar solicitudes HTTP a la API REST.
- La aplicación utiliza `shadCN` para estilizar los componentes.
