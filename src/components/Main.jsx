import React from 'react'
import useFetchPosts from '../helper/useFetchPosts'
import CreatePost from './CreatePost'
import NewsFeed from './NewsFeed'
import Stories from './Stories'

function Main({showCreatePost }) {


    return (
        <div className='main'>
            <Stories />
            {showCreatePost && <CreatePost />}
            <div className="feedsFilter">
                <p>Feeds</p>
                <span>
                    <p className='mouse-pointer' >All</p>
                    <p className='mouse-pointer' >Popular</p>
                    <p className='mouse-pointer' >Following</p>
                </span>
            </div>
            <NewsFeed/>
        </div>
    )
}

export default Main
