import React, { createContext, useState, useContext } from "react"

export const UserAccessContext = createContext()

export const UserAccessProvider = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(false)
  const [checkoutPrice, setCheckoutPrice] = useState()
 
 
  return (
      <UserAccessContext.Provider value={{loginStatus, setLoginStatus, checkoutPrice, setCheckoutPrice}}>
          {children}
      </UserAccessContext.Provider>
  )
}
export const useUserAccess = () => {
  return useContext(UserAccessContext)
}