import React from 'react'
import { IoEllipsisVertical } from "react-icons/io5";


function FriendList({name="Fullname", username="@username", photo}) {
    return (
        <div className='friend-list'>
            <img src={photo} alt="" />
            <h4>{name}</h4>
            <p>{username}</p>
            <IoEllipsisVertical className='dots mouse-pointer' />
        </div>
    )
}

export default FriendList
