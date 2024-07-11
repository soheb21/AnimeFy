
import { ToastContainer } from 'react-toastify'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from 'react'
import Spinner from './utils/Spinner'
import Navbar from './components/Navbar'

const AddAnimeForm = lazy(() => import("./pages/Admin/AddAnimeForm"))
const Dashbaord = lazy(() => import("./pages/Admin/Dashbaord"))
const Fav = lazy(() => import("./pages/Fav"))
const Home = lazy(() => import("./pages/Home"))
const Registration = lazy(() => import("./pages/Registration"))
const Detail = lazy(() => import("./pages/Detail"))
const ErrorPage = lazy(() => import("./pages/ErrorPage"))


function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/fav' element={<Fav />} />
          <Route path='/add-Anime' element={<AddAnimeForm />} />
          <Route path='/dashboard' element={<Dashbaord />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <ToastContainer transition={1200} position='top-left' />
      </Router>
    </Suspense>


  )
}

export default App
