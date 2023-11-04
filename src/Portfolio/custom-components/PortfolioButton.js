import { Colors, Typography } from "../StyleGuide";
import { Container } from "../components/Container/Container";
import Text from "../components/Text/Text";

{
    //Button
}
const defaultPropsPortfolioButton = {
    $backgroundColor: Colors.Dark,
    $color: Colors.White,
    $typography: Typography.BodyLargeBold
}
export function PortfolioButton(props) {
    const mergedProps = { ...defaultPropsPortfolioButton, ...props };
    const { $backgroundColor, $color, $typography, children } = mergedProps;
    return (
        <Container $useHorizontalLayout $horizontalGap={8} $horizontalPadding={24} $verticalPadding={12} $backgroundColor={$backgroundColor}>
            <Text {...$typography} $color={$color}>{children}</Text>
        </Container>
    )
}
