import React, { useState } from 'react';
import './App.css';
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

  const handleAddPostAppearing = () => {
    setAddPost(!addPost);
  };

  return (
    <>
    <TopBar />
    <Header />
    <StyledMain>
      {/*<StyledButton onClick={handleAddPostAppearing}>{!addPost ? 'Dodaj wpis' : 'Ukryj'}</StyledButton>
      <AddPostForm show={addPost} />
  <PostsContainer />
      <RegisterForm />*/}
      <LoginForm />
    </StyledMain>
    </>
  );
}

export default App;
