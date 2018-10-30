import { makeExecutableSchema } from 'graphql-tools';

import { MainSchema } from '../modules/main/index';

import resolvers from './resolvers';

/**
 * Generate the GraphQL schema
 */
const schema = makeExecutableSchema({
  typeDefs: [MainSchema],
  resolvers
  // add directives here
});

export default schema;
