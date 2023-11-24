
export function useCornerRadius(props) {
    let style = "";
    if (props.$useCornerRadius) {
        const { $isCircle, $cornerRadius, $cornerRadiusTopLeft, $cornerRadiusBottomLeft, $cornerRadiusTopRight, $cornerRadiusBottomRight } = props;
        if ($cornerRadius) {
            style += `border-radius: ${$isCircle ? "50%" : `${$cornerRadius}px`};`;
        }
        if ($cornerRadiusTopLeft) {
            style += `border-top-left-radius: ${$isCircle ? "50%" : `${$cornerRadiusTopLeft}px`};`;
        }
        if ($cornerRadiusBottomLeft) {
            style += `border-bottom-left-radius: ${$isCircle ? "50%" : `${$cornerRadiusBottomLeft}px`};`;
        }
        if ($cornerRadiusTopRight) {
            style += `border-top-right-radius: ${$isCircle ? "50%" : `${$cornerRadiusTopRight}px`};`;
        }
        if ($cornerRadiusBottomRight) {
            style += `border-bottom-right-radius: ${$isCircle ? "50%" : `${$cornerRadiusBottomRight}px`};`;
        }
    }

    return style;
}