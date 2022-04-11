import styled from 'styled-components';
import StyledPost from '../../components/Post/StyledPost';

const StyledWrapper = styled(StyledPost)`
    & > p {
        margin-left: 0;
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