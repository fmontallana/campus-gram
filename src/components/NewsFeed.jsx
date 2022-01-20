import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { db, storage } from "../firebase-config";
import { useGetPost, useLogin } from "../helper/db-functions";
import useFetchPosts from "../helper/useFetchPosts";
import Post from "./Post";

function NewsFeed() {
    const postRef = collection(db, 'posts')
    // const [postList, setPostList] = useState({})
    const { isAuth } = useLogin()
    let session = sessionStorage.length <= 0 ? false : true
    // const { postList, getPosts } = useGetPost()
    // const { data, loading, error } = useFetchPosts('bGtQCqlBBk9qoewWL9jJ')


    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [imgURL, setImgURL] = useState(null)

    const getPostsRef = collection(db, 'posts')

    const getPosts = async ()=> {

        const q = query(getPostsRef, orderBy("timestamp", "desc"));
        const posts = await onSnapshot(q, (snapshot) => {
         const snapshots = snapshot.docs.map((doc) => ({...doc.data()}))
        console.log(snapshots)
        setData(snapshots)
        })
    }

    
    const getImgURL = async (img) => {
        const imageRef = ref(storage, img)
        const photo = await getDownloadURL(imageRef)
        return photo
    }

    useEffect(() => {
        setLoading(true)
        getPosts()
        setLoading(false)
    }, [session])

    if (loading) return (
        <div className="newsfeed">
            Loading....
        </div>
    )

    if (error) console.log(error)



    return (
        <div className="newsfeed">
            {
                data?.map((post,index)=>{
                    return (
                        <>
                            <Post
                                key={index}
                                profile={`https://i.pravatar.cc/50?u=${post.poster}`}
                                username={post.name}
                                section={""}
                                src={post.img}
                                description={post.postText} />
                        </>
                    )
                })
            }
        </div>
    );
}

export default NewsFeed;
