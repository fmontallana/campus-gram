import { useState } from "react"

export const HandleShowCreatePost = () => {
    const [showCreatePost, setShowCreatePost] = useState(false)

    function show () {
        setShowCreatePost(prev => !prev)
    }

    return {showCreatePost, setShowCreatePost, show}
}