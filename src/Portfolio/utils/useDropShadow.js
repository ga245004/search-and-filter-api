import { hexToRGB } from "./useCommonMethods";


export default function useDropShadow(props) {
    let style = "";
    const { $enabledDropShadow = false, $xDropShadow = 0, $yDropShadow = 0, $blurRadius = 0, $spread = 0, $shadowColor = "#FFFFFF", $shadowOpacity = 0 } = props;
    if ($enabledDropShadow) {
        let color = $shadowColor;
        if (color && color.startsWith("#")) {
            color = hexToRGB(color, $shadowOpacity);
        }
        style += `box-shadow: ${color} ${$xDropShadow}px ${$yDropShadow}px ${$blurRadius}px ${$spread}px;`
    }
    return style;
}