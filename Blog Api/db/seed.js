// Dot Env Config
require('dotenv').config();

// IMPORTS
const connectToDB = require('./db/mongoose');
const Product = require('./models/product.model');

// DUMMY DATA
const fakeUsers = [
  {
    name: 'Shay',
     blogs: 100 , },
  { name: 'Addi', blogs: 20, },
  { name: 'Lyza', blogs: 10,  },
];

// START FUNCTION
const start = async () => {
  try {
    await connectToDB(process.env.MONGODB_URL); 
    await Product.deleteMany(); 
    await Product.create(fakeUsers); 
    console.log('Success!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();