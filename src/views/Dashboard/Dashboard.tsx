import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StyledWrapper from './StyledWrapper';
import PostsView from './SubPages/Posts/PostsView';

const Dashboard = () => {
    const { user } = useSelector((state: any) => state.userReducer);

    //Posts
    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/posts`)
        .then(res => res.json())
        .then(data => setAllPosts(data.posts.reverse()));
    }, []);
    console.log(allPosts);

    return(
        <StyledWrapper>
            <nav>
                <ul>
                    <li>Posty</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            </nav>
            <div className="content">
                <p className="greeting"><span>Co dziś działamy, {user?.login}?</span></p>
                <PostsView posts={allPosts} />
            </div>
        </StyledWrapper>
    );
};

export default Dashboard;