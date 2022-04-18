import styled from 'styled-components';

const StyledWrapper = styled.div<{isPlaying: Boolean}>`
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px;
    z-index: 15;

    & > svg {
        font-size: 45px;
        opacity: 0.6;
        transition: all 0.3s;
        cursor: pointer;
        ${({isPlaying}) => !isPlaying && "animation: 10s infinite pulse;"}
        display: block;


    &:hover {
        opacity: 1;
    }
    }

    @keyframes pulse {
        70% {
            transform: scale(1);
        }

        80% {
            transform: scale(1.1);
        }

        100% {
            transform: scale(1);
        }
    }
    `;

export default StyledWrapper;