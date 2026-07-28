# Boxing Management API

API REST para gestionar boxeadores y consultar condiciones meteorológicas para entrenamientos.

Proyecto final integrador de Backend desarrollado con Node.js, Express, MongoDB Atlas y Mongoose.

## Funcionalidades

- Crear, listar, consultar, actualizar y eliminar boxeadores.
- Validar datos con `express-validator`.
- Validar identificadores de MongoDB.
- Registrar solicitudes HTTP mediante un middleware propio.
- Manejar errores y rutas inexistentes.
- Consultar una API externa de clima.
- Generar recomendaciones básicas para entrenamientos al aire libre.

## Tecnologías

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- express-validator
- Axios
- CORS
- dotenv
- Nodemon

## Requisitos

Antes de iniciar el proyecto se necesita:

- Node.js instalado.
- Una cuenta y un clúster en MongoDB Atlas.
- Git instalado.
- Postman opcionalmente, para probar las rutas HTTP.

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Jeser0/boxing-managemen-api.git
```

2. Entrar en la carpeta:

```bash
cd boxing-managemen-api
```

3. Instalar las dependencias:

```bash
npm install
```

4. Crear un archivo `.env` en la raíz del proyecto.

Ejemplo:

```env
PORT=3000
MONGODB_URI=mongodb+srv://USUARIO:CONTRASEÑA@CLUSTER/NOMBRE_BASE_DE_DATOS
```

No se debe publicar el archivo `.env` ni compartir las credenciales de MongoDB Atlas.

## Ejecución

Modo desarrollo:

```bash
npm run dev
```

Modo normal:

```bash
npm start
```

El servidor se ejecuta por defecto en:

```text
http://localhost:3000
```

## Respuesta inicial

### GET `/`

Comprueba que la API está funcionando.

Ejemplo:

```json
{
  "message": "API de gestión de boxeo funcionando correctamente"
}
```

## Endpoints de boxeadores

### GET `/api/boxers`

Obtiene todos los boxeadores.

Ejemplo de respuesta:

```json
{
  "count": 1,
  "boxers": []
}
```

### GET `/api/boxers/:id`

Obtiene un boxeador por su identificador de MongoDB.

### POST `/api/boxers`

Crea un boxeador.

Ejemplo de cuerpo JSON:

```json
{
  "firstName": "Juan",
  "lastName": "Pérez",
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

### PUT `/api/boxers/:id`

Actualiza uno o más campos de un boxeador.

Ejemplo:

```json
{
  "nickname": "El Campeón",
  "wins": 11
}
```

### DELETE `/api/boxers/:id`

Elimina un boxeador.

## API externa de clima

### GET `/api/weather/training`

Consulta las condiciones meteorológicas actuales mediante Open-Meteo y genera una recomendación para entrenar.

Parámetros obligatorios:

- `latitude`
- `longitude`

Ejemplo para San Miguel de Tucumán:

```text
http://localhost:3000/api/weather/training?latitude=-26.8083&longitude=-65.2176
```

Ejemplo de respuesta:

```json
{
  "source": "Open-Meteo",
  "requestedCoordinates": {
    "latitude": -26.8083,
    "longitude": -65.2176
  },
  "currentWeather": {
    "temperature": {
      "value": 25.5,
      "unit": "°C"
    }
  },
  "trainingRecommendation": "Las condiciones actuales son adecuadas para realizar un entrenamiento al aire libre."
}
```

## Validaciones

La API valida, entre otros datos:

- Nombre y apellido obligatorios.
- Longitud de textos.
- Peso mayor que cero y no superior a 300 kg.
- Altura expresada en metros.
- Victorias, derrotas y empates iguales o mayores que cero.
- Fecha con formato válido.
- Identificadores válidos de MongoDB.

Ejemplo de error:

```json
{
  "message": "Los datos enviados no son válidos",
  "errors": [
    {
      "field": "weight",
      "message": "El peso debe ser mayor que 0 y no superar 300 kg"
    }
  ]
}
```

## Códigos de respuesta principales

| Código | Significado |
|---|---|
| `200` | Solicitud procesada correctamente |
| `201` | Recurso creado correctamente |
| `400` | Datos o identificador inválidos |
| `404` | Recurso o ruta no encontrados |
| `500` | Error interno del servidor |
| `502` | Error al consultar la API externa |

## Middleware propio

El middleware `requestLogger` registra en la terminal:

- Fecha y hora.
- Método HTTP.
- Ruta solicitada.
- Código de estado.
- Tiempo de respuesta.

Ejemplo:

```text
[2026-07-28T20:00:00.000Z] GET /api/boxers - 200 - 64ms
```

## Estructura principal

```text
src/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── validators/
├── app.js
└── server.js
```

## Pruebas con Postman

Dentro de `docs/` se incluye una colección de Postman con las solicitudes principales.

Para importarla:

1. Abrir Postman.
2. Presionar `Import`.
3. Elegir el archivo de la colección.
4. Verificar que el servidor esté ejecutándose.
5. Enviar las solicitudes.

Para las rutas por ID, se debe reemplazar el valor de la variable `boxerId` con un identificador real devuelto al crear un boxeador.

## Requisitos del examen cubiertos

- Base de datos propia en MongoDB Atlas.
- Servidor Node.js con rutas y métodos HTTP.
- Esquema original de boxeadores.
- Validaciones con `express-validator`.
- Middleware propio.
- Ruta conectada a una API externa.

## Autor

Jeser
