import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import typeDefs from './schema';
import resolvers from './resolvers';
import { AuthorsAPI, CommentsAPI, PostsAPI } from './datasources';
// import { logger } from './middlewares';

interface SchemaContext {
  dataSources: {
    postsAPI: PostsAPI;
    commentsAPI: CommentsAPI;
    authorsAPI: AuthorsAPI;
  };
}

const server = new ApolloServer<SchemaContext>({
  typeDefs,
  resolvers,
  // plugins: [logger],
});

const standaloneServer = startStandaloneServer(server, {
  context: async () => ({
    dataSources: {
      postsAPI: new PostsAPI(),
      commentsAPI: new CommentsAPI(),
      authorsAPI: new AuthorsAPI(),
    },
  }),
});

standaloneServer.then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
