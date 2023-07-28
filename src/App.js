import React, { Suspense,lazy }  from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"


const Home1 = lazy( () => import("./pages/home/Home1.jsx"));

const App = () => {
  return (
    <Suspense fallback={ <div>Chargement.....</div> }>
      <BrowserRouter>
          <Routes>
              <Route exact path='/' Component={Home1}/>
          </Routes>      
      </BrowserRouter>
    </Suspense>
  )
}

export default App