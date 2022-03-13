
const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! updated')
})

app.get("/data",(req,res)=>{
    res.json([{
        product:"01",
        name:"compuer one"
    }, 
    {
        product:"02",
        name:"compuer two"
    }])
})

app.listen(port, () => {
  console.log(`Example app listening updated 1 on port ${port}`)
})