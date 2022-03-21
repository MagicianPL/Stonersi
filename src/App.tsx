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



function App() {

  const [addPost, setAddPost] = useState(false);

  //For appearing section for adding new post
  const handleAddPostAppearing = () => {
    setAddPost(!addPost);
  };

  return (
    <div className="App">
    <Router>
    <TopBar />
    <Header />
    <StyledMain>
      <Routes>
        <Route path="/" element={
        <>
        <StyledButton onClick={handleAddPostAppearing}>{!addPost ? 'Dodaj wpis' : 'Ukryj'}</StyledButton>
        <AddPostForm show={addPost} />
        <PostsContainer />
        </>
        } />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </StyledMain>
    </Router>
    </div>
  );
}

export default App;
