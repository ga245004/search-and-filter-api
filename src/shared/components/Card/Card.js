import styled from "styled-components"

const CardWrapper = styled.div`
    width: calc(${props =>  props.instance.useFullWidth ? "100%" : `${props.instance.width}px`} - ${props => props.instance.verticalPadding}px - ${props => props.instance.verticalPadding}px);
    min-height: calc(${props => props.instance.height}px - 25px - 25px);
    background-color:${props => props.instance.backgroundColor};
    margin: 0px;
    padding: ${props => props.instance.verticalPadding}px ${props => props.instance.horizontalPadding}px;
    border-radius: 20px;
    gap: ${props => props.instance.verticalGap}px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
`;


const defaultProps = {
    instance: {
        verticalGap: 25,
        width: 200,
        height: 200,
        color: "#FFFFFF",
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#272829",
        borderRadius: 4,
        horizontalPadding: 25,
        verticalPadding: 25,
        fontSize: 13,
        letterSpacing: 1.08,
    },
    size: "md",
    type: "Contained",
    color: "Default",
    light: true
}

export default function Card(props) {
    const mergedProps = { ...defaultProps, ...props };
    const { size, type, color, light, children } = mergedProps;
    mergedProps.instance = { ...mergedProps.instance, ...props };

    if(!light) {
        mergedProps.instance = {...mergedProps.instance, 
            backgroundColor: "#000000"
        }
    }

    return <CardWrapper {...mergedProps}>
        {children}
    </CardWrapper>
}