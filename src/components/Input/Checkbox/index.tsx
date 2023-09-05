import { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FaCheck } from 'react-icons/fa';
import tailwindConfig from '../../../../tailwind.config';
import { TaskEdit } from '../../';

const Content = styled.div`
    ${tw`
        w-full
        px-7
        py-4
        border
        rounded-lg
        relative
        flex
    `}
    background-color: ${ props => props.theme.extend.colors['almost-dark'] };
    border-color: ${ props => props.isChecked ? props.theme.extend.colors['green-check'] : props.theme.extend.colors['lighter-dark'] }
`;

const CustomCheckbox = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  margin-top: 2px;
`;

const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: 1px solid ${ props => (props.isChecked ? props.theme.extend.colors['green-check'] : props.theme.extend.colors['lighter-dark']) };
  border-radius: 5px;
`;

const CheckmarkIcon = styled.span`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 3px;
  left: 3px;
  width: 11px;
  height: 11px;
  display: ${props => (props.isChecked ? 'flex' : 'none')};
`;

const Menu = styled.div`
    ${tw`
        absolute
        right-0
        bottom-0
        px-7
        py-4
    `}
`;

const Checkbox = ({children, props}) => {
    const [ isChecked, setIsChecked ] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    return(
        <Content isChecked={ isChecked }>
            <CustomCheckbox
                type="checkbox"
                id="meuCheckbox"
                isChecked={ isChecked }
                onChange={ handleChange }
            />
            <StyledLabel htmlFor="meuCheckbox">
                <Checkmark isChecked={ isChecked } />
                <CheckmarkIcon isChecked={ isChecked }>
                    <FaCheck size={ 8 } color={ tailwindConfig.theme.extend.colors['green-check'] } />
                </CheckmarkIcon>
            </StyledLabel>
            { children }
            <Menu>
                <TaskEdit />
            </Menu>
        </Content>
    );
}

export default Checkbox;