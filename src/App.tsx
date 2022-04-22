import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import StyledMain from './components/StyledMain/StyledMain';
import StyledButton from './components/StyledButton/StyledButton';
import AddPostForm from './components/AddPostForm/AddPostForm';
import PostsContainer from './views/PostsContainer/PostsContainer';
import RegisterForm from './views/RegisterForm/RegisterForm';
import LoginForm from './views/LoginForm/LoginForm';
import PostPage from './views/PostPage/PostPage';
import TopPostsContainer from './views/TopPosts/TopPostsContainer';
import ScrollToTop from './components/ScrollToTop';
import BackgroundMusic from './components/BackGroundMusic/BackgroundMusic';



function App() {

  const [addPost, setAddPost] = useState(false);

  //For appearing section for adding new post
  const handleAddPostAppearing = () => {
    setAddPost(!addPost);
  };

  return (
    <div className="App">
    <Router>
    <ScrollToTop />
    <TopBar />
    <Header />
    <BackgroundMusic />
    <StyledMain>
      <Routes>
        <Route path="/" element={
        <>
        <StyledButton onClick={handleAddPostAppearing}>{!addPost ? 'Dodaj wpis' : 'Ukryj'}</StyledButton>
        <AddPostForm show={addPost} />
        <PostsContainer />
        </>
        } />
        <Route path="/top" element={<TopPostsContainer />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </StyledMain>
    </Router>
    </div>
  );
}

export default App;
