import React from 'react'

function Story({photo,name}) {
    return (
        <div className='story mouse-pointer'>
            <div className='story-img'>
                <img src={photo} alt="" />
            </div>
            <p>{name}</p>
        </div>
    )
}

export default Story
