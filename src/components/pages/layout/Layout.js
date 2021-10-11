import React from 'react';
import GlobalStyled from './globalStyled';
import { StyledLayout } from './Styled';

const Layout = ({ children }) => {
    return (
        <StyledLayout>
            {children}
            <GlobalStyled />  
        </StyledLayout>
    )
}

export default Layout
