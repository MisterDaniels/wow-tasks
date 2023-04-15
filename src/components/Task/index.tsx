import styled from 'styled-components';
import tw from 'twin.macro';

const Content = styled.div`
    ${tw`
        w-full
    `}
`;

const Task = ({ children }) => {
    return(
        <Content> 
            { children }
        </Content>
    );
}

export default Task;