import styled, { ThemeProvider, useTheme } from "styled-components"
import { useAutoLayout } from "../../utils/useAutoLayout";
import Text from "../Text/Text";
import Icon from "../Icon/Icon";
import { executeUseUtilsHooks } from "../../utils/executeUseUtilHooks";

// Define our button, but with the use of props.theme this time
const ButtonWrapper1 = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;

    margin: 0px;
    padding: calc(${props => props.$instance.$verticalPadding}px - ${props => props.$instance.$borderWidth}px) calc(${props => props.$instance.$horizontalPadding}px - ${props => props.$instance.$borderWidth}px);
    border-radius: ${props => props.$instance.$borderRadius}px;

    /* Color the border and text with theme.main */
    color: ${props => props.$instance.$color};
    background-color: ${props => props.$instance.$backgroundColor};
    border: ${props => props.$instance.$borderWidth}px solid ${props => props.$instance.$borderColor};
`;

const TextWrapper1 = styled.label`
    font-family: 'Roboto-Bold';
    font-size: ${props => props.$instance.$fontSize}px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    color: inherit;
    letter-spacing: ${props => props.$instance.$letterSpacing}px;
`;

const defaultProps = {
    instance: {
        $backgroundColor: "#272829",
        $color: "#FFFFFF",
        $borderWidth: 2,
        $borderColor: "#272829",
        $borderRadius: 4,

    },
    $size: "md",
    $type: "Contained",
    $color: "Default"
}

export function ButtonOld(props) {

    const mergedProps = { ...defaultProps, ...props };
    const { $size, $type, $color, $label, $upperCase, $lowerCase, children } = mergedProps;
    mergedProps.$instance = { ...mergedProps.$instance, ...props }
    if ($color != "Default") {
        mergedProps.$instance.button = {
            $backgroundColor: $color,
            $color: "#FFFFFF"
        }
    }

    if ($size === "sm") {
        mergedProps.$instance = {
            ...mergedProps.$instance,
            $verticalPadding: 9,
            $fontSize: 11,
            $letterSpacing: 0.8
        }
    }

    if ($size === "lg") {
        mergedProps.$instance = {
            ...mergedProps.$instance,
            $horizontalPadding: 20,
            $verticalPadding: 16,
            $fontSize: 15,
            $letterSpacing: 1.08
        }
    }

    if ($type === "Outline") {
        const { $backgroundColor, color } = mergedProps.$instance;
        mergedProps.$instance = {
            ...mergedProps.$instance,
            $backgroundColor: 'transparent',
            $color: $backgroundColor,
            $borderWidth: 2,
            $borderColor: $backgroundColor
        }
    }

    if ($type === "Pill") {
        mergedProps.$instance = {
            ...mergedProps.$instance,
            $borderRadius: 50
        }
    }

    if ($type === "Outline-pill") {
        const { $backgroundColor, color } = mergedProps.$instance;
        mergedProps.$instance = {
            ...mergedProps.$instance,
            $backgroundColor: 'transparent',
            $color: $backgroundColor,
            $borderWidth: 2,
            $borderColor: $backgroundColor,
            $borderRadius: 50
        }
    }

    return (
        <ButtonWrapper1 {...mergedProps}>
            <TextWrapper1 {...mergedProps}>{renderedLabel}</TextWrapper1>
            {children}
        </ButtonWrapper1>
    )
}

const ButtonWrapper = styled.button`
    border : 0;
    ${executeUseUtilsHooks}
`

const defaultProperties = {
    $useAutoLayout: true,
    $useBackground: true,
    $useDropShadow: true,
    $useInnerShadow: true,
    $useCornerRadius: true,
    $useLinearGradient: true,
    $useHorizontalLayout: true,
    $alignmentCenter: true,
    $horizontalGap: 4,
}

const fontStyle = {
    $font: "Roboto",
    $fontVariant: "Regular",
    $fontSize: 12,
    $letterSpacing: 1.08,
    $color: "#FFFFFF"
}


const iconStyle = {
    $color: "#FFFFFF",
    $width: 16,
    $height: 16,
    $padding: 1,
}

const SizeStyles = {
    xl: {
        $horizontalPadding: 8,
        $verticalPadding: 4,
        $cornerRadius: 4,
    },
    sm: {
        $horizontalPadding: 12,
        $verticalPadding: 8,
        $cornerRadius: 4,
    },
    md: {
        $horizontalPadding: 16,
        $verticalPadding: 12,
        $cornerRadius: 4,
    },
    lg: {
        $horizontalPadding: 20,
        $verticalPadding: 16,
        $cornerRadius: 4,
    },
}

export default function Button(props) {
    let mergeProps = { ...defaultProperties, ...props };
    const { $size, $color, $rotate, $beforeIcon, $afterIcon, $label, $upperCase, $lowerCase } = mergeProps;
    const mergedFontStyle = { ...fontStyle, ...{ $color } };
    const mergedIconStyle = { ...iconStyle, ...{ $color, $rotate } };

    if (SizeStyles[$size]) {
        mergeProps = { ...SizeStyles[$size], ...mergeProps }
    }
    else {
        mergeProps = { ...SizeStyles.md, ...mergeProps }
    }

    let renderedLabel = $label;
    if (renderedLabel && $upperCase) {
        renderedLabel = renderedLabel.toUpperCase();
    }
    else if (renderedLabel && $lowerCase) {
        renderedLabel = renderedLabel.toLowerCase();
    }

    return (
        <ButtonWrapper {...mergeProps}>
            {$beforeIcon && <Icon $name={$beforeIcon} {...mergedIconStyle} />}
            {renderedLabel && <Text {...mergedFontStyle}>{renderedLabel}</Text>}
            {$afterIcon && <Icon $name={$afterIcon} {...mergedIconStyle} />}
        </ButtonWrapper>
    )
}