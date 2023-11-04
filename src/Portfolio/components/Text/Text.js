import React from "react";
import styled, { keyframes } from "styled-components";
import { useClampLines } from "../../utils/useClampLines";
import useAnimationShiftLeftToRight from "../../utils/useAnimationShiftLeftToRight";
import { useLinearGradient } from "../../utils/useLinearGradient";
import { Colors, Typography } from "../../StyleGuide";
import { useAutoLayout } from "../../utils/useAutoLayout";

const shiftRightToLeftAnimationLoop = keyframes`
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
`;

const TextWrapper = styled.label`
    ${props => props.$fillSelf ? "flex : 1;" : ""}
    font-family: '${props => `${props.$font}${props.$fontVariant ? "-" : ""}${props.$fontVariant}`}';
    font-size: ${props => props.$fontSize}px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    color: ${props => props.$color};
    line-height: ${props => props.$lineHeight ? props.$lineHeight : props.$fontSize}px;
    ${props => props.$letterSpacing ? `letter-spacing: ${props.$letterSpacing}px;` : ''}
    ${props => props.$firstCharColor ? `
    display : inline-block;
    &:first-letter {
        color:  ${props.$firstCharColor};
    }` : ''}
    ${props => props.$alignmentRight ? `
    text-align: right;
    justify-content: flex-end;
    ` : ''}
    ${props => props.$alignmentLeft ? `
    text-align: left;
    ` : ''}
    ${props => props.$alignmentCenter ? `
    text-align: center;
    justify-content: center;
    ` : ''}
    ${props => props.$width ? `
    width: ${props.$width}px;
    ` : ''}
    ${useAutoLayout}
    ${useClampLines}
    ${useAnimationShiftLeftToRight}
    ${useLinearGradient}
`;

const defaultProps = {
    $color: Colors.Dark,
    $fontSize: 14,
    $lineHeight: Typography.BodyMedium.lineHeight,
    $letterSpacing: 0,
    $useClampLines: true,
    $font: Typography.Montserrat,
    $fontVariant: "Regular",
}

function updateDefaultProps(props) {
    Object.keys(props).forEach(p => {
        if (props[p] === undefined && defaultProps[p] !== undefined) {
            props[p] = defaultProps[p];
        }
    })
}

export default function Text(props) {
    const mergedProps = { ...{ $componentType: "Text" }, ...defaultProps, ...props, };
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