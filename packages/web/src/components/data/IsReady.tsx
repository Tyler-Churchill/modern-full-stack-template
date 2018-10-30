import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { IsReady } from '../../__generated__/IsReady'
import gql from 'graphql-tag'

export const IsReadyQuery = gql`
  query IsReady {
    isReady
  }
`
export default class DisplayServerReady extends Component {
  render() {
    return (
      <Query<IsReady> query={IsReadyQuery}>
        {({ loading, data }) => {
          if (!loading && data) {
            return <div>{data.isReady ? 'true' : 'false'}</div>
          }
          return <h2>Looks like our GraphQL Server is down</h2>
        }}
      </Query>
    )
  }
}
