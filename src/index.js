require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Database connected'))
  .catch(error => console.error('Database connection failed', error));

const server = new ApolloServer({ typeDefs, resolvers });

server.listen()
  .then(({url}) => console.log(`Server ready at ${url}`))
  .catch(error => console.error('Server startup failed', error));
