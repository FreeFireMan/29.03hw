import React, {useState, useEffect} from 'react';
import './App.css';
import Posts from "./components/Posts";
import Comments from './components/Comments';
import Albums from "./components/Albums";
import Photos from "./components/Photos";
import Todos from "./components/Todos";
import Users from "./components/Users";

/* https://jsonplaceholder.typicode.com/
ендпоінти:
/posts
/comments
/albums
/photos
/todos
/users

потрібно створити логіку, яка задовільнить наступні вимоги:
в нас має бути 6 кнопок, які дозволяють нам переключатись між 'табами' (posts, comments, albums, photos, todos, users)
дефолтно обрана таба- пости
по кліку на кнопку ми повинні підтягнути відповідний список і зрендерити його через .map
лише 1 список видимий одночасно
потрібно створити 6 компонент, які займатимуться рендерінгом списків (отримуватимуть пропсами список)- PostList, CommentsList...*/
const url = 'https://jsonplaceholder.typicode.com/';

function App() {
    const [state, setState] = useState([]);
    const [btn, setBtn] = useState('');

    const fetchJPH = async (btn) => {
        setBtn(btn);
        const response = await fetch(`${url}${btn}`);
        const data = await response.json();
        setState(data)
    }

    useEffect(() => {
        return () => {
            setState([]);
        };
    }, [btn]);

    return (
    <div className="App">
      <button onClick={() => fetchJPH('posts')}>posts</button>
      <button onClick={() => fetchJPH('comments')}>comments</button>
      <button onClick={() => fetchJPH('albums')}>albums</button>
      <button onClick={() => fetchJPH('photos')}>photos</button>
      <button onClick={() => fetchJPH('todos')}>todos</button>
      <button onClick={() => fetchJPH('users')}>users</button>

        { state.map(value =>
            <Posts userId={value.userId}  id={value.id} title={value.title} body={value.body} key={value.id} />
        )}

        { state.map(value =>
            <Comments postId={value.postId} id={value.id} name={value.name} email={value.email} body={value.body} key={value.id} />
        )}

        {state.map(value =>
            <Albums userId={value.userId}  id={value.id} title={value.title} key={value.id} />
        )}

        {state.map(value =>
            <Photos albumId={value.albumId} id={value.id} title={value.title} url={value.url} thumbnailUrl={value.thumbnailUrl} key={value.id}/>
        )}

        {state.map(value =>
            <Todos userId={value.userId}  id={value.id} title={value.title} completed={value.completed} key={value.id} />
        )}

        {state.map(value =>
            <Users id={value.id} name={value.name} username={value.username} email={value.email} key={value.id} />
        )}
    </div>
  );
}

export default App;
