import styled from 'styled-components';
import tw from 'twin.macro';
import { ReactSVG } from 'react-svg';

const Content = styled.div`
    ${tw`
        flex
        w-max
        py-2
        px-6
        rounded-full
        bg-ice-white
        select-none
    `}
`;

const Icon = styled(ReactSVG)<{ $faction?: string; }>`
    ${tw`
        pr-1
    `}
    svg {
        width: 20px;
        height: 20px;
    }
    g {
        fill: ${ props => props.theme.extend.colors[ props.$faction === 'alliance' ? 'alliance-blue' : 'horde-red' ] };
    }
`;

const Name = styled.p<{ $faction?: string; }>`
    ${tw`
        text-sm
        font-normal
        capitalize
    `}
    color: ${ props => props.theme.extend.colors[ props.$faction === 'alliance' ? 'alliance-blue' : 'horde-red' ] }
`;

const Faction = ({ name }: { name: string }) => {
    return(
        <Content>
            <Icon $faction={ name } src={ `/assets/${ name }.svg` } />
            <Name $faction={ name } >
                { name }
            </Name>
        </Content>
    );
}

export default Faction;