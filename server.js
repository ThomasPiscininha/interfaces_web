const express = require('express');

const app = express();

app.get('/',()=>{
    response.send("Olá mundo ... ayaya ababa")
})

app.listen(8000,()=>{
    console.log("Abrindo servidor 🎈");
})