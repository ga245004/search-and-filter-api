import React from "react";
import styled from "styled-components";


export const Container = styled.div.attrs((props) => {
    const { cornerRadius = 0, fill = false, fillItemSelf = false } = props;
    const { layoutType = 'vertical', alignment = 'top left', verticalGap = 20, horizontalPadding = 20, verticalPadding = 20 } = props;
    const { strokeColor = "#000000", strokeType = "inside", strokeWidth = 0, strokePerSides = "all" } = props;
    let renderedChildren = props.children;
    if (fill) {
        renderedChildren = React.Children.map(props.children, function (child) {
            return React.cloneElement(child, { fillItemSelf : fill });
        });
    }

    return ({
        cornerRadius,
        layoutType,
        alignment,
        verticalGap,
        horizontalPadding,
        verticalPadding,
        strokeColor,
        strokeType : strokeType === "inside" ? "dashed" : strokeType,
        strokeWidth,
        strokePerSides,
        fillItemSelf : fillItemSelf,
        children: renderedChildren
    })
})`
    ${props => props.fillItemSelf ? "flex : 1;" : ""} 
    border-radius: ${props => props.cornerRadius}px;
    margin: 0px;
    padding: ${props => props.verticalPadding}px ${props => props.horizontalPadding}px;
    display: flex;
    flex-direction: ${props => props.layoutType === "vertical" ? "column" : "row"};
    flex-wrap: ${props => props.layoutType === "vertical" || props.layoutType === "horizontal" ? "nowrap" : "wrap"};
    justify-content: ${props => props.alignment.startsWith("fill ") ? "none" :  props.alignment.startsWith("between ") ? "space-between" :  props.alignment.startsWith("around ") ? "space-around" :  props.alignment.startsWith("bottom ") ? "flex-end" : props.alignment.startsWith("center ") ? "center" : "flex-start"};
    align-items: ${props => props.alignment.endsWith(" fill") ? "none" :  props.alignment.endsWith(" stretch") ? "stretch" : props.alignment.endsWith(" right") ? "flex-end" : props.alignment.endsWith(" center") ? "center" : "flex-start"};
    gap: ${props => props.verticalGap}px;

    border-width: ${props => props.strokeWidth}px;
    border-color: ${props => props.strokeColor};
    border-style: ${props => props.strokeWidth ? props.strokeType : 'hidden'};
    
`;