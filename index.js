const express = require('express');
const app = express();
const bodyparser = require("body-parser")
const connnection = require('./database/database');

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

connnection
    .authenticate()
    .then(() => {
        console.log("Conexão realizada");
    }).catch(err => {
        console.error(err)
    })


app.get("/", (req, res) => {
    res.render("index")
})



app.use("/",categoriesController);
app.use("/",articlesController);

app.listen(8080,() =>{
    console.log("Aplicação OK");
})

