import { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Input = styled.input`
    
`;

const Checkbox = ({ onCheck = () => {} }) => {
    const [ isChecked, setIsChecked ] = useState(false);

    return(
        <Input 
            type="checkbox"
            checked={ isChecked }
            onChange={ () => { setIsChecked(!isChecked); isChecked ? onCheck() : () => {} ; } } />
    );
}

export default Checkbox;