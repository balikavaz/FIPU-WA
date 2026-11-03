const express = require('express');
const app = express();
const PORT = 3000;

const korisnici = {
    { id: 1, ime: "Marko", prezime: "Marić"},
    { id: 2, ime: "Ivo", prezime: "Ivić"},
    { id: 3, ime: "Pero", prezime: "Perić"}
};


app.get('/', (request, response) => {
    console.log('Pozvan sam...');
    response.send('<b>TESTIRANJE!</b><br><hr>');
}) ;

app.get('/korisnici', (request, response) => {
    res.json(korisnici);
});


app.listen(PORT, (error) => {
    if (error){
        console.error(`Došlo je do greške pri pokretanju poslužitelja.`);

    }
    console.log(`Express poslužitelj sluša na portu: ${PORT}`);

})

console.log(express);