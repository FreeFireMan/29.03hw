import React, {Component} from 'react';

function Comments(props) {
    return (
        <div>
            postId: {props.postId} - id: {props.id}
            <h3>name: {props.name} - email: {props.email}</h3>
            <p>body: {props.body}</p>
            <hr />
        </div>
    );
}

export default Comments;