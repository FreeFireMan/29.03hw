import React, {useState, useEffect} from 'react';
import './App.css';
import Components from "./components/Components";

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
    const [button, setBtn] = useState('posts');

    useEffect(() => {
        fetch(`${url}${button}`)
            .then(res => res.json())
            .then(data=>setState(data))
    }, [button]);

    return (
    <div className="App">
        <button onClick={() => setBtn('posts')}>posts</button>
        <button onClick={() => setBtn('comments')}>comments</button>
        <button onClick={() => setBtn('albums')}>albums</button>
        <button onClick={() => setBtn('photos')}>photos</button>
        <button onClick={() => setBtn('todos')}>todos</button>
        <button onClick={() => setBtn('users')}>users</button>

        <Components state={state} button={button} />
    </div>
  );
}

export default App;
