require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
// const { cookie } = require('express-validator');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express(); 
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");

// DB Connnection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
        console.log(" DB CONNECTED");
});

//Middleware 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//Routes
  app.use('/api',authRoutes);
  app.use('/api',userRoutes);
  app.use('/api',categoryRoutes);
  app.use('/api',productRoutes);
  app.use('/api',orderRoutes);

  //PORT
const port = process.env.PORT || 8000;


//starting a server
app.listen(port, () => {
        console.log("port number is "+ port)
})