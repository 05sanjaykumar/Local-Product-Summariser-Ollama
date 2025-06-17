const express = require('express')
const cors = require('cors')
const getPrice = require('./Routes/GetPrice')



const app = express()
app.use(cors())
app.use(express.json());


app.use('/api/getPrice',getPrice)


const PORT = 3000

app.listen(PORT,()=>{
    console.log(`The app is running at port ${PORT}`)
})

module.exports = app