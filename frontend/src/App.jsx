import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getFavAsync, getUserAsync } from './store/user/userAPI';
import Protected from './utils/Protected';
import ProtectedAdmin from './utils/ProtectedAdmin';
import AddAnimeForm from './pages/Admin/AddAnimeForm';
import Dashbaord from './pages/Admin/Dashbaord';
import { getAllAnimesAsync } from './store/anime/animeAPI';
const Home = lazy(() => import('./pages/Home'))
import Detail from './pages/Detail';
import ErrorPage from './pages/ErrorPage';
import Fav from './pages/Fav';
import Register from './components/Register';
import Login from './components/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearAllUserErrors } from './store/user/userSlice'
import Spinner from './utils/Spinner'


function App() {

  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.anime)
  const { isAuthenticate, favs } = useSelector((state) => state.user)
  const token = localStorage.getItem("token");
  const [filter, setFilter] = useState("")
  let listCount = favs.length ? favs.length : 0;

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

    dispatch(getAllAnimesAsync(filter));
  }, [dispatch, filter, error, token, isAuthenticate])

  return (
    <Router>
      <Navbar count={listCount} />

      <Routes>
        <Route path='/' element={
          <Suspense fallback={<Spinner />}>
            <Home setFilter={setFilter} filter={filter} />
          </Suspense>
        } />
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
      <ToastContainer position='bottom-right' autoClose={1500} />
    </Router >



  )
}

export default App
