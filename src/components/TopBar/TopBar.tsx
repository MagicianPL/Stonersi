import React, { useEffect, useState } from 'react';
import StyledWrapper from './StyledWrapper';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getJoints } from '../../state/actions/jointsActions';
import { logoutUser } from '../../state/actions/userActions';

const TopBar = () => {

    //for setting bg on scrolling
    const [transparentTopBarBg, setTransparentTopBarBg] = useState(true);

    //handling topBar backround on scroll
    const handleTopBarBackground = () => {
        if (document.body.getBoundingClientRect().top < -45) {
            setTransparentTopBarBg(false);
        };

        if (!transparentTopBarBg) {
            if (document.body.getBoundingClientRect().top > -45) {
                setTransparentTopBarBg(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleTopBarBackground);

        return () => {
            window.removeEventListener('scroll', handleTopBarBackground);
        }
    });


    //If user is logged user is not falsy
    const { user } = useSelector((state: any) => state.userReducer);
    //Available number of joints to light
    const { joints } = useSelector((state: any) => state.availableJointsReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            const id = user._id;
            dispatch(getJoints(id));
        };
        //If user is true - so user is logged, it fetches data about available joint to light
    }, [user, dispatch]);

    const navigate = useNavigate();
    const logout = () => {
        dispatch(logoutUser());
        navigate("/");
    };

    return(
        <StyledWrapper transparent={transparentTopBarBg}>
            <ul>
                {user ?
                <>
                <li>Witaj {user.login}</li>
                <li onClick={logout}>Wyloguj</li>
                </> :
                <>
                <Link to="/login"><li>Zaloguj</li></Link>
                <Link to="/register"><li>Rejestracja</li></Link>
                </>}
            </ul>
            {user && joints !== undefined ?
                joints === 0 ?
                <p>Pozostało Ci 0 jointów do przypalenia</p>
                :
                joints === 1 ?
                <p>Pozostał Ci 1 joint do przypalenia</p>
                :
                <p>{`Pozostały Ci ${joints} jointy do przypalenia`}</p>
                : null}
        </StyledWrapper>
    )
};

export default TopBar;