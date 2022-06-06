import { ApolloServer } from "apollo-server-express";
import { ENV } from "../config/environment";

//@ts-ignore
const apolloServer = new ApolloServer({
  playground: ENV,
});

export default apolloServer;
