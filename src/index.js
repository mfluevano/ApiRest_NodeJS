const express = require('express');
const routerApi = require('./routes');
const {logErrors, errorHandler, boomErrorHandler} =require('./middleware/error.handler');
const {swaggerHandler}  = require('./middleware/swagger');

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express')
const app = express();
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
//app.use(swaggerSpec);

app.listen(port, () => {
  console.log('Mi port' + port);
  swaggerHandler(app,port);
});


