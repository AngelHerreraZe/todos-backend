const express = require('express');
const db = require('./utils/database')
const Todos = require('./models/todos.model')
const morgan = require('morgan');
const TodosRoutes = require('./routes/todos.routes')
const PORT = 8000;
Todos;
db.sync()
    .then(() => console.log("Base de datos sincronizada"));

db.authenticate()
    .then(() => console.log("Conexion a base de datos OK"))
    .catch((error) => console.log(error))

const app = express();
app.use(express.json());
app.use(morgan("dev"))
app.use(TodosRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});