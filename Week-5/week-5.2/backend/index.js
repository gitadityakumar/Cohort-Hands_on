const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hi there form LEGION")
})

app.listen(PORT,()=>{
    console.log(`App is running on http://localhost:${PORT}`)
})