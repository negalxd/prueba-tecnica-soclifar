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

#### Rutas de la API

##### Productos

###### Obtener lista de productos

- **Método**: GET
- **Ruta**: `/products`
- **Descripción**: Retorna una lista de productos almacenados en la base de datos.
- **Parámetros de consulta opcionales**:
  - `limit` (número): Define cuántos productos se devuelven por página.
  - `page` (número): Define el número de página a consultar.

**Ejemplo de uso**:

```http
GET /products?limit=10&page=2
```

**Respuesta esperada (200 OK)**:

```json
{
  "products": [
    {
      "_id": "65a2f1b2d7e9c",
      "name": "Ibuprofeno",
      "price": 1200,
      "stock": 5
    }
    ...
  ],
  "total": 100,
  "limit": 10,
  "page": 2
}
```

###### Crear un nuevo producto

- **Método**: POST
- **Ruta**: `/products`
- **Descripción**: Crea un nuevo producto en la base de datos.
- **Cuerpo de la solicitud (JSON)**:
  ```json
  {
    "name": "Paracetamol",
    "price": 1290,
    "category": "Medicina"
  }
  ```

**Respuesta esperada (201 Created)**:

```json
{
  "_id": "65a3b4c8d9e7f3hdi123",
  "name": "Paracetamol",
  "price": 1290,
  "category": "Medicina",
  "stock": 0,
  "createdAt": "2024-09-01T12:00:00.000Z",
  "updatedAt": "2024-09-01T12:00:00.000Z"
}
```

###### Actualizar un producto por ID

- **Método**: PUT
- **Ruta**: `/products/:id`
- **Descripción**: Actualiza los datos de un producto específico.
- **Parámetros de ruta**:
  - `id` (string): ID del producto a actualizar.
- **Cuerpo de la solicitud (JSON)**:
  ```json
  {
    "price": 2000,
    "stock": 15
  }
  ```

**Respuesta esperada (200 OK)**:

```json
{
  "_id": "65a3b4c8d9e7f3hdi123",
  "name": "Paracetamol",
  "price": 2000,
  "stock": 15,
  "category": "Medicina",
  "createdAt": "2024-09-01T12:00:00.000Z",
  "updatedAt": "2025-09-01T12:00:00.000Z"
}
```

###### Eliminar un producto por ID

- **Método**: DELETE
- **Ruta**: `/products/:id`
- **Descripción**: Elimina un producto de la base de datos.
- **Parámetros de ruta**:
  - `id` (string): ID del producto a eliminar.

**Respuesta esperada (200 OK)**:

```json
{
  "message": "Product deleted"
}
```

### Frontend

El frontend utiliza Axios para realizar solicitudes HTTP al backend. Puedes ver la lista de productos y crear nuevos productos desde la interfaz de usuario, así como eliminarlos.
