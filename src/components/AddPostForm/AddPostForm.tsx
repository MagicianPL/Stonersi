import React from 'react';
import StyledWrapper from './StyledWrapper';

interface IProps {
    show: boolean
}

const AddPostForm: React.FC<IProps> = ({show}) => {
    return(
        <StyledWrapper show={show}>
            <form>
                <div>
                <input type="radio" id="joint" name="possibility" value="mdnncn" checked />
                <label htmlFor="joint">Huey</label>
                </div>
                <div>
                <input type="radio" id="joint" name="possibility" value="mdnncn" checked />
                <label htmlFor="joint">Huey</label>
                </div>
            </form>
        </StyledWrapper>
    );
};

export default AddPostForm;