import styled from 'styled-components';
import StyledPost from '../../components/Post/StyledPost';

const StyledWrapper = styled(StyledPost)`
    .score {
        display: flex;
        gap: 8px;
        margin: 20px 30px 10px auto;
        font-weight: bold;
    }

    .loader {
        width: 100%;
        display: flex;
        justify-content: center;

        svg {
            stroke: green;
        }
    }
`;

export default StyledWrapper;