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
    height: calc(40px - 20px);
    width: ${props => props.text ? "auto" : "calc(40px - 20px)"};
    border-radius: 50px;    
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: ${props => props.instance.padding}px;
    gap: 5px;
    color: ${props => props.instance.color};
    background-color: ${props => props.instance.backgroundColor};
    svg{
        width: calc(40px - ${props => props.size == "sm" ? 20 + props.instance.padding : 20}px);
        height: calc(40px - ${props => props.size == "sm" ? 20 + props.instance.padding: 20}px);
    }
    &:hover {
        background-color: ${props => props.instance.actionColor};
    }
`;

const defaultProps = {
    instance: {
        backgroundColor: "transparent",
        color: "#000000",
        actionColor : "#F2F2F2",
        padding : 10,
    },
    contained : false,
    containedText : true,
}

export default function Icon(props) {
    const mergedProps = { ...defaultProps, ...props };
    const { size, contained, containedText, name, text } = mergedProps;

    const IconName = Io5Icon[name] ? Io5Icon[name] : Io5Icon[`Io${name}`] ? Io5Icon[`Io${name}`] : () => <></>
    
    if (size == "sm") {
        const { backgroundColor, color } = mergedProps.instance;
        mergedProps.instance = {
            ...mergedProps.instance,
            padding: 5,
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