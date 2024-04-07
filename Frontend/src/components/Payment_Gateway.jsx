import React from 'react'
import Payment_Amount from './Payment_Amount'
import { useUserAccess } from '../contexts/UserAccessContext'


function Payment_Gateway() {
    const {checkoutPrice, setCheckoutPrice} = useUserAccess()

  return (
    <div>
        <Payment_Amount amount={checkoutPrice}/>
    </div>
  )
}

export default Payment_Gateway
