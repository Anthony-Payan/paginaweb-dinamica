const express = require ('express');

const hbs = require ('hbs');

const app =express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index',{
        autor:'Anthony Payan',
        year: new Date().getFullYear(),
        title:'Inicio'
    });
});

app.get('/Gustavo', (req, res)=>{
    res.render('gustavo',{
        autor:'Anthony Payan',
        year: new Date().getFullYear(),
        title:'Gustavo Dore'
    });
});

app.get('/Henri', (req, res)=>{
    res.render('henriMatisse',{
        autor:'Anthony Payan',
        year: new Date().getFullYear(),
        title:'Henri Matisse'
    });
});

app.get('/Picasso', (req, res)=>{
    res.render('picasso',{
        autor:'Anthony Payan',
        year: new Date().getFullYear(),
        title:'Pablo Picasso'
    });
});
app.get('/GustavoKlimt', (req, res)=>{
    res.render('gustavKlimt',{
        autor:'Anthony Payan',
        year: new Date().getFullYear(),
        title:'Gustavo Klimt '
    });
});


app.listen(3000,()=>{
    console.log('Escuchando el puerto 3000')
});