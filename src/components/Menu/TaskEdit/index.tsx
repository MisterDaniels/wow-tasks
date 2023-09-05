import { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BiSolidCopy, BiSolidTrashAlt, BiSolidEdit } from 'react-icons/bi';
import tailwindConfig from '../../../../tailwind.config';
import Tooltip from '../Tooltip';

const TaskEdit = () => {
    const [ isTooltipVisible, setIsTooltipVisible ] = useState(false);
    const [ tooltipText, setTooltipText ] = useState('Edit');
    const [ tooltipShortcut, setTooltipShortcut ] = useState('⏎');

    const Content = styled.div`
        ${tw`
            flex
        `}

        ::before {
            ${tw`
                mr-2
                bg-lighter-dark
            `}
            content: '';
            width: 1px;
        }
    `;

    const ActionButton = styled.button`
        ${tw`
            p-1
            hover:bg-selection-blue
        `}
    `;

    const Hover = styled.div`
        ${tw`
            absolute
            whitespace-nowrap
        `}
        top: -22px;
        margin-left: -25%;
    `;

    const showTooltip = (text = 'Edit', shortcut = null) => {
        setTooltipText(text);
        setTooltipShortcut(shortcut);
        setIsTooltipVisible(true);
    };

    const hideTooltip = () => {
        setIsTooltipVisible(false);
    }

    return(
        <Content>
            <ActionButton onMouseEnter={ () => { showTooltip('Edit task', 'E') } } onMouseLeave={ hideTooltip }>
                <BiSolidEdit size={ 20 } color={ tailwindConfig.theme.extend.colors['ice-white'] } />
            </ActionButton>
            <ActionButton onMouseEnter={ () => { showTooltip('Duplicate task', 'D') } } onMouseLeave={ hideTooltip }>
                <BiSolidCopy size={ 20 } color={ tailwindConfig.theme.extend.colors['ice-white'] } />
            </ActionButton>
            <ActionButton onMouseEnter={ () => { showTooltip('Delete task', 'Del') } } onMouseLeave={ hideTooltip }>
                <BiSolidTrashAlt size={ 20 } color={ tailwindConfig.theme.extend.colors['red-highlight'] } />
            </ActionButton>
            { isTooltipVisible && 
                <Hover><Tooltip text={ tooltipText } shortcut={ tooltipShortcut } /></Hover> }
        </Content>
    );
}

export default TaskEdit;