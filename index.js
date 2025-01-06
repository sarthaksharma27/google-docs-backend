const express = require("express")
const app = express();
const path = require("path");
const staticRouter = require("./routes/staticRouter")
const port = 8080;

app.set('view engine', 'ejs');
app.set("views", "./views");
// app.use(express.static('./public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", staticRouter)

app.get("/login", (req, res) => {
    res.render("login")
})

app.listen(port, () => console.log(`Server started on ${port}`));