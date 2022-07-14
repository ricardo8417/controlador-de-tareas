const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');

const app = express();

//configuración
app.set('port', process.env.PORT || 3000)

//Middlewares funciones antes de llegar  a las rutas
app.use(morgan('dev'));
app.use(express.json());

//routes rutas
app.use('/api/tasks', require('./routes/task.routes'));

//static files indicar donde iran los archivos estaticos

app.use(express.static(path.join(__dirname, 'public')));

//empezando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
})