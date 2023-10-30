import React from "react";
import styled, { keyframes } from "styled-components";
import { useClampLines } from "../../utils/useClampLines";
import useAnimationShiftLeftToRight from "../../utils/useAnimationShiftLeftToRight";
import { useLinearGradient } from "../../utils/useLinearGradient";

const shiftRightToLeftAnimationLoop = keyframes`
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
`;

const TextWrapper = styled.label`
    ${props => props.fillItemSelf ? "flex : 1;" : ""}
    font-family: '${props => `${props.font}${props.fontVariant ? "-" : ""}${props.fontVariant}`}';
    font-size: ${props => props.fontSize}px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    color: ${props => props.color};
    line-height: ${props => props.lineHeight ? props.lineHeight : props.fontSize}px;
    ${props => props.letterSpacing ? `letter-spacing: ${props.letterSpacing}px;` : ''}
    ${useClampLines}
    ${useAnimationShiftLeftToRight}
    ${useLinearGradient}
`;

const defaultProps = {
    color: "#000000",
    fontSize: 14,
    useClampLines: true,
    font: "Roboto",
    fontVariant: "Regular"
}

function updateDefaultProps(props) {
    Object.keys(props).forEach(p => {
        if (props[p] === undefined && defaultProps[p] !== undefined) {
            props[p] = defaultProps[p];
        }
    })
}

export default function Text(props) {
    const mergedProps = { ...{ componentType: "Text" }, ...defaultProps, ...props, };
    updateDefaultProps(mergedProps);
    const { upperCase, lowerCase, children } = mergedProps;
    const renderedChildren = React.Children.map(children, function (child) {
        if (typeof (child) === 'string' && upperCase) {
            return child.toUpperCase();
        }
        else if (typeof (child) === 'string' && lowerCase) {
            return child.toLowerCase();
        }

        return child;
    });
    return <TextWrapper {...mergedProps}>{renderedChildren}</TextWrapper>
}