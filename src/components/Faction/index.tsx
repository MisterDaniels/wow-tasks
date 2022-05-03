import styled from 'styled-components';
import tw from 'twin.macro';

const Content = styled.div`
    ${tw`
        w-max
        py-2
        px-6
        rounded-full
        bg-ice-white
    `}
`;

const Icon = styled.img`

`;

const Name = styled.p`
    ${tw`
        text-sm
        font-normal
        text-alliance-blue
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