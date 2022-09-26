const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, ('/public'))));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
});

app.get('/ingreso', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/ingreso.html'))
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/registro.html'))
});


app.listen(process.env.PORT || 3000, function () {
    console.log('Servidor corriendo en puerto 3000')
});
