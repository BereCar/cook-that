import React, { createContext, useState } from 'react'

export const IsConnectedContext = createContext([false, () => null])

export default ({ children }) => {
  const [isConnected, setIsConnected] = useState(false)

  return (
    <IsConnectedContext.Provider value={[isConnected, setIsConnected]}>
      {children}
    </IsConnectedContext.Provider>
  )
}
