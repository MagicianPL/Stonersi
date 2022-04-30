import React from 'react';
import { useSelector } from 'react-redux';
import StyledWrapper from './StyledWrapper';
import PostsView from './SubPages/Posts/PostsView';

const Dashboard = () => {
    const { user } = useSelector((state: any) => state.userReducer);
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
                <PostsView />
            </div>
        </StyledWrapper>
    );
};

export default Dashboard;