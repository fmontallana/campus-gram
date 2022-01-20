import { collection, onSnapshot, getDocs } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase-config'
import { useFetchAccountInfo, useLogin, useRegister } from '../../helper/db-functions'
import './Login.css'

function Login() {

    const { register, setFirstname, setLastname, setEmail, setPassword, setGender, setBirthday } = useRegister()
    // const {login, setLoginEmail, setLoginPassword} = useLogin()
    const [loginEmail, setLoginEmail] = useState(null)
    const [loginPassword, setLoginPassword] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [accountInfo, setAccountInfo] = useState(null)
    const [invalid, setInvalid] = useState(false)
    const userRef = collection(db, "users")

    let navigate = useNavigate()

    const login = async () => {
        await getDocs(userRef)
            .then((users) => {
                users.forEach((user) => {
                    if (loginEmail === user.data().email
                        && loginPassword === user.data().password) {
                        setIsAuth(true)
                        setAccountInfo(user.data())
                        console.log(accountInfo)
                        sessionStorage.setItem('user', JSON.stringify({ isAuth, userID: user.id, ...user.data() }))
                        navigate('/home')
                        setInvalid(false)
                    }else {
                        setInvalid(true)
                    }               
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const handleLogin = (e) => {
        e.preventDefault()
        login()
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    }
    const handleSignUp = (e) => {
        e.preventDefault()
        register()
        alert('Account Created!')
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
    }


    const showInvalidAccount =()=>{
        {setTimeout(() => {
            setInvalid(false)
        }, 5000)}
        return (
            <div>
                <h4> Invalid Account...</h4>
            </div>
        )
    }
    return (
        <div className='login'>
            <div className="container">
                <form onSubmit={(e) => e.preventDefault()}>
                   { invalid && showInvalidAccount()}
                    <input onChange={(e) => setLoginEmail(e.target.value)} required type="email" placeholder='Email' />
                    <input onChange={(e) => setLoginPassword(e.target.value)} required type="password" placeholder='Password' />
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
            <div className="container">
                <form action="post">
                    <div className="input-group">
                        <input onChange={(e) => setFirstname(e.target.value)} required type="text" placeholder='First name' />
                        <input onChange={(e) => setLastname(e.target.value)} required type="text" placeholder='Last name' />
                    </div>
                    <input onChange={(e) => setEmail(e.target.value)} required type="email" placeholder='Email' />
                    <input onChange={(e) => setPassword(e.target.value)} required type="password" placeholder='Password' />
                    <div className='input-group'>
                        <div>
                            <p>Birthday:</p>
                            <input onChange={(e) => setBirthday(e.target.value)} required type="date" name="" id="" />
                        </div>
                        <div>
                            <p>Gender:</p>
                            <input onClick={(e) => setGender(e.target.value)} required type="radio" name="gender" id="male" value="Male" />
                            <label htmlFor="male">Male</label>
                            <input onClick={(e) => setGender(e.target.value)} required type="radio" name="gender" id="female" value="Female" />
                            <label htmlFor="female">Female</label>
                        </div>
                    </div>
                    <button onClick={handleSignUp} required type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Login
