import styled from 'styled-components';
import tw from 'twin.macro';

const Content = styled.div`
    ${tw`
        w-full
        px-7
        py-4
        border
        rounded-lg
    `}
    background-color: ${ props => props.theme.extend.colors['almost-dark'] };
    border-color: ${ props => props.isChecked ? props.theme.extend.colors['green-check'] : props.theme.extend.colors['lighter-dark'] }
`;

const Task = ({ children, props }) => {
    return(
        <Content> 
            { children }
        </Content>
    );
}

export default Task;