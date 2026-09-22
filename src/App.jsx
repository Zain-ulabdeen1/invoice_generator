import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Main from './components/Main'
import Main2 from './components/Main2'
import Guest from './pages/guest'

const App = () => {
  return (
    <>


      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Main />
              <Main2 />
            </>
          }
        />

        <Route path="/guest" element={<Guest />} />
      </Routes>
    </>
  )
}

export default App