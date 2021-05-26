import "./Comment.css"
import React from 'react'



const Comment = (param) => {

    let postElement = React.createRef();

    let onAddLike = () => {
        let id = postElement.current.id;
        param.addLike(id)
    }

    return (
                    <div className="comment" id={param.id} ref={postElement}>
                        <img className="avatar" src={param.avatar} />
                        <span className="username">{param.name}</span>
                        <div className="c-text">{param.text}</div>
                        <div className="likes" onClick={onAddLike}>likes {param.likes}</div>
                    </div>

    )
}

export default Comment;
//        let count = newLikeElement.current.value;