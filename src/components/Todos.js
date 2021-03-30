import React, {Component} from 'react';

function Todos(props) {
    return (
        <div>
            userId: {props.userId} - id: {props.id}
            <h3>title: {props.title}</h3>
            <p>completed: {props.completed}</p>
            <hr />
        </div>
    );
}

export default Todos;