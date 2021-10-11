import React from 'react';
import { logout } from 'utils/firebaseConfig';
import { toAbsoluteUrl } from 'utils/Helpers';
import { StyledBottomNav } from './Styled';

const BottomNav = () => {
    return (
        <StyledBottomNav>
            <button className="btn-logout" onClick={() => logout()}>
                <img src={toAbsoluteUrl('/icons/logout.png')} alt="logout" />
            </button>
        </StyledBottomNav>
    )
}

export default BottomNav
