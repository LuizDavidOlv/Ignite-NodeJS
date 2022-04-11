const express= require('express');
const { get } = require('express/lib/response');
const app= express();

app.get("/",(request,response)=>{
    return response.json({message: "E aew cambana!!!"});
})

app.listen(3333);