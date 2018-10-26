import { ApolloServer } from 'apollo-server-express';
import { createConnection, Connection } from 'typeorm';
import * as express from 'express';
import * as cors from 'cors';
import schema from '../schema/schema';

/**
 * Loose entity object for dynamically setting
 */
interface LooseEntities {
  [key: string]: any;
}

class GraphQLServer {
  express: any;
  server: ApolloServer;
  connection: Connection;
  connectionInfo: any;
  entities: LooseEntities;

  constructor() {
    this.express = express();
    this.express.use(
      cors({
        origin: '*',
        credentials: true
      })
    );
    this.server = new ApolloServer({
      schema,
      introspection: true,
      cacheControl: true,
      tracing: true,
      context: ({ req }) => ({
        db: this.connection,
        entities: this.entities
      })
    });
    this.server.applyMiddleware({ app: this.express });
  }
  /**
   * Expose express HTTP request handler
   * @param req
   * @param res
   */
  async http(req: express.Request, res: express.Response) {
    if (this.connection === undefined) {
      // await this.createDatabaseConnection();
    }
    this.express(req, res);
  }
  /**
   * Use to run locally, not called on production gcloud function invocation
   */
  async startLocal() {
    // await this.createDatabaseConnection();
    await this.express.listen({ port: 4000 }, () =>
      console.log(
        `🚀 Server ready at http://localhost:4000${this.server.graphqlPath}`
      )
    );
  }
}

export default GraphQLServer;
