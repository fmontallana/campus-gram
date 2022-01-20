import React, { useEffect, useState } from 'react'
import './CreatePost.css'
import { MdAddPhotoAlternate } from 'react-icons/md'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db, storage } from '../firebase-config'
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'


function CreatePost() {
    const [textInput, setTextInput] = useState('')
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [uploadLoading, setUploadLoading] = useState(false)
    const [image, setImage] = useState(null)
    const [fileURL, setFileURL] = useState('')
    const [downloadURL, setDownloadURL] = useState('')
    // let imageURL
    // let newFileURL
    const postRef = collection(db, 'posts')
    const fileRef = ref(storage, fileURL)

    const newPost = async () => {
        uploadPhoto()
        const data = {
            timestamp: new serverTimestamp(),
            poster: id,
            name: name,
            postText: textInput,
            // img: `https://picsum.photos/seed/${Date.now()}/400/300`
            img: downloadURL
        }
        await addDoc(postRef, data)
        
    }

    const handleText = (e) => {
        setTextInput(e.target.value)
    }

    const handleFile = (e) => {
        // if (e.target.files[0] === 0) return
        console.log("handle file start")
        setFileURL(`posts/${id}+${Date.now()}+${e.target.files[0].name}`)
        sessionStorage.setItem('imageURL', JSON.stringify({imgURL: [e.target.files[0]]}))
        setImage(prev => prev = e.target.files[0])
        console.log(e.target.files[0].name)

    }

    const uploadPhoto = async () => {
        console.log("upload" + image)
        const metadata = {
            contentType: image.type
        }
        setUploadLoading(true)
        const snapshot = await uploadBytes(fileRef, image, metadata)
            .then(() => {
                getDownloadURL(fileRef).then((url) => setDownloadURL(url))
            })
        console.log(downloadURL)
        setUploadLoading(false)
    }

    useEffect(() => {
        if (sessionStorage.length > 0) {
            setId(JSON.parse(sessionStorage.getItem('user')).userID)
            setName(`${JSON.parse(sessionStorage.getItem('user')).firstname} 
            ${JSON.parse(sessionStorage.getItem('user')).lastname}
            `)
        }

    }, [])

    return (
        <div className='new-post'>
            <form onSubmit={(e) => e.preventDefault()} action="" method="post">
                <textarea onChange={handleText} name="" id="" rows="5" autoCapitalize='sentence' placeholder="What's on your mind?"></textarea>
                <input onChange={handleFile} type="file" name="file" id="file" />
                <div>
                    <label htmlFor="file"><MdAddPhotoAlternate color={"#22c1e2"} size={35} /> </label>
                    <button onClick={newPost} type="submit">Post</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost
