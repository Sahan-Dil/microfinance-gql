import { ApolloServer } from "apollo-server";
import { typeDefs } from "./typeDefs/schema";
import { resolvers } from "./resolvers/clientResolver";
import ClientAPI from "./services/clientAPI";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    clientAPI: new ClientAPI(),
  }),
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
