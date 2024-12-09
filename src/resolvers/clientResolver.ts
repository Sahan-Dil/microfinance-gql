import { RESTDataSource } from "apollo-datasource-rest";

class ClientAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "localhost:3000/clients";
  }

  async getClients() {
    return this.get("clients");
  }

  async getClientById(id: string) {
    return this.get(`clients/${id}`);
  }
}

export const resolvers = {
  Query: {
    clients: async (_: any, __: any, { dataSources }: any) =>
      dataSources.clientAPI.getClients(),
    client: async (_: any, { id }: any, { dataSources }: any) =>
      dataSources.clientAPI.getClientById(id),
  },
};
