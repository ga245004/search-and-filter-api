import styled, { ThemeProvider, useTheme } from "styled-components"

// Define our button, but with the use of props.theme this time
const ButtonWrapper = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;

    margin: 0px;
    padding: calc(${props => props.instance.verticalPadding}px - ${props => props.instance.borderWidth}px) calc(${props => props.instance.horizontalPadding}px - ${props => props.instance.borderWidth}px);
    border-radius: ${props => props.instance.borderRadius}px;

    /* Color the border and text with theme.main */
    color: ${props => props.instance.color};
    background-color: ${props => props.instance.backgroundColor};
    border: ${props => props.instance.borderWidth}px solid ${props => props.instance.borderColor};
`;

const TextWrapper = styled.label`
    font-family: 'Roboto-Bold';
    font-size: ${props => props.instance.fontSize}px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    color: inherit;
    letter-spacing: ${props => props.instance.letterSpacing}px;
`;

const defaultProps = {
    instance: {
        backgroundColor: "#272829",
        color: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#272829",
        borderRadius: 4,
        horizontalPadding: 16,
        verticalPadding: 12,
        fontSize: 13,
        letterSpacing: 1.08
    },
    size: "md",
    type: "Contained",
    color: "Default"
}

export default function Button(props) {

    const mergedProps = { ...defaultProps, ...props };
    const { size, type, color, label, upperCase, lowerCase, children } = mergedProps;
    if (color != "Default") {
        mergedProps.instance.button = {
            backgroundColor: color,
            color: "#FFFFFF"
        }
    }

    if (size === "sm") {
        mergedProps.instance = {
            ...mergedProps.instance,
            verticalPadding: 9,
            fontSize: 11,
            letterSpacing: 0.8
        }
    }

    if (size === "lg") {
        mergedProps.instance = {
            ...mergedProps.instance,
            horizontalPadding: 20,
            verticalPadding: 16,
            fontSize: 15,
            letterSpacing: 1.08
        }
    }

    if (type === "Outline") {
        const { backgroundColor, color } = mergedProps.instance;
        mergedProps.instance = {
            ...mergedProps.instance,
            backgroundColor: 'transparent',
            color: backgroundColor,
            borderWidth: 2,
            borderColor: backgroundColor
        }
    }

    if (type === "Pill") {
        mergedProps.instance = {
            ...mergedProps.instance,
            borderRadius: 50
        }
    }

    if (type === "Outline-pill") {
        const { backgroundColor, color } = mergedProps.instance;
        mergedProps.instance = {
            ...mergedProps.instance,
            backgroundColor: 'transparent',
            color: backgroundColor,
            borderWidth: 2,
            borderColor: backgroundColor,
            borderRadius: 50
        }
    }
    let renderedLabel = label;
    if (renderedLabel && upperCase) {
        renderedLabel = renderedLabel.toUpperCase();
    }
    else if (renderedLabel && lowerCase) {
        renderedLabel = renderedLabel.toLowerCase();
    }

    return (
        <ButtonWrapper {...mergedProps}>
            <TextWrapper {...mergedProps}>{renderedLabel}</TextWrapper>
            {children}
        </ButtonWrapper>
    )
}