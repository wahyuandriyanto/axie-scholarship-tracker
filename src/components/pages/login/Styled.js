import styled from "styled-components";

export const StyledLogin = styled.div`
    padding: 24px;
    .login-banner {
        text-align: center;
        margin-bottom: 24px;
    }
    .login-text {
        margin-bottom: 24px;
        &__title {
            font-size: 24px;
            margin-bottom: 8px;
        }
        &__desc {
            color: #7A888A;
            line-height: 24px;
        }
    }
    .form-group {
        position: relative;
        margin-bottom: 24px;
        label {
            position: absolute;
            bottom: 14px;
            display: block;
            transition: all ease .3s;
            &.active {
                color: #9a6aff;
                font-size: 10px;
                top: -7px;
            }
        }
        input {
            padding: 12px 0;
            border: none;
            border-bottom: 1px solid #DDE6EB;
            width: 100%;
            &:active,
            &:focus-visible {
                outline: none;
            } 
        }
    }
    .login-action {
        margin-top: 42px;
    }
    .btn-login {
        background-color: #9a6aff;
        color: #ffffff;
        width: 100%;
    }
    .login-divider {
        text-align: center;
        position: relative;
        margin: 24px 0;
        &::before {
            content: '';
            position: absolute;
            top: 6px;
            left: 28px;
            right: calc(50% + 28px);
            height: 1px;
            background-color: #DDE6EB;
        }
        &::after {
            content: '';
            position: absolute;
            top: 6px;
            right: 28px;
            left: calc(50% + 28px);
            height: 1px;
            background-color: #DDE6EB;
        }
    }
    .btn-google {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        background-color: transparent;
        color: #9a6aff;
        border: 1px solid #9a6aff;
        width: 100%;
        img {
            width: 16px;
        }
    }
`