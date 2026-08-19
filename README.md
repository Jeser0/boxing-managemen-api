# Boxing Management API

API REST desarrollada con Node.js, Express y MongoDB Atlas para gestionar boxeadores y consultar condiciones meteorológicas para entrenamientos.

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- express-validator
- Axios
- CORS
- dotenv

## Cómo levantar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/Jeser0/boxing-managemen-api.git
cd boxing-managemen-api
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Variables de entorno

Para esta entrega académica, el repositorio incluye un archivo `.env` con las variables necesarias para ejecutar el servidor y conectarse a MongoDB Atlas.

Las variables utilizadas son:

```env
PORT=3000
MONGODB_URI=<cadena de conexión de MongoDB Atlas>
```

También se incluye `.env.example` como referencia de la configuración.

### 4. Base de datos

La base de datos utilizada es **MongoDB Atlas**, por lo tanto no es necesario iniciar una base de datos local ni ejecutar `mongod`.

Al iniciar el servidor, la aplicación lee `MONGODB_URI` desde `.env` y se conecta automáticamente a la base de datos remota.

### 5. Iniciar el servidor

Modo normal:

```bash
npm start
```

Modo desarrollo:

```bash
npm run dev
```

Si la conexión es correcta, la terminal mostrará mensajes similares a:

```text
Conexión a MongoDB Atlas establecida correctamente
Servidor ejecutándose en http://localhost:3000
```

La API estará disponible en:

```text
http://localhost:3000
```

## Endpoints

### Estado de la API

```http
GET /
```

### Boxeadores

```http
GET    /api/boxers
GET    /api/boxers/:id
POST   /api/boxers
PUT    /api/boxers/:id
DELETE /api/boxers/:id
```

Ejemplo para crear un boxeador:

```json
{
  "firstName": "Juan",
  "lastName": "Perez",
  "nickname": "El Trueno",
  "birthDate": "1998-05-15",
  "weight": 91,
  "height": 1.88,
  "category": "Peso pesado",
  "wins": 10,
  "losses": 2,
  "draws": 1,
  "isActive": true
}
```

### Clima para entrenamiento

```http
GET /api/weather/training?latitude=-26.8083&longitude=-65.2176
```

Esta ruta consume la API externa de Open-Meteo y devuelve las condiciones meteorológicas junto con una recomendación para entrenar al aire libre.

## Funcionalidades implementadas

- CRUD completo de boxeadores.
- Persistencia de datos en MongoDB Atlas.
- Esquema propio con Mongoose.
- Validaciones con `express-validator`.
- Validación de identificadores de MongoDB.
- Middleware personalizado para registrar solicitudes HTTP.
- Manejo centralizado de errores.
- Manejo de rutas inexistentes.
- Consumo de una API externa.
- Códigos HTTP adecuados para cada operación.

## Pruebas

Se puede probar la API desde Postman, Insomnia o cualquier cliente HTTP.

En `docs/boxing-management-api.postman_collection.json` se incluye una colección de Postman con las solicitudes principales ya preparadas.

## Estructura principal

```text
boxing-managemen-api/
├── docs/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── validators/
│   └── app.js
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Requisitos del examen cubiertos

- MongoDB Atlas.
- Servidor Node.js con rutas y métodos HTTP.
- Esquema propio.
- Validaciones con `express-validator`.
- Middleware propio.
- Ruta que consume una API externa.

## Autor

Jeser
