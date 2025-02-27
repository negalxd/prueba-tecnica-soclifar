# Backend Prueba Técnica

Este proyecto es una API RESTful para la gestión de productos, que incluye funcionalidades para crear, leer, actualizar y eliminar productos. La API está construida utilizando Node.js, Express y MongoDB.

## Requerimientos

- Node.js (versión 14 o superior)
- MongoDB (local o en la nube)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/prueba-tecnica-soclifar.git
   cd prueba-tecnica-soclifar/backend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las variables de entorno:

   Crea un archivo `.env` en la raíz del directorio `backend` y añade la siguiente configuración:

   ```env
   MONGO_URI=mongodb://localhost/backend-productos
   ```

   Asegúrate de reemplazar `mongodb://localhost/backend-productos` con la URI de tu instancia de MongoDB si es diferente.

## Ejecución

1. Conecta a la base de datos y ejecuta el servidor:

   ```bash
   npm start
   ```

   El servidor se ejecutará en el puerto `4000` por defecto.

1. Tambien puedes ejecutarlo en modo desarrollo con el siguiente comando:

   ```bash
   npm run dev
   ```

   El servidor se ejecutará en el puerto `4000` por defecto y estará al pendiente de cambios en el código.

## Endpoints

- `GET /products`: Obtiene una lista de productos con paginación.
- `POST /products`: Crea un nuevo producto.
- `PUT /products/:id`: Actualiza un producto existente.
- `DELETE /products/:id`: Elimina un producto existente.

## Validaciones

Las validaciones de los datos de los productos se realizan en el archivo `validators/product.validator.js`. Estas validaciones aseguran que los campos `name`, `price`, `category` y `stock` cumplan con los requisitos especificados.

## Estructura del Proyecto

- `src/models`: Contiene el modelo de datos de los productos.
- `src/controllers`: Contiene los controladores que manejan la lógica de CRUD de los productos.
- `src/routes`: Contiene las rutas de la API.
- `src/validators`: Contiene las validaciones de los datos de los productos.
- `src/db.js`: Configuración de la conexión a la base de datos.
- `src/app.js`: Configuración de la aplicación Express.
- `src/index.js`: Punto de entrada de la aplicación.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir aplicaciones web y APIs.
- **MongoDB**: Base de datos NoSQL para almacenar los datos de los productos.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB y Node.js.
- **dotenv**: Módulo para cargar variables de entorno desde un archivo `.env`.
- **cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).

## Consideraciones

- La API no incluye autenticación ni autorización.
- La API no incluye pruebas unitarias ni de integración.
- Para un correcto funcionamiento, asegúrate de tener una instancia de MongoDB en ejecución.
- Es necesario tener instalado Node.js y npm para ejecutar la aplicación.
- Es necesario mantener en ejecución el servidor para poder realizar peticiones a la API.
- Se decidió enumerar las categorías de los productos a "Medicina", "Comida" y "Electrónicos" para mantener mayor orden y control en la aplicación.
