//const express = require('express');
import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

const users = [
    { id: 1, ime: "Marko", prezime: "Marić"},
    { id: 2, ime: "Ivo", prezime: "Ivić"},
    { id: 3, ime: "Pero", prezime: "Perić"}
];

app.get('/', (request, response) => {
    console.log('Path /');
    let aps_putanja = path.resolve('public', 'home.html');
    console.log(aps_putanja)
    response.sendFile(aps_putanja);
}) ;

app.get('/error', (request, response) => {
    console.log('Imamo grešku...');
    //console.log(__dirname);
    let putanja = path.join('error.html');
    let aps_putanja = path.resolve(putanja);
    response.sendFile(aps_putanja);
});

app.get('/users', (request, response) => {
    console.log('Users');
    response.json(users);
});

app.get('/about', (request, response) => {
    console.log('Path about');
    let aps_putanja = path.resolve('public', 'about.html');
    console.log(aps_putanja);
    response.sendFile(aps_putanja);
})


app.listen(PORT, (error) => {
    if (error){
        console.error(`Došlo je do greške pri pokretanju poslužitelja.`);
    }
    console.log(`Express poslužitelj sluša na portu: ${PORT}`);
})

console.log(express);