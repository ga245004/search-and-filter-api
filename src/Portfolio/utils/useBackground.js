
export function useBackground(props) {
    let style = "";
    if (props.$useBackground) {
        const { $backgroundColor } = props;
        if ($backgroundColor) {
            style += `background-color: ${$backgroundColor};`;
        }
    }

    return style;
}