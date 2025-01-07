const express = require("express")
const app = express();
const path = require("path");
const staticRouter = require("./routes/staticRouter")
const userRouter = require("./routes/userRoute")
const {connectToMongoDB} = require("./connect")
const restrictToLoggedinUserOnly = require("./middleware/user")
const port = 8080;

app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


connectToMongoDB("mongodb://localhost:27017/google-doc")
  .then(() => console.log("MongoDB Started"));

app.use("/", restrictToLoggedinUserOnly, staticRouter)
app.use("/user", userRouter)

app.get("/login", (req, res) => {
    res.render("login")
})

app.listen(port, () => console.log(`Server started on ${port}`));