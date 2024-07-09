
import { ToastContainer } from 'react-toastify'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from 'react'
import Spinner from './utils/Spinner'
const Home = lazy(() => import("./pages/Home"))
const Registration = lazy(() => import("./pages/Registration"))
const Detail = lazy(() => import("./pages/Detail"))
const ErrorPage = lazy(() => import("./pages/ErrorPage"))


function App() {

  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <ToastContainer transition={1200} position='top-left' />
      </Router>
    </Suspense>


  )
}

export default App
