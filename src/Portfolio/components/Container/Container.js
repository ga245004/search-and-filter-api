import React, { forwardRef } from "react";
import styled from "styled-components";
import { executeUseUtilsHooks } from "../../utils/executeUseUtilHooks";


const ContainerWrapper_old = styled.div.attrs((props) => {
    const { cornerRadius = 0, fill = false, fillItemSelf = false, isCircle = false, listSpacingX } = props;
    const { layoutType = 'vertical', alignment = 'top stretch', verticalGap = 20, horizontalPadding = 20, verticalPadding = 20 } = props;
    const { strokeColor = "#000000", strokeType = "inside", strokeWidth = 0, strokePerSides = "all" } = props;
    let renderedChildren = props.children;
    if (fill) {
        renderedChildren = React.Children.map(props.children, function (child) {
            if (child === undefined || child === null) {
                return <></>
            }
            return React.cloneElement(child, { fillItemSelf: fill });
        });
    }

    return ({
        cornerRadius,
        isCircle,
        layoutType,
        alignment,
        verticalGap,
        horizontalPadding,
        verticalPadding,
        strokeColor,
        strokeType: strokeType === "inside" ? "dashed" : strokeType,
        strokeWidth,
        strokePerSides,
        fillItemSelf: fillItemSelf,
        listSpacingX,
        children: renderedChildren
    })
})`
    
    ${executeUseUtilsHooks}
    ${props => props.fillItemSelf ? "flex : 1;" : ""} 
    border-radius: ${props => props.cornerRadius}px;
    ${props => props.isCircle ? `
    border-radius: 50%;
    ` : ''}
    margin: 0px;
    padding: ${props => props.verticalPadding}px ${props => props.horizontalPadding}px;
    ${props => props.bottomPadding != undefined ? `
    padding-bottom: ${props.bottomPadding}px;
    ` : ''}
    ${props => props.topPadding != undefined ? `
    padding-top: ${props.topPadding}px;
    ` : ''}
    ${props => props.rightPadding != undefined ? `
    padding-right: ${props.rightPadding}px;
    ` : ''}
    ${props => props.leftPadding != undefined ? `
    padding-left: ${props.leftPadding}px;
    ` : ''}
    
    justify-content: ${props => props.alignment.startsWith("fill ") ? "none" : props.alignment.startsWith("between ") ? "space-between" : props.alignment.startsWith("around ") ? "space-around" : props.alignment.startsWith("bottom ") ? "flex-end" : props.alignment.startsWith("center ") ? "center" : "flex-start"};
    align-items: ${props => props.alignment.endsWith(" fill") ? "none" : props.alignment.endsWith(" stretch") ? "stretch" : props.alignment.endsWith(" right") ? "flex-end" : props.alignment.endsWith(" center") ? "center" : "flex-start"};
    gap: ${props => props.verticalGap}px;

    border-width: ${props => props.strokeWidth}px;
    border-color: ${props => props.strokeColor};
    border-style: ${props => props.strokeWidth ? props.strokeType : 'hidden'};

    
    ${props => props.width && `
    width: ${props.width - props.horizontalPadding - props.horizontalPadding}px;
    `}
    ${props => props.height && `
    height: ${props.height - props.verticalPadding - props.verticalPadding}px;
    `}
    transition: all 500ms ease 0s;
    ${props => props.clipContent ? `
    overflow: hidden;
    ` : ''}
    ${props => props.listSpacingX ? `
    flex-direction: ${props => props.layoutType === "vertical" ? "column" : "row"};
    & > * {
        transform: translateX(${props.listSpacingX}px);
    }    
    ` : ''}
    
    
`;

const ContainerWrapper = styled.div`
    ${executeUseUtilsHooks}
    border-radius: ${props => props.$isCircle ? "50%" : `${props.$cornerRadius}px`};
    border-top-left-radius: ${props => props.$isCircle ? "50%" : `${props.$cornerRadiusTopLeft}px`};
    border-bottom-left-radius: ${props => props.$isCircle ? "50%" : `${props.$cornerRadiusBottomLeft}px`};
    border-top-right-radius: ${props => props.$isCircle ? "50%" : `${props.$cornerRadiusTopRight}px`};
    border-bottom-right-radius: ${props => props.$isCircle ? "50%" : `${props.$cornerRadiusBottomRight}px`};
`;

const defaultProps = {
    $useAutoLayout: true,
    $useBackground: true,
    $useDropShadow : true,
    $useVerticalLayout: true,
    $useHorizontalLayout: false,
    $cornerRadius: 0,
}

export const Container = forwardRef((props, ref) => {
    const mergedProps = { ...defaultProps, ...props };
    const { children } = mergedProps;
    return (
        <ContainerWrapper ref={ref} {...mergedProps}>
            {children}
        </ContainerWrapper>
    )
});