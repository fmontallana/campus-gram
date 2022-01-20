import React, { useState, useEffect } from 'react'
import { addDoc, collection, getDocs, onSnapshot, query } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import { async } from '@firebase/util'

const userRef = collection(db, "users")


export const useGetPost = async () => {

    const postRef = collection(db, 'posts')
    const [postList, setPostList] = useState({})
    const { isAuth } = useLogin()


    const posts = async () => {
        const unsub = await onSnapshot(postRef, (snapshot) => {
            const posts = snapshot.docs.map((post) => (post.data()))
            setPostList(posts)
        })
    }

    posts()


    return { postList }
}

export function useFetchAccountInfo() {

    // let id = JSON.parse(sessionStorage.getItem('user')).userID

    const [accountInfo, setAccountInfo] = useState(null)

    const getInfo = async (id) => {
        const unsub = await onSnapshot(userRef, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                if (id === doc.id) {
                    setAccountInfo(doc.data())
                    console.log(accountInfo)
                    console.log("getinfo")

                }
            })

            // setAccountInfo(data)
        })
    }
    return { getInfo, accountInfo }

}

export function useLogin() {
    const [loginEmail, setLoginEmail] = useState(null)
    const [loginPassword, setLoginPassword] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [accountInfo, setAccountInfo] = useState(null)

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
                        // window.location.reload()
                    }
                })
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return { login, setLoginEmail, setLoginPassword, isAuth, setIsAuth, accountInfo }
}
export function useRegister() {

    const [firstname, setFirstname] = useState(null)
    const [lastname, setLastname] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [birthday, setBirthday] = useState(null)
    const [gender, setGender] = useState(null)

    const register = async () => {
        const data = {
            firstname,
            lastname,
            email,
            password,
            birthday,
            gender,
        }
        console.log(data)
        await addDoc(userRef, data)
    }

    return { register, setFirstname, setLastname, setEmail, setPassword, setBirthday, setGender }
}

