import React, {useState, useEffect} from 'react';
import Navigation from '../../components/Navigation';
import Post from '../../components/Post';
import './Profile.css'
import '../../App.css'

function Profile({
    show,
    fullname = 'Juan Dela Cruz',
    address = 'Dasmariñas City, CAvite',
    about = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur adipisci non consectetur repudiandae amet cumque dolores velit vel officiis vero a, enim libero, illum laborum unde, voluptatibus harum ipsam!',
    
}) {

    
    const [details, setDetails] = useState({})
    let session = sessionStorage.length <= 0 ? false : true
    const coverPic = `url(https://picsum.photos/seed/${details.userID}2/1070/300)`
    const profilePic = `https://i.pravatar.cc/200?u=${details.userID}`

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
        <>
            <div className='wrapper'>
                <Navigation show={show}  />
                <div className="profile-wrapper">
                    <div className="profile-cover" 
                    style={{
                    background: coverPic,
                    backgroundSize: "100%",
                    backgroundPosition: "center",
                    }}>
                        {/* <img src={`https://picsum.photos/seed/${545421}1/200/200`} alt="" /> */}
                    </div>
                    <div className="profile-header">
                        <div className="picture">
                            <img src={profilePic||'https://via.placeholder.com/150'} alt="" />
                        </div>
                        <div className='profile-info'>
                            <h3>{`${details.firstname} ${details.lastname}`}</h3>
                            <p>{details.email}</p>
                            <p>{about}</p>
                        </div>
                        <div className='profile-nav'>
                            <div>
                                <div>
                                    <h4>100</h4>
                                    <p>Total Posts</p>
                                </div>
                                <div>
                                    <h4>5k</h4>
                                    <p>Followers</p>
                                </div>
                                <div>
                                    <h4>10k</h4>
                                    <p>Following</p>
                                </div>
                            </div>
                            <div className="profile-button">
                                <button>About</button>
                                <button>Edit Profile</button>
                            </div>
                        </div>
                    </div>
                    <div className="profile-posts">
                        <Post
                            profile={`https://i.pravatar.cc/50?u=${details.userID}`}
                            username={`${details.firstname} ${details.lastname}`}
                            section={""}
                            src={""}
                            description={about} />
                        <Post
                            profile={`https://i.pravatar.cc/50?u=${details.userID}`}
                            username={`${details.firstname} ${details.lastname}`}
                            section={""}
                            src={""}
                            description={about} />
                        <Post
                            profile={`https://i.pravatar.cc/50?u=${details.userID}`}
                            username={`${details.firstname} ${details.lastname}`}
                            section={""}
                            src={""}
                            description={about} />
                        <Post
                            profile={`https://i.pravatar.cc/50?u=${details.userID}`}
                            username={`${details.firstname} ${details.lastname}`}
                            section={""}
                            src={""}
                            description={about} />
                    </div>
                </div>
            </div>
        </>);
}

export default Profile;
