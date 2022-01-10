import siteLogo from '../../../Assets/Images/cartobike.png';

import React from 'react'
import styled from 'styled-components';

export const Logo = () => {
    return (
        <Wrapper>
            <img src={siteLogo} alt="sideLogo"/>
            <span>CartoBike</span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display:flex;
    img{
        align-self: center;
        margin-right: 10px;
    }
    span{
        align-self: center;
        color:#524696;
        display:inline-block;
        font-weight: 600;
        font-size: 25px;
    }
`;