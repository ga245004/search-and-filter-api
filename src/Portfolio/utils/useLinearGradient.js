
export function useLinearGradient(props) {
    let style = "";
    if (props.useLinearGradient) {
        const { componentType, linearGradientColors, linearGradientDirection, linearGradientAngle } = props;
        if (linearGradientColors) {
            style += "background-image: linear-gradient( ";
        }
        if (linearGradientAngle) {
            style += `${linearGradientAngle}deg ,`;
        }
        if (!linearGradientAngle && linearGradientDirection) {
            style += `to ${linearGradientDirection} ,`;
        }
        if (linearGradientColors) {
            style += `${linearGradientColors.join(", ")}`;
        }
        if (linearGradientColors) {
            style += ` );`
        }

        if(linearGradientColors && componentType && componentType === "Text"){
            style += `
                -webkit-text-fill-color: transparent; 
                -webkit-background-clip: text; 
            `;
        }
    }

    return style;
}