const express = require('express');
const app = express();
const port = 7000;

// Import and connect to MongoDB
const mongoDB = require('./db');
mongoDB();

// Basic route to test server
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
  res.header("Access-Control-Allow-Headers",
  "Origin,X-Requested-With,Content-Type,Accept");
  next();
})
app.use(express.json())
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});