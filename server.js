const dotenv = require('dotenv');
const express = require('express');
const userRouter = require('./routes/userRoutes.js');
const propertyRouter = require('./routes/propertyRoutes.js');
const errorHandler = require("./middlewares/errorHandler.js")
const notFoundHandler = require ("./middlewares/notFoundHandler.js")

dotenv.config({ path: './.env' });
console.log('Current Directory:', __dirname);
console.log('SECRET:', process.env.JWT_SECRET);


const app = express();
app.use(express.json());
app.use(userRouter)
app.use(propertyRouter)
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

console.log('SECRET:', process.env.JWT_SECRET);
