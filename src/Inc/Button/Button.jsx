import React from 'react'
import styled from 'styled-components'

export const Button = ({color,text}) => {
    return (
        <Wrapper className={`${color}`}>
            {text}
        </Wrapper>
    )
}

const Wrapper = styled.button`
    font-size:12px;
    border:0;
    padding: 8px 15px;
    border-radius:5px;
    font-weight:600;
    text-transform:uppercase;
    cursor:pointer;
    &.dark{
        color:#fff;
        background: rgb(77,76,69);
        background: linear-gradient(225deg, rgba(77,76,69,1) 10%, rgba(39,47,107,1) 33%, rgba(24,24,23,1) 90%);
    }
    &.yellow{
        color: #000;
        background: #000;
        background: rgb(209,207,53);
        background: linear-gradient(225deg, rgba(209,207,53,1) 10%, rgba(235,245,106,1) 49%, rgba(232,231,104,1) 87%);
    }
`