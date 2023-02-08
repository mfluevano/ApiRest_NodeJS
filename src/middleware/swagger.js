const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express')



const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Functional Api NodeJS with Express Clean Architecture",
      version: "0.1.1",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",

  },
},
apis: ['./src/routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options);

function swaggerHandler(app,port){
  app.use('/api/v1/docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('/api/v1/docs.json',(req, res)=>{
    res.setHeader('Content-Type','aplication/json');
    res.send(swaggerSpec);
  })
}

module.exports ={swaggerHandler};
