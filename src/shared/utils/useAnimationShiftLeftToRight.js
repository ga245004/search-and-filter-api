import { css, keyframes } from "styled-components";

const shiftRightToLeftAnimationLoop = keyframes`
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
`;

export default function useAnimationShiftLeftToRight(props) {
    let style = "";
    if (useAnimationShiftLeftToRight) {
        const { duration = 5 } = props;
        //style += css`animation: ${shiftRightToLeftAnimationLoop} ${duration}s linear infinite;`
    }
    return style;
}