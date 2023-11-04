import styled from "styled-components"
import Text from "../Text/Text";

const BadgeWrapper = styled.div`
    ${props => !props.noPadding ? `
    padding: ${ props.verticalPadding - 2}px ${props.horizontalPadding - 2}px;
    `: ''}
    border-width: 2px;
    border-color: ${props => props.borderColor};
    border-style: solid;
    border-radius: ${props => props.borderRadius}px;
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
`;

const defaultProps = {
    verticalPadding: 5,
    horizontalPadding: 15,
    fontSize: 13,
    color: "#000000",
    backgroundColor: "transparent",
    borderColor: "#000000",
    borderRadius: 5,
    type: "Contained",
    pill: false
}

export default function Badge(props) {
    let mergedProps = { ...defaultProps, ...props };
    const { type, pill, label, noPadding = false, upperCase, lowerCase } = mergedProps;
    let renderedLabel = label;
    const customColor = props.color ? props.color : "";
    if(upperCase && renderedLabel){
        renderedLabel = renderedLabel.toUpperCase();
    }

    if(lowerCase && renderedLabel){
        renderedLabel = renderedLabel.toUpperCase();
    }

    if (type === "Contained") {
        const { backgroundColor, color } = mergedProps;
        const {backgroundColor : backgroundColorProps} = props;
        mergedProps = {
            ...mergedProps,
            backgroundColor: backgroundColorProps ? backgroundColorProps : color,
            borderColor:  backgroundColorProps ? backgroundColorProps : color,
            color: customColor ? customColor : "#FFFFFF",
        }
    }


    if (pill) {
        mergedProps = {
            ...mergedProps,
            borderRadius: 50,
        }
    }

    return <BadgeWrapper {...mergedProps}>
        <Text fontVariant="Medium" fontSize={12} color={mergedProps.color}>{renderedLabel}</Text>
    </BadgeWrapper>
}