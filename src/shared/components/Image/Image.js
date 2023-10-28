import styled from "styled-components";

const ImageWrapper = styled.img`
    height: ${props => props.height}px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
`;

const defaultProps = {
    height: 200,
}

export default function Image(props){
    const mergedProps = { ...defaultProps, ...props };
    const { size, type, color, verticalGap, children } = mergedProps;
    mergedProps.instance = { ...mergedProps.instance, ...props }

    return <ImageWrapper {...mergedProps}>
    </ImageWrapper>
}