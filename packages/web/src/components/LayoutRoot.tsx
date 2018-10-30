import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import styled from 'react-emotion'
import APIClient from '../data/sources/APIClient'

const StyledLayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

interface LayoutRootProps {
  className?: string
}

const LayoutRoot: React.SFC<LayoutRootProps> = ({ children, className }) => (
  <ApolloProvider client={APIClient}>
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </ApolloProvider>
)

export default LayoutRoot
