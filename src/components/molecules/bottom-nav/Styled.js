import styled from "styled-components";

export const StyledBottomNav = styled.div`
    max-width: 30rem;
    width: 100%;
    height: 44px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-top: 1px solid #DDE6EB;
    .btn-logout {
        box-shadow: 0 8px 24px rgb(0 0 0 / 16%);
        background-color: #ffffff;
        border-radius: 100%;
        width: 56px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        padding: 0;
    }
`