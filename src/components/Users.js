import React, {Component} from 'react';

function Users(props) {
    return (
        <div>
            id: {props.id}
            <h3>name: {props.name} - username: {props.username} - email: {props.email}</h3>
            {/*<p>address: {props.address.street}, {props.address.suite}, {props.address.city}, {props.address.zipcode}, {props.address.geo.lat}, {props.address.geo.lng}</p>*/}
            <hr />
        </div>
    );
}

export default Users;