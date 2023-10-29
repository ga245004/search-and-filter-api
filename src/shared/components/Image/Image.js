import styled from "styled-components";

const ImageWrapper = styled.img`
    ${props => props.fillItemSelf ? "flex : 1;" : ""} 
    height: ${props => props.height}px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    background-color: ${props => props.backgroundColor}
`;

const defaultProps = {
    height: 200,
    backgroundColor : "transparent",
}

export default function Image(props){
    const mergedProps = { ...defaultProps, ...props };
    const { size, type, color, verticalGap, children } = mergedProps;
    mergedProps.instance = { ...mergedProps.instance, ...props }

    return <ImageWrapper {...mergedProps}>
    </ImageWrapper>
}