import { useEffect, useRef, useState } from "react";
import { Container } from "../Container/Container";

const defaultProps = {
    $backgroundColor: "#E1E1E1",
    $processBarColor: "#000000",
    $completed: 50,
    $thickness: 4,
    $roundCorners: true

}

export default function ProgressBar(props) {
    const { $backgroundColor, $processBarColor, $completed, $thickness, $roundCorners } = { ...defaultProps, ...props };
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

        setCurrentProgress(progressValue * ($completed / 100));
    }, [progressValue, $completed]);

    return (
        <Container $useHorizontalLayout $alignmentLeftCenter $horizontalPadding={1} $verticalPadding={4} $verticalGap={10}>
            <Container ref={totalProgressRef} $fill $fillSelf $useHorizontalLayout $alignmentLeftCenter $horizontalPadding={0} $verticalPadding={0} $verticalGap={10} $backgroundColor={$backgroundColor} $cornerRadius={$roundCorners ? 50 : 0}>
                <Container $useHorizontalLayout $alignmentLeftCenter $horizontalPadding={0} $verticalPadding={0} $verticalGap={10} $backgroundColor={$processBarColor} $height={$thickness} $width={currentProgress} $cornerRadius={$roundCorners ? 50 : 0}>
                </Container>
            </Container>
        </Container>
    )
}