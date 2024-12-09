import { gql } from "apollo-server";

export const typeDefs = gql`
  type Client {
    id: ID!
    name: String!
    loans: [Loan]
  }

  type Loan {
    id: ID!
    amount: Float!
    status: String!
  }

  type Query {
    clients: [Client]
    client(id: ID!): Client
  }
`;
