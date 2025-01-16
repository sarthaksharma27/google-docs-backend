const express = require("express")
const app = express();
const path = require("path");
const staticRouter = require("./routes/staticRouter")
const userRouter = require("./routes/userRoute")
const docRouter = require("./routes/docRouter")
const editorRouter = require("./routes/editorRouter")
const shareDoc = require("./routes/shareDoc")
const {connectToMongoDB} = require("./connect")
const restrictToLoggedinUserOnly = require("./middleware/user")
const cookieParser = require('cookie-parser'); 
const bodyParser = require('body-parser')
const port = 8080;

app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(bodyParser.json());

connectToMongoDB("mongodb://localhost:27017/google-doc")
  .then(() => console.log("MongoDB Started"));

app.use("/", staticRouter)
app.use("/user", userRouter)
app.use("/doc", restrictToLoggedinUserOnly, docRouter)
app.use("/save", restrictToLoggedinUserOnly, editorRouter)
app.use("/docs", shareDoc)

app.listen(port, () => console.log(`Server started on ${port}`));