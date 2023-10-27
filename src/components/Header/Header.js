import styled from "styled-components";

const Title = styled.h1`
    background: #1c4547;
    color: white;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
`;

export default function Header({ appName }) {
    return <Title>{appName}</Title>
}