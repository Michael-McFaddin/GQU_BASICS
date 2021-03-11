//start command: json-server --watch db.json --port 3004
//npm start
import { GraphQLServer } from 'graphql-yoga';
import { Query, Post, User, Picture } from './graphql/resolvers/index';

const server = new GraphQLServer({
  typeDefs:'./src/graphql/schema.graphql',
  resolvers: {
    Query,
    Post,
    User,
    Picture,
  }
});

server.start(() => {
  console.log('And running running');
});