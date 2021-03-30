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
    const [button, setBtn] = useState('');

    const fetchJPH = async (btn) => {
        setBtn(btn);
        const response = await fetch(`${url}${btn}`);
        const data = await response.json();
        setState(data);
    }

    useEffect(() => {
        return () => {
            setState([]);
        };
    }, [button]);

    return (
    <div className="App">
        <button onClick={() => fetchJPH('posts')}>posts</button>
        <button onClick={() => fetchJPH('comments')}>comments</button>
        <button onClick={() => fetchJPH('albums')}>albums</button>
        <button onClick={() => fetchJPH('photos')}>photos</button>
        <button onClick={() => fetchJPH('todos')}>todos</button>
        <button onClick={() => fetchJPH('users')}>users</button>

        <Components state={state} />
    </div>
  );
}

export default App;
