import styled from "styled-components";

const InputWrapper = styled.input`
    ${props => props.fillItemSelf ? "flex : 1;" : ""} 
    padding: ${props => props.instance.verticalPadding - 2}px ${props => props.instance.horizontalPadding - 2}px;
    background-color: ${props => props.instance.backgroundColor};
    border-width: 2px;
    border-color: ${props => props.instance.borderColor};
    border-style: solid;
    border-radius: ${props => props.instance.borderRadius}px;
    color: #000000;
    font-size: ${props => props.instance.fontSize}px;
    letter-spacing: 0.5px;
    font-family: 'Roboto-Regular';
    &::placeholder{
        color: #78858F;
    }
`;

const defaultProps = {
    instance: {
        verticalPadding: 12,
        horizontalPadding: 16,
        fontSize: 13,
        backgroundColor: "#F3F3F3",
        borderColor: "#F3F3F3",
        borderRadius: 4,
    },
    size: 'md',
    type: "Default",
    pill: false
}

export default function Input(props) {

    const mergedProps = { ...defaultProps, ...props };
    const { size, type, pill, children } = mergedProps;
    if (size === "xs") {
        mergedProps.instance = {
            ...mergedProps.instance,
            fontSize: 11,
            verticalPadding: 7,
        }
    }


    if (size === "sm") {
        mergedProps.instance = {
            ...mergedProps.instance,
            fontSize: 11,
            verticalPadding: 9,
        }
    }

    if (size === "lg") {
        mergedProps.instance = {
            ...mergedProps.instance,
            fontSize: 15,
            verticalPadding: 16,
            horizontalPadding: 20,
        }
    }

    if (type === "Outline") {
        mergedProps.instance = {
            ...mergedProps.instance,
            borderColor: "#000000",
            backgroundColor: "#FFFFFF",
        }
    }

    if (pill) {
        mergedProps.instance = {
            ...mergedProps.instance,
            borderRadius: 50,
        }
    }

    return (
        <>
            <InputWrapper {...mergedProps}>

            </InputWrapper>
        </>
    )
}