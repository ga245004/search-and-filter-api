import styled from "styled-components"

const HeaderWrapper = styled.div.attrs(() => ({}))`
    font-family: 'Roboto-Medium';
    font-weight: 500;
    font-size: 28px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    color: #000000;
`;

export default function Header({ children}){
    return <HeaderWrapper>
        {children}
    </HeaderWrapper>
}