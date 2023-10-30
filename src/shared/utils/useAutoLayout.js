export function useAutoLayout(props) {
    let style = "";
    if (props.useAutoLayout) {
        const { useFullWidth, width, layoutType, alignment, verticalGap, horizontalGap, horizontalPadding,
            verticalPadding, rightPadding,
            leftPadding, topPadding, bottomPadding } = props;
        style += " ";

        if (verticalGap) {
            style += `row-gap: ${verticalGap}px;`;
        }
        if (horizontalGap) {
            style += `column-gap: ${horizontalGap}px;`;
        }
        if (horizontalPadding) {
            style += `padding-left: ${horizontalPadding}px;`;
            style += `padding-right: ${horizontalPadding}px;`;
        }
        if (verticalPadding) {
            style += `padding-top: ${verticalPadding}px;`;
            style += `padding-bottom: ${verticalPadding}px;`;
        }
        if (rightPadding) {
            style += `padding-right: ${rightPadding}px;`;
        }
        if (leftPadding) {
            style += `padding-left: ${rightPadding}px`;
        }
        if (topPadding) {
            style += `padding-top: ${rightPadding}px`;
        }
        if (bottomPadding) {
            style += `padding-bottom: ${rightPadding}px`;
        }
        
        const extraWidth = [horizontalPadding, horizontalPadding, rightPadding, leftPadding].filter(i => i).reduce((s, i) => s+i, 0);
        if(useFullWidth){
            style += `width: calc(100% - ${extraWidth ? extraWidth : 0}px);`;
        }
        else if(width){
            style += `width: calc(${width}px - ${extraWidth ? extraWidth : 0}px);`;
        }
        style += ` );`
    }

    return style;
}