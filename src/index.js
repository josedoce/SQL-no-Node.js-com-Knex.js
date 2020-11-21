const express = require('express');
const rota = require('./routes');
const routes = require('./routes');
const app = express();

//avisar pro express usar json
app.use(express.json());
app.use(rota);

//notFound
app.use((req, res, next)=>{
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

//catch all
app.use((error, req, res, next)=>{
    res.status(error.status || 500)
    res.json({error: error.message})
})

app.listen(3000, ()=>{
    console.log('servico em execução...');
});