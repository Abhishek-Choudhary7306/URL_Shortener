const express = require('express')
const path = require('path')
const app = express();
const PORT = 8001;
const cookieParser = require('cookie-parser')

const urlRoute = require('./routes/url')
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')

const {connectMongoDB} = require('./connection')
const {restrictToLoggedInUserOnly,checkAuth} = require('./middlewares/auth')

connectMongoDB('mongodb://127.0.0.1:27017/db-2-url-shortener')

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.set("view engine","ejs");
app.set('views',path.resolve('./views'))



app.use('/',checkAuth,staticRoute)
app.use('/url',restrictToLoggedInUserOnly,urlRoute)
app.use('/user',userRoute)

app.listen(PORT,()=>{
    console.log(`Server Started at http://localhost:${PORT}`);
})


