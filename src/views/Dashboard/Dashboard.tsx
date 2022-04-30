import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StyledWrapper from './StyledWrapper';
import PostsView from './SubPages/PostsView/PostsView';

const Dashboard = () => {
    const { user } = useSelector((state: any) => state.userReducer);

    const [renderViewFromMenu, setRenderViewFromMenu] = useState<null | string>(null);

    //Posts
    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/posts`)
        .then(res => res.json())
        .then(data => setAllPosts(data.posts.reverse()));
    }, []);

    //For displaying right view (component) on content div when user clicks on menu
    const renderComponent = (name: string) => {
        setRenderViewFromMenu(name)
    };

    return(
        <StyledWrapper>
            <nav>
                <ul>
                    <li onClick={() => renderComponent("posts")}>Posty</li>
                    <li>XXX</li>
                    <li>XXX</li>
                </ul>
            </nav>
            <div className="content">
                <p className="greeting"><span>Co dziś działamy, {user?.login}?</span></p>
                {renderViewFromMenu === null && <p className="info">Wybierz coś z menu po lewej, Ty tu rządzisz ;)</p>}
                {renderViewFromMenu === "posts" && <PostsView posts={allPosts} />}
            </div>
        </StyledWrapper>
    );
};

export default Dashboard;