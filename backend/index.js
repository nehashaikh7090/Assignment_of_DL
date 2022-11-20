const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routers = require('./routers/index')(express.Router(), app)

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(cors());

app.use('/', routers)



app.listen(3000, function(){
    console.log("App is listening on 3000 port")
})