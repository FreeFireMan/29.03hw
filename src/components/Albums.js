import React, {Component} from 'react';

function Albums(props) {
    return (
        <div>
            userId: {props.userId} - id: {props.id}
            <h3>title: {props.title}</h3>
            <hr />
        </div>
    );
}

export default Albums;