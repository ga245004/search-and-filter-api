
export function useClampLines(props) {
    let style = "";
    if (props.useClampLines) {
        const { clampLines } = props;
        if (clampLines) {
            style += `
                display: -webkit-box;
                -webkit-line-clamp: ${clampLines};
                -webkit-box-orient: vertical;
                overflow: hidden;
            `;
        }
        style += ``
    }

    return style;
}