import styled from 'styled-components';
import tw from 'twin.macro';

const Content = styled.div`

`;

const Icon = styled.img`

`;

const Name = styled.p`
    ${tw`
        text-lg
        font-normal
    `}
`;

const Faction = () => {
    return(
        <Content>
            <Icon></Icon>
            <Name>
                Alliance
            </Name>
        </Content>
    );
}

export default Faction;