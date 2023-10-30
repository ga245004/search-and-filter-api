import { useEffect, useRef, useState } from "react";
import { Container } from "../Container/Container";

const defaultProps = {
    backgroundColor: "#000000",
    processBarColor: "#FFFFFF",
    completed: 50,
    thickness: 4,

}

export default function ProgressBar(props) {
    const { backgroundColor, processBarColor, completed, thickness } = { ...defaultProps, ...props };
    const totalProgressRef = useRef(null);
    const [progressValue, setProgressValue] = useState(0);
    const [currentProgress, setCurrentProgress] = useState(0);

    useEffect(() => {
        if (totalProgressRef.current) {
            setProgressValue(totalProgressRef.current.getBoundingClientRect().width);
        }
    }, []);

    useEffect(() => {
        if (totalProgressRef.current && progressValue !== totalProgressRef.current.getBoundingClientRect().width) {
            //TODO: need to update progress when resize;
        }

        setCurrentProgress(progressValue * (completed / 100));
    }, [progressValue, completed]);

    return (
        <Container fillItemSelf layoutType="horizontal" alignment="center center" horizontalPadding={1} verticalPadding={4} verticalGap={10}>
            <Container ref={totalProgressRef} fillItemSelf layoutType="vertical" alignment="center left" horizontalPadding={0} verticalPadding={0} verticalGap={10} backgroundColor={backgroundColor} cornerRadius={50}>
                <Container layoutType="horizontal" alignment="center center" horizontalPadding={0} verticalPadding={0} verticalGap={10} backgroundColor={processBarColor} height={thickness} width={currentProgress} cornerRadius={50}>
                </Container>
            </Container>
        </Container>
    )
}