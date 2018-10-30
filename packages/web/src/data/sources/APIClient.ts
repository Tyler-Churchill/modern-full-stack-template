import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { ApolloClient } from 'apollo-client'

const endpoint = 'http://127.0.0.1:4000/graphql'

// http connection information
const httpLink = new HttpLink({
  uri: endpoint
})

const link = ApolloLink.from([httpLink])

// set cache restore if running on a browser
const cache = new InMemoryCache()

const APIClient = new ApolloClient({
  link,
  cache
})

export default APIClient
