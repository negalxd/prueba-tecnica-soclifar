# Prueba Técnica Soclifar

## Descripción

Este proyecto consiste en un backend desarrollado con Express y Node.js, utilizando MongoDB como base de datos, y un frontend desarrollado con Next.js y Axios para la comunicación con el backend.

## Backend

El backend está construido con las siguientes tecnologías:

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir aplicaciones web y APIs.
- **MongoDB**: Base de datos NoSQL para almacenar los datos de los productos.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB y Node.js.
- **dotenv**: Módulo para cargar variables de entorno desde un archivo `.env`.
- **cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).

### Instalación del Backend

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del backend:
   ```bash
   cd backend
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Configura las variables de entorno en un archivo `.env` en la carpeta backend:
   ```env
   MONGO_URI=mongodb://localhost/backend-productos
   ```
   Asegúrate de reemplazar `mongodb://localhost/backend-productos` con la URI de tu instancia de MongoDB si es diferente.
5. Inicia el servidor:
   ```bash
   npm start
   ```

## Frontend

El frontend está construido con las siguientes tecnologías:

- **Next.js**: Framework de React para aplicaciones web.
- **Axios**: Cliente HTTP para realizar solicitudes al backend.
- **React-hook-form**: Librería para manejar formularios en React.
- **ShadCN**: Librería de componentes de React para un diseño rápido y fácil.

### Instalación del Frontend

1. Navega al directorio del frontend:
   ```bash
   cd frontend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura las variables de entorno en un archivo `.env` en la carpeta frontend:
   ```env
   NEXT_PUBLIC_API_URL="http://localhost:4000"
   ```
4. Inicia la aplicación:
   ```bash
   npm run dev
   ```

## Utilización

### Backend

El backend expone varias rutas para interactuar con la base de datos MongoDB. Por ejemplo:

- `GET /products`: Obtiene una lista de productos.
- `POST /products`: Crea un nuevo ítem.

### Frontend

El frontend utiliza Axios para realizar solicitudes HTTP al backend. Puedes ver la lista de productos y crear nuevos productos desde la interfaz de usuario, así como eliminarlos.
