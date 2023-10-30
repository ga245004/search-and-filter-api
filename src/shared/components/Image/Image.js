import styled from "styled-components";
import useDropShadow from "../../utils/useDropShadow";

const ImageWrapper = styled.img`
    ${useDropShadow}
    ${props => props.fillItemSelf ? "flex : 1;" : ""} 
    height: ${props => props.height}px;
    width: ${props => props.width ? `${props.width}px` : '100%'};
    display: flex;
    align-items: center;
    justify-content: center;
    object-fit: cover;
    object-position: 50% 50%;
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.isCircle ? props.height : 0}px;
`;

const defaultProps = {
    height: 200,
    backgroundColor: "transparent",
}

export default function Image(props) {
    const mergedProps = { ...defaultProps, ...props };
    const { size, type, color, filename, children } = mergedProps;
    let { src } = mergedProps;
    mergedProps.instance = { ...mergedProps.instance, ...props };
    if (filename) {
        src = `${process.env.PUBLIC_URL}/images/${filename}`;
    }

    return <ImageWrapper {...mergedProps} {...{ src }} >
    </ImageWrapper>
}