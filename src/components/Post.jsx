import React from "react";
import { IoHeart, IoChatboxOutline, IoBookmarkOutline, IoEllipsisVertical } from "react-icons/io5";

function Post({ profile, username, section, description, photo }) {
    return (
        <div className="post">

            <div className="post-header">
                <img className="mouse-pointer" src={profile} alt="" style={{borderRadius: "100%"}}/>
                <div className="post-header-name" style={{maxWidth:"210px"}}>
                    <p className="mouse-pointer" style={{whiteSpace:"nowrap", overflowX:"hidden", textOverflow:"ellipsis"}}>@{username}</p>
                    <p>{section}</p>
                    <p>10 mins ago.</p>
                </div>
                <IoEllipsisVertical className="mouse-pointer" />
            </div>
            <div className="description">
                <div className="post-img">
                <img src={photo} alt="" />
                </div>
                
                <div className="post-text">
                {description}
                </div>
            </div>
            <div className="post-footer">
                <IoHeart className="mouse-pointer" size={25} color="#FF5775" />
                <span>2  </span>
                <IoChatboxOutline className="mouse-pointer" size={25} />
                <span>2</span>
                <IoBookmarkOutline className="mouse-pointer" size={25} />
            </div>
            <p>Like by <b className="mouse-pointer">@asdfae</b>  and <b className="mouse-pointer">2 others.</b> </p>
            
        </div>
    );
}

export default Post;
