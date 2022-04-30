import React from 'react';
import { useSelector } from 'react-redux';
import StyledWrapper from './StyledWrapper';

const Dashboard = () => {
    const { user } = useSelector((state: any) => state.userReducer);
    return(
        <StyledWrapper>
            <nav>
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            </nav>
            <div className="content">
                <p className="greeting">Co dziś działamy, {user?.login}?</p>
            </div>
        </StyledWrapper>
    );
};

export default Dashboard;