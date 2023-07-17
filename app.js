const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors())

//connecting to db
require('./database')


require('./routes/user')(app)


app.listen(1111,()=>{
    console.log("server started at 1111")
})
