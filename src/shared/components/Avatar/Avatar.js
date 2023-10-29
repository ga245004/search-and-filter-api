import styled from "styled-components";

const AvatarWrapper = styled.span`
    width: ${props => props.instance.width - 4}px;
    height : ${props => props.instance.height - 4}px;
    border-radius: 50px;
    background-color: ${props => props.instance.backgroundColor};
    ${props => props.shift ? `margin-top: ${props.shift};`:``}
    
    border-width: 2px;
    border-color: ${props => props.instance.borderColor};
    border-style: solid;
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0px 0px 0px ${props => props.instance.innerCircleWidth}px ${props => props.instance.innerCircleColor};
`;


const Image = styled.span`
    ${props => props.instance.imagePath ? `
    background-image: url("${props.instance.imagePath}");
    ` : ""}
    background-size: cover;
    background-position: center center;
    width: ${props => props.instance.width - 4 - (props.instance.innerCircleWidth * 1.8)}px;
    height : ${props => props.instance.height - 4 - (props.instance.innerCircleWidth * 1.8)}px;
    border-radius: 50px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`

const AvatarOnlineWrapper = styled.span`
    position: absolute;
    bottom: 0px;
    right: ${props => props.instance.width / 10}px;
    background-color: #5DCA07;
    width: ${props => props.instance.onlineWidth - (props.instance.onlineBorderWidth * 2)}px;
    height: ${props => props.instance.onlineHeight - (props.instance.onlineBorderWidth * 2)}px;
    border-color: #FFFFFF;
    border-width: ${props => props.instance.onlineBorderWidth}px;
    border-radius: 20px;
    border-style: solid;
`;

const defaultProps = {
    instance: {
        width: 60,
        height: 60,
        backgroundColor: "#d3d3d34a",
        borderColor: "transparent",
        onlineWidth: 13,
        onlineHeight: 13,
        innerCircleColor: "#FFFFFF",
        innerCircleWidth: 5,
        onlineBorderWidth: 2,
        imagePath: ""
    },
    size: "md",
    outline: false,
    online: false,
}

export default function Avatar(props) {
    const mergedProps = { ...defaultProps, ...props };
    const { size, outline, online, image } = mergedProps;
    if (image) {
        const imagePath = `${image}`
        mergedProps.instance = {
            ...mergedProps.instance,
            imagePath,
        }
    }

    if (outline) {
        mergedProps.instance = {
            ...mergedProps.instance,
            borderColor: "#000000",
        }
    }

    if (size === "xs") {
        mergedProps.instance = {
            ...mergedProps.instance,
            width: 30,
            height: 30,
            onlineWidth: 7,
            onlineHeight: 7,
            onlineBorderWidth: 1,
            innerCircleWidth: 2,
        }
    }

    if (size === "sm") {
        const { backgroundColor, color } = mergedProps.instance;
        mergedProps.instance = {
            ...mergedProps.instance,
            width: 40,
            height: 40,
            onlineWidth: 7,
            onlineHeight: 7,
            onlineBorderWidth: 1,
            innerCircleWidth: 3,
        }
    }

    if (size === "lg") {
        const { backgroundColor, color } = mergedProps.instance;
        mergedProps.instance = {
            ...mergedProps.instance,
            width: 80,
            height: 80,
            onlineWidth: 16,
            onlineHeight: 16,
            innerCircleWidth: 3,
        }
    }
    if (size === "xl") {
        const { backgroundColor, color } = mergedProps.instance;
        mergedProps.instance = {
            ...mergedProps.instance,
            width: 100,
            height: 100,
            onlineWidth: 23,
            onlineHeight: 23,
            onlineBorderWidth: 3,
        }
    }

    const { backgroundColor, borderColor, innerCircleColor } = props;
    if (backgroundColor) {
        mergedProps.instance = {
            ...mergedProps.instance, backgroundColor,
        }
    }
    if (borderColor) {
        mergedProps.instance = {
            ...mergedProps.instance, borderColor,
        }
    }
    if (innerCircleColor) {
        mergedProps.instance = {
            ...mergedProps.instance, innerCircleColor,
        }
    }

    return (
        <AvatarWrapper {...mergedProps}>
            {online && <AvatarOnlineWrapper {...mergedProps} />}
            <Image {...mergedProps} />
        </AvatarWrapper>
    )
}