const express = require("express")
const app = express()
const engine = require("express-handlebars").engine
const port = 5000

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/form/signup', (req, res) => {
    console.log(req.body);
    res.redirect('/')
  })

  

app.listen(port, () => {
    console.log(`Serveur running on port ${port}`)
})