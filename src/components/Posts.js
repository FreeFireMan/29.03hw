import React, {Component} from 'react';

function Posts(props) {
    return (
        <div>
            userId: {props.userId} - id: {props.id}
            <h3>title: {props.title}</h3>
            <p>body: {props.body}</p>
            <hr />
        </div>
    );
}

export default Posts;