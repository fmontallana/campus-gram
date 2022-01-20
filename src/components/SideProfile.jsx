import React from 'react'

function SideProfile({ 
    photo, 
    fullname = "Full Name", 
    username = "username",
    post = 0,
    followers = 0,
    following = 0}) {

    return (
        <>
            <div className='side-profile'  >
                <div className='side-profile-img' >
                    <img src={photo} alt="" />
                </div>
                <h4 style={{textTransform: "capitalize"}} >{fullname}</h4>
                <p style={{marginTop:"-10px",fontSize:"15px", color:"#A19B9B"}}>{username}</p>
                <div className="profile-status">
                    <div className="profile-post">
                        <h3>{post}</h3>
                        <p style={{fontSize:"14px", color:"#A19B9B"}}>Post</p>
                    </div>
                    <div className="profile-followers">
                        <h3>{followers}</h3>
                        <p style={{fontSize:"14px", color:"#A19B9B"}}>Followers</p>
                    </div>
                    <div className="profile-following">
                        <h3>{following}</h3>
                        <p style={{fontSize:"14px", color:"#A19B9B"}}>Following</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideProfile
