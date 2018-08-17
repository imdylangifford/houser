const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const controller = require('./controllers')
require('dotenv').config()

const app = express();
app.use(bodyParser.json() );
massive("postgres://xdgjxepwimtica:9471fc839af932c8b099f13e057244edfcfdebf210fa0679a8d12d110c5c934e@ec2-54-235-212-58.compute-1.amazonaws.com:5432/d8ksud43erfqc6?ssl=true")
.then( dbInstance => {
    console.log("CONNECTED TO DB")
    app.set('db', dbInstance)
    //listener()
}).catch(err => console.log(err))

app.get('/api/houses', controller.getHouses);
app.post('/api/addhouse', controller.addHouse);
app.delete('/api/house/:id', controller.deleteHouse)

//function listener(){
    const port = 4500
    app.listen(port, ()=>{
        console.log(`We are connected on port ${4500}`)
    })
//}