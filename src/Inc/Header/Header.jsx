import React from 'react'
import { Logo } from './Components/Logo'
import { Nav } from './Components/Nav'
import { HeaderWrapper } from './Style/HeaderWrapper'

export const Header = () => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav />
        </HeaderWrapper>
    )
}
