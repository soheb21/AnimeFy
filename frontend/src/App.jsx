

import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getFavAsync, getUserAsync } from './store/user/userAPI';
import Protected from './utils/Protected';
import ProtectedAdmin from './utils/ProtectedAdmin';
import AddAnimeForm from './pages/Admin/AddAnimeForm';
import Dashbaord from './pages/Admin/Dashbaord';
import { getAllAnimesAsync } from './store/anime/animeAPI';
import Home from './pages/Home';
import Detail from './pages/Detail';
import ErrorPage from './pages/ErrorPage';
import Fav from './pages/Fav';
import Register from './components/Register';
import Login from './components/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearAllUserErrors } from './store/user/userSlice'



function App() {

  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.anime)
  const { isAuthenticate } = useSelector((state) => state.user)
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (isAuthenticate || token) {
      dispatch(getUserAsync());
      dispatch(getFavAsync());
      toast.success(message ? message : null)
    }
    if (error) {
      toast.error(error ? error : "Something went wrong!!")
      dispatch(clearAllUserErrors())
    }

    dispatch(getAllAnimesAsync());
  }, [dispatch, error, token, isAuthenticate])



  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/fav' element={
          <Protected><Fav /></Protected>
        } />
        <Route path='/add-Anime' element={<ProtectedAdmin><AddAnimeForm /></ProtectedAdmin>} />
        <Route path='/edit-Anime/:id' element={<ProtectedAdmin><AddAnimeForm /></ProtectedAdmin>} />
        <Route path='/dashboard' element={<ProtectedAdmin><Dashbaord /></ProtectedAdmin>} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </Router>



  )
}

export default App
