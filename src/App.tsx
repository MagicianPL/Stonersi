import React, { useState } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import StyledMain from './components/StyledMain/StyledMain';
import StyledButton from './components/StyledButton/StyledButton';
import StyledWrapper from './components/AddPostForm/StyledWrapper';



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
      <StyledButton onClick={handleAddPostAppearing}>{!addPost ? 'Dodaj wpis' : 'Ukryj'}</StyledButton>
      <StyledWrapper show={addPost} />
    </StyledMain>
    </>
  );
}

export default App;
