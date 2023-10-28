import React from "react";
import styled from "styled-components";

const TextWrapper = styled.label`
    ${props => props.fillItemSelf ? "flex : 1;" : ""}
    font-family: '${props => `${props.font}${props.fontVariant ? "-" : ""}${props.fontVariant}`}';
    font-size: ${props => props.instance.fontSize}px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    color: ${props => props.instance.color};
    line-height: ${props => props.instance.lineHeight ? props.instance.lineHeight : props.instance.fontSize}px;
`;

const defaultProps = {
    instance: {
        color: "#000000",
        fontSize: 14,
    },
    font: "Roboto",
    fontVariant: "Regular"
}

export default function Text(props) {
    const mergedProps = { ...defaultProps, ...props };
    const { upperCase, lowerCase, children } = mergedProps;
    mergedProps.instance = { ...mergedProps.instance, ...props }
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