import React from 'react'
import { Outlet } from 'react-router-dom'
import NabBar from './NabBarPanel'
import { Provider } from 'react-redux'
import store from '../store/Store'


function RootLayout() {
  return (
    <Provider store={store}>

  
      <NabBar/>
      <main>
      <Outlet/>
      </main>
    </Provider>
  )
}

export default RootLayout