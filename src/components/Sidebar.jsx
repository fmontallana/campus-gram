import React from 'react'
import FriendLists from './FriendLists'
import SideProfile from './SideProfile'

function Sidebar() {
    return (
        <div className='sidebar'>
                <SideProfile photo="https://picsum.photos/id/237/200/200" 
                fullname = "Fernando Montallana" 
                username = "@FerMontallana"
                post = "1k"
                followers = "100k"
                following = "800" />
                <FriendLists />
        </div>
    )
}

export default Sidebar
