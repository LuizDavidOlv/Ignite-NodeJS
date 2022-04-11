const express= require('express');
const { get } = require('express/lib/response');
const app= express();

app.get("/",(request,response)=>{
    return response.send("Hello Word!");
})

app.listen(3333);