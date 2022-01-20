import React , {useEffect, useState} from 'react'
import { useFetchAccountInfo, useLogin } from '../helper/db-functions'
import FriendLists from './FriendLists'
import SideProfile from './SideProfile'

function Sidebar() {

    const {isAuth} = useLogin()
    const [details, setDetails] = useState({})
    let session = sessionStorage.length <= 0 ? false : true

    useEffect(()=>{
        console.log("side bar")

        if (session) {
        console.log(JSON.parse(sessionStorage.getItem('user')).userID)
        setDetails(JSON.parse(sessionStorage.getItem('user')))
        console.log(JSON.parse(sessionStorage.getItem('user')))
        console.log(details.firstname)
        } else {
          
        }
      },[])

    return (
        <div className='sidebar'>
                <SideProfile photo={`https://i.pravatar.cc/200?u=${details.userID}`}
                fullname = {`${details.firstname} ${details.lastname}`}
                username = {details.email}
                post = "1k"
                followers = "100k"
                following = "800" />
                <FriendLists />
        </div>
    )
}

export default Sidebar
