import React, {Component} from 'react';
import Posts from "./Posts";
import Comments from "./Comments";
import Albums from "./Albums";
import Photos from "./Photos";
import Todos from "./Todos";
import Users from "./Users";

function Components(props) {
    return (
        <div>
            { props.state.map(value =>
                <Posts userId={value.userId}  id={value.id} title={value.title} body={value.body} key={value.id} />
            )}

            { props.state.map(value =>
                <Comments postId={value.postId} id={value.id} name={value.name} email={value.email} body={value.body} key={value.id} />
            )}

            { props.state.map(value =>
                <Albums userId={value.userId}  id={value.id} title={value.title} key={value.id} />
            )}

            { props.state.map(value =>
                <Photos albumId={value.albumId} id={value.id} title={value.title} url={value.url} thumbnailUrl={value.thumbnailUrl} key={value.id}/>
            )}

            { props.state.map(value =>
                <Todos userId={value.userId}  id={value.id} title={value.title} completed={value.completed} key={value.id} />
            )}

            { props.state.map(value =>
                <Users id={value.id} name={value.name} username={value.username} email={value.email} key={value.id} />
            )}
        </div>
    );
}

export default Components;