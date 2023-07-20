import { useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Item = (props) => {
    useEffect(() => {
        window.$WowheadPower.refreshLinks();
    });

    return(
        <p>
            <a href="https://www.wowhead.com/item=203460">Onyx Annulet</a>{ props.quantity ? `x${ props.quantity }` : '' }
        </p>
    );
}

export default Item;