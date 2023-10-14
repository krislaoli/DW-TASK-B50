const express = require ('express')
const path = require('path')
const app = express()
const port = 5000

// app.set("view engine", "hbs");
// app.set("views", path.join(__dirname, "src/views"));

app.get('/', ( req, res) => {
    res.send("apa kabar kamu disana")
})



app.listen(port, () => {
    console.log("app")
})
