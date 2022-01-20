import { collection, getDoc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';

async function useFetchPosts(id) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const getPostsRef = collection(db, 'posts')

    useEffect(() => {
        setLoading(true)
        const posts = onSnapshot(getPostsRef, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                if (id === doc.id) {
                    console.log(doc)
                    setData(...doc.data())
                    console.log(doc.data())
                }
            })
        })
        console.log(data)

    }, [id])

    return { data, loading, error };
}

export default useFetchPosts;
