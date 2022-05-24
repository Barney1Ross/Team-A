
import './App.css';
import Navbar from './components/Navbar';
import Context from './Global/Context';
import Model from './components/Model';
import Stories from './components/Stories';
import Create from './components/Create';
import { useState } from 'react';
import Post from './components/Post';
import { db } from './config';
import { useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, [posts]);
  return (
    <div>
      <Context>
      <Navbar/>
      <div className="container">
      <Stories/>
      <Create/>
      </div>
      <Model/>
      </Context>
      {
        posts.map(({ id, post }) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  );
}

export default App;
