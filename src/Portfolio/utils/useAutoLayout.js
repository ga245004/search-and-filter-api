export function useAutoLayout(props) {
    let style = "";
    if (props.$useAutoLayout) {
        const { $useFullWidth, $useFullHeight, $height, $width, $minWidth, $minHeight,
            $stackLayout,
            $useVerticalLayout, $useHorizontalLayout,
            $alignmentCenter, $alignmentBottomCenter, $alignmentLeft, $alignmentTopCenter, $alignmentBottomLeft, $alignmentTopLeft,
            $verticalGap, $horizontalGap, $horizontalGapAuto, $verticalGapAuto,
            $horizontalPadding, $verticalPadding, $rightPadding, $leftPadding, $topPadding, $bottomPadding,
            $clipContent, $fillSelf = false, $fill = false, $shiftUp, $shiftDown, $shiftRight, $shiftLeft,
            $disableAnimation, $animationType = "ease-out", $animationSelector = "all", $animationTimeout = 250
        } = props;
        style += "display: flex;";
        if ($useHorizontalLayout) {
            style += "flex-direction: row;";
            style += "flex-wrap: nowrap;";
        }
        else if ($useVerticalLayout) {
            style += "flex-direction: column;";
            style += "flex-wrap: nowrap;";
        }
        else {
            style += "flex-wrap: wrap;";
        }

        if ($alignmentCenter) {
            style += `
            align-items: ${$fill ? 'stretch' : 'center'};
            justify-content: center;
            `;
        }
        else if ($alignmentBottomCenter && $useHorizontalLayout) {
            style += `
            justify-content: ${$fill ? 'stretch' : 'center'};
            align-items: flex-end;
            `;
        }
        else if ($alignmentBottomCenter && $useVerticalLayout) {
            style += `
            justify-content: flex-end;
            align-items: ${$fill ? 'stretch' : 'center'};
            `;
        }
        else if ($alignmentLeft && $useHorizontalLayout) {
            style += `
            justify-content: flex-start;
            align-items: ${$fill ? 'stretch' : 'center'};
            `;
        }
        else if ($alignmentLeft && $useVerticalLayout) {
            style += `
            justify-content: space-between;
            align-items: flex-start;
            `;
        }
        else if ($alignmentTopCenter && $useHorizontalLayout) {
            style += `
            justify-content: ${$fill ? 'stretch' : 'center'};
            align-items: flex-start;
            `;
        }
        else if ($alignmentTopCenter && $useVerticalLayout) {
            style += `
            justify-content: flex-start;
            align-items: ${$fill ? 'stretch' : 'center'};
            `;
        }
        else if ($alignmentBottomLeft && $useHorizontalLayout) {
            style += `
            justify-content: flex-start;
            align-items: flex-end;
            `;
        }
        else if ($alignmentBottomLeft && $useVerticalLayout) {
            style += `
            justify-content: flex-end;
            align-items: flex-start;
            `;
        }
        else if ($alignmentTopLeft && $useHorizontalLayout) {
            style += `
            justify-content: flex-start;
            align-items: flex-start;
            `;
        }
        else if ($alignmentTopLeft && $useVerticalLayout) {
            style += `
            justify-content: flex-start;
            align-items: flex-start;
            `;
        }

        if ($fillSelf) {
            style += `flex: 1;`;
        }

        if ($verticalGap) {
            style += `row-gap: ${$verticalGap}px;`;
        }
        if ($horizontalGap) {
            style += `column-gap: ${$horizontalGap}px;`;
        }

        if ($horizontalGapAuto || $verticalGapAuto) {
            style += "justify-content: space-between;";
        }

        if ($horizontalPadding) {
            style += `padding-left: ${$horizontalPadding}px;`;
            style += `padding-right: ${$horizontalPadding}px;`;
        }
        if ($verticalPadding) {
            style += `padding-top: ${$verticalPadding}px;`;
            style += `padding-bottom: ${$verticalPadding}px;`;
        }
        if ($rightPadding) {
            style += `padding-right: ${$rightPadding}px;`;
        }
        if ($leftPadding) {
            style += `padding-left: ${$leftPadding}px;`;
        }
        if ($topPadding) {
            style += `padding-top: ${$topPadding}px;`;
        }
        if ($bottomPadding) {
            style += `padding-bottom: ${$bottomPadding}px;`;
        }

        if ($shiftUp) {
            style += `margin-top: ${$shiftUp * 1}px;`;
        }
        if ($shiftDown) {
            style += `margin-bottom: ${$shiftDown * 1}px;`;
        }

        if ($shiftLeft) {
            style += `margin-left: ${$shiftLeft * 1}px;`;
        }
        if ($shiftRight) {
            style += `margin-right: ${$shiftRight * 1}px;`;
        }


        const extraWidth = [$horizontalPadding, $horizontalPadding, $rightPadding, $leftPadding].filter(i => i).reduce((s, i) => s + i, 0);
        if ($useFullWidth) {
            style += `width: calc(100% - ${extraWidth ? extraWidth : 0}px);`;
        }
        else if ($width) {
            style += `width: ${$width - (extraWidth ? extraWidth : 0)}px;`;
        }

        if ($minWidth) {
            style += `min-width: ${$minWidth - (extraWidth ? extraWidth : 0)}px;`;
        }

        if ($minHeight) {
            style += `min-width: ${$minWidth - (extraWidth ? extraWidth : 0)}px;`;
        }



        const extraHeight = [$verticalPadding, $verticalPadding, $topPadding, $bottomPadding].filter(i => i).reduce((s, i) => s + i, 0);
        if ($useFullHeight) {
            style += `height: calc(100% - ${extraHeight ? extraHeight : 0}px);`;
        }
        else if ($height) {
            style += `height: ${$height - (extraHeight ? extraHeight : 0)}px;`;
        }

        if ($clipContent) {
            style += `overflow: hidden;`;
        }

        if (!$disableAnimation) {
            style += `transition: ${$animationSelector} ${$animationTimeout}ms ${$animationType};`;
        }
        if ($stackLayout) {
            style += `z-index: ${$stackLayout};`;
            console.log("stackLayout", style)
        }

        style += `;`
    }
    return style;
}