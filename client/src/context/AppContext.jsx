import React, { createContext,useContext, useState } from 'react'

export const AppContext=createContext()

export const AppContextProvider=({children})=>{
  
  const [user,setUser]=useState(null)
  const [showLogin,setShowLogin]=useState(null)

  const value={
     user,
     setUser,
     showLogin,
     setShowLogin
  }
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}
export const useAppContext=()=>{
  return useContext(AppContext)
}
