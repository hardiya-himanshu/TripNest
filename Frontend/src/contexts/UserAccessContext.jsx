import React, { createContext, useState, useContext } from "react"

export const UserAccessContext = createContext()
export const UserAccessProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false)
  return (
      <UserAccessContext.Provider value={{loginStatus, setLoginStatus}}>
          {children}
      </UserAccessContext.Provider>
  )
}
export const useUserAccess = () => {
  return useContext(UserAccessContext)
}

