const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.set('port', process.env.PORT || 8081);
app.use(cors())

const alumno = require('./alumno.json')
app.get('/',(req,res) =>{
    res.json(alumno)
});

const grupo = require('./grupo.json')
app.get('/grupo',(req,res) =>{
    res.json(grupo)
});

app.listen(app.get('port'), ()=>{
    console.log(`hello from express ${app.get('port')}`);
});