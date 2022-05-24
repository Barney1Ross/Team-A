import React from 'react'
import './Post.css';
import { Avatar } from '@material-ui/core';
function Post({username, caption, imageUrl}) {
  return (
    <div className="post">
        <div className="post__header">
        </div>
        <Avatar 
            className="post__avatar"
            alt = {username}
            src = "sadas"
        />
        <h3> {username} </h3>
        
        <img className="post__image" src = {imageUrl} />
        
        <h4 className="post__text"><strong>{username}</strong>{caption}</h4>
    </div>
  )
}

export default Post