import React from 'react';

function Photos(props) {
    return (
        <div>
            albumId: {props.albumId} - id: {props.id}
            <h3>title: {props.title}</h3>
            <p>url: {props.url}</p>
            <p>thumbnailUrl: {props.thumbnailUrl}</p>
            <hr />
        </div>
    );
}

export default Photos;
