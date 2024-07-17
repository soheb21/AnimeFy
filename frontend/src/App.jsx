
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux'
import { getUserAsync } from './store/user/userAPI';
import Protected from './utils/Protected';
import ProtectedAdmin from './utils/ProtectedAdmin';
import AddAnimeForm from './pages/Admin/AddAnimeForm';
import Dashbaord from './pages/Admin/Dashbaord';
import { getAllAnimesAsync } from './store/anime/animeAPI';
import Home from './pages/Home';
import Detail from './pages/Detail';
import ErrorPage from './pages/ErrorPage';
import Fav from './pages/Fav';
import Registration from './pages/Registration';


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAsync());
    dispatch(getAllAnimesAsync());
  }, [dispatch])



  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/fav' element={
          <Protected><Fav /></Protected>
        } />
        <Route path='/add-Anime' element={<ProtectedAdmin><AddAnimeForm /></ProtectedAdmin>} />
        <Route path='/edit-Anime/:id' element={<ProtectedAdmin><AddAnimeForm /></ProtectedAdmin>} />
        <Route path='/dashboard' element={<ProtectedAdmin><Dashbaord /></ProtectedAdmin>} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer transition={1200} />
    </Router>



  )
}

export default App
