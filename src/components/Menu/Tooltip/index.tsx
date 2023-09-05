import styled from 'styled-components';
import tw from 'twin.macro';

const Tooltip = (props) => {
    const Content = styled.div`
        ${tw`
            px-2
            py-1
            bg-greyish-white
            text-lighter-dark
            rounded
            text-sm
            select-none
        `}
    `;

    const Shortcut = styled.span`
        ${tw`
            ml-1
            bg-lighter-dark/10
            px-2
            py-1
            text-xs
            rounded
        `}
    `;
    
    return(
        <Content>
            { props.text }
            { props.shortcut && 
                <Shortcut>{ props.shortcut }</Shortcut> }
        </Content>
    );
}

export default Tooltip;