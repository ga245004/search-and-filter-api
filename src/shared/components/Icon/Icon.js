import styled from "styled-components";
import * as Io5Icon from "react-icons/io5";
import Text from "../Text/Text";

const IconTextWrapper = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

const IconWrapper = styled.span`
    height: ${props => props.instance.height - props.instance.padding * 2}px;
    width: ${props => props.text ? "auto" : `${props.instance.width - props.instance.padding * 2}px`};
    border-radius: 50px;    
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: ${props => props.instance.padding}px;
    gap: 5px;
    color: ${props => props.instance.color};
    background-color: ${props => props.instance.backgroundColor};
    transform: rotate(${props => props.rotate ? props.rotate : 0}deg);
    svg{
        width: ${props => props.instance.width - props.instance.padding * 2}px;
        height: ${props => props.instance.height - props.instance.padding * 2}px;
    }
    &:hover {
        background-color: rgb(0 0 0 / 15%);
    }
`;

const defaultProps = {
    instance: {
        backgroundColor: "transparent",
        color: "#000000",
        actionColor : "#F2F2F2",
        padding : 10,
        height : 40,
        width: 40,
    },
    contained : false,
    containedText : true,
}

export default function Icon(props) {
    const mergedProps = { ...defaultProps, ...props };
    const { size, contained, containedText, name, text } = mergedProps;
    mergedProps.instance = { ...mergedProps.instance, ...props };
    const IconName = Io5Icon[name] ? Io5Icon[name] : Io5Icon[`Io${name}`] ? Io5Icon[`Io${name}`] : () => <></>

    const customPad = props.padding ? props.padding : "";
    
    if (size === "sm") {
        const { backgroundColor, color } = mergedProps.instance;
        const {width , height} = props;
        mergedProps.instance = {
            ...mergedProps.instance,
            padding: customPad || customPad === 0 ? customPad : 8,
            height : width ? width : 30,
            width: height ? height : 30,
        }
    }
    if (size === "lg") {
        const { backgroundColor, color } = mergedProps.instance;
        mergedProps.instance = {
            ...mergedProps.instance,
            padding: customPad ? customPad :10,
            height : 50,
            width: 50,
        }
    }
    if (size === "xl") {
        const { backgroundColor, color } = mergedProps.instance;
        mergedProps.instance = {
            ...mergedProps.instance,
            padding: customPad ? customPad :15,
            height : 60,
            width: 60,
        }
    }

    if (contained) {
        const { backgroundColor, color } = mergedProps.instance;
        mergedProps.instance = {
            ...mergedProps.instance,
            backgroundColor: "#F2F2F2",
        }
    }

    return (
        <IconTextWrapper>
            <IconWrapper {...mergedProps}>
                <IconName />
                {containedText && text && <Text fillItemSelf={true}>{text}</Text>}
            </IconWrapper>
            {!containedText && text && <Text>{text}</Text>}
        </IconTextWrapper>
    )
}