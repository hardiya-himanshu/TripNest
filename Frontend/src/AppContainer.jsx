import React from 'react'
import App from './App'
import { UserAccessProvider } from './contexts/UserAccessContext'

function AppContainer() {


  return (
    <UserAccessProvider>
        <App/>
    </UserAccessProvider>
  )
}

export default AppContainer
