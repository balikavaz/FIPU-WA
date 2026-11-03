const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
    console.log('Pozvan sam...');
    response.send('OK1-!');
}) ;

app.listen(PORT, (error) => {
    if (error){
        console.error(`Došlo je do greške pri pokretanju poslužitelja.`);

    }
    console.log(`Express poslužitelj sluša na portu: ${PORT}`);

})

console.log(express);