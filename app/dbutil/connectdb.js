// const env = require('../env');

const mongoose = require('mongoose');

const connectDB = (env) => {
  console.log('mongoose:', mongoose.Promise)
  console.log(`connectDB env=${env}`)
  switch(env) {
    case 'local':
    case 'prod':
      return mongoose.connect('mongodb://localhost:27017/bs', {
        useNewUrlParser:true,
        useFindAndModify: false,
        useCreateIndex:true,
        useUnifiedTopology: true,
      });
    default:
    throw `no such env ${env}`
  }
};


module.exports = connectDB;
