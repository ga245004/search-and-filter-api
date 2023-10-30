import styled from "styled-components"
import { executeUseUtilsHooks } from "../../utils/executeUseUtilHooks";

const CardWrapper = styled.div`
    ${executeUseUtilsHooks}
    min-height: ${props =>  props.useAutoHeight ? 'auto' : ` calc(${props.height}px - 25px - 25px)`};
    background-color:${props => props.instance.backgroundColor};
    margin: 0px;
    border-radius: 20px;
    display: flex;
    flex-direction: ${props => props.layoutType === "horizontal" ? "row" : "column"};
    flex-wrap: nowrap;
    justify-content: ${props => props.alignment.startsWith("fill ") ? "none" :  props.alignment.startsWith("between ") ? "space-between" :  props.alignment.startsWith("around ") ? "space-around" :  props.alignment.startsWith("bottom ") ? "flex-end" : props.alignment.startsWith("center ") ? "center" : "flex-start"};
    align-items: ${props => props.alignment.endsWith(" fill") ? "none" :  props.alignment.endsWith(" stretch") ? "stretch" : props.alignment.endsWith(" right") ? "flex-end" : props.alignment.endsWith(" center") ? "center" : "flex-start"};
    overflow: hidden;
`;


const defaultProps = {
    instance: {
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
    useAutoLayout: true,
    useLinearGradient : true,
    verticalGap: 25,
    verticalPadding: 25,
    horizontalPadding: 25,
    width: 200,
    height: 200,
    size: "md",
    type: "Contained",
    color: "Default",
    dark: false,
    layoutType: "vertical",
    alignment: "top stretch"
}

export default function Card(props) {
    const mergedProps = { ...defaultProps, ...props };
    const { size, type, color, dark, children, backgroundColor } = mergedProps;
    mergedProps.instance = { ...mergedProps.instance, ...props };

    if(dark) {
        mergedProps.instance = {...mergedProps.instance, 
            backgroundColor: backgroundColor ? backgroundColor : "#0C111C"
        }
    }

    return <CardWrapper {...mergedProps}>
        {children}
    </CardWrapper>
}