const express = require('express');
const hbs = require('hbs');
//declara el producto de la funcion express, permite utilizarla
const app = express();

//estamos mostrando el html pasandole la carpeta donde se encuantra  
app.use(express.static(__dirname + '/public'));

//llamar parciales dentro de la ruta indicada
hbs.registerPartials(__dirname + '/views/parciales');
//express HBS
app.set('view engine', 'hbs');

//helpers
require('./hbs/helpers')

//adquiriendo el puerto de heroku
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    //renderisa el home.hbs en locahost:3000/
    res.render('home', {
        //pasandole valores a la variable que esta en home.hbs {{nombre}} y {{anio}}
        nombre: 'Bladimir'
    });
});
app.get('/about', (req, res) => {
    //renderisa el about.hbs en locahost:3000/
    res.render('about');
});

app.listen(port, () => {
    console.log(`escuchando el puerto ${port}`)
})




//configura una solicitud get cuando el PATH sea un /
//sirve para escuchar solamente / ejemplo localhost:3000*/
/*app.get('/', (req, res) => {
    //res.send('Hello World');
    let salida = {
        nombre: 'kevinsito',
        url: req.url
    };

    res.send(salida);
});*/
/*
//sirve para escuchar solamente /data eje localhost:3000* /data*
app.get('/data', function(req, res) {
    res.send('Hello Data');

});*/