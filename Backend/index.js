const express = require('express')
const app = express();
const port = 3000;
const routes = require('../Backend/routes.js')
app.use(express.json())
app.use('/' , routes)


 
app.listen(port, () => { 
    console.log("The server has been started on port" + port)
})