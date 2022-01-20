import './App.css';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Login from './pages/Login/Login';
import { useState, useEffect } from 'react';
import { HandleShowCreatePost } from './helper/MainFunctions';
import { useFetchAccountInfo, useLogin } from './helper/db-functions';
import ProtectedRoutes from './helper/ProtectedRoute';
import { collection, onSnapshot, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';
import useFetchPosts from './helper/useFetchPosts';
import Profile from './pages/Profile/Profile';

function App() {
  const { showCreatePost, show } = HandleShowCreatePost()
  // const { getInfo, accountInfo } = useFetchAccountInfo()
  // const {login, setLoginEmail, setLoginPassword, accountInfo, isAuth} = useLogin()
  // const { isAuth, accountInfo } = useLogin()
  const [session, setSession] = useState(sessionStorage.length <= 0 ? false : true)
  // let session = sessionStorage.length <= 0 ? false : true



  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Login setSession={setSession} />} />
        {/* <Route element={<ProtectedRoutes isAuth={session} />}> */}
        <Route path={"/home"} element={
          <>
            <div className='wrapper'>
              <Navigation show={show} home={true} />
              <Main showCreatePost={showCreatePost} />
              <Sidebar />
            </div>
          </>
        } />
        <Route path={'profile'} element={<Profile show={show} />} />
        {/* </Route> */}
        <Route path={"*"} element={<h1>PAge Not FOund!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
