import styled from "styled-components"
import Text from "../Text/Text";

const BadgeWrapper = styled.div`
    padding: ${props => props.instance.verticalPadding - 2}px ${props => props.instance.horizontalPadding - 2}px;
    border-width: 2px;
    border-color: ${props => props.instance.borderColor};
    border-style: solid;
    border-radius: ${props => props.instance.borderRadius}px;
    color: ${props => props.instance.color};
    background-color: ${props => props.instance.backgroundColor};
`;

const defaultProps = {
    instance: {
        verticalPadding: 5,
        horizontalPadding: 15,
        fontSize: 13,
        color : "#000000",
        backgroundColor : "transparent",
        borderColor : "#000000",
        borderRadius: 5,
    },
    type : "Contained",
    pill : false
}

export default function Badge(props){
    const mergedProps = {...defaultProps , ...props};
    const { type, pill, label } = mergedProps;

    if (type === "Contained") {
        const { backgroundColor, color} = mergedProps.instance;
        mergedProps.instance = {
            ...mergedProps.instance,
            backgroundColor: color,
            color: "#FFFFFF",
        }
    }


    if (pill) {
        mergedProps.instance = {
            ...mergedProps.instance,
            borderRadius: 50,
        }
    }

    return <BadgeWrapper {...mergedProps}>
        <Text fontVariant="Medium" fontSize={12} color={ mergedProps.instance.color}>{label}</Text>
    </BadgeWrapper>
}