import React from 'react'
import { 
    IoHome,
    IoPersonCircle,
    IoMail,
    IoBookmarks,
    IoSettings,
    IoExit,
    IoAddCircle,
    IoNotifications,
    IoPeople
 } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../helper/db-functions';

function Navigation({show, home}) {
    let navigate = useNavigate()

    const handleLogout = () => {
        sessionStorage.clear()
        navigate('/')
    }

    return (
        <div className='nav'>
            <div className='branding'>
                <img src="https://picsum.photos/60" style={{borderRadius: "100%"}} alt="" />
                <h2>CampusGram</h2>
            </div>
            <div className='search'>
                <input type="text" placeholder='Search...' /> <IoNotifications className='mouse-pointer' size={30} style={{color:"#2CBEC8"}} /> <IoPeople className='mouse-pointer' size={30} style={{color:"#2CBEC8"}} />
            </div>
            {home && <div className='create-post'>
                <button onClick={show} className='mouse-pointer'>
                    <IoAddCircle size={25} color='white' />
                    <span>Create Post</span>
                </button>
            </div>}
            <h4>Menu</h4>
            <div className='menu'>
            
                <div className="link active" >
                    <IoHome size={24} style={{color:"#2CBEC8"}}/>
                    <a href="/home">Home</a>
                </div>
                <div className="link">
                    <IoPersonCircle size={24} style={{color:"#2CBEC8"}}/>
                    <a href="/profile">Profile</a>
                </div>
                <div className="link">
                    <IoMail size={24} style={{color:"#2CBEC8"}}/>
                    <a href="/message">Messages</a>
                </div>
                <div className="link">
                    <IoBookmarks size={24} style={{color:"#2CBEC8"}}/>
                    <a href="/save_post">Saved Post</a>
                </div>
                <div className="link">
                    <IoSettings size={24} style={{color:"#2CBEC8"}}/> 
                    <a href="/settings">Settings</a>
                </div>
                <div className="link">
                    <IoExit size={24} style={{color:"#2CBEC8"}}/>
                    <a onClick={handleLogout} href="/">Logout</a>
                </div>
            </div>
            <h4>Sponsored</h4>
            <div className='sponsor'>
            
                <img src="https://picsum.photos/230/300" alt="" />
            </div>
        </div>
    )
}

export default Navigation
