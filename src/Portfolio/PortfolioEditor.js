import React from "react";
import { Colors, Typography } from "./StyleGuide";
import { Container } from "./components/Container/Container";
import Icon from "./components/Icon/Icon";
import Text from "./components/Text/Text";
import { PortfolioButton } from "./custom-components/PortfolioButton";
import Portfolio from "./Portfolio";

export const PortfolioEditorRoute = {
    path: "/portfolio-editor",
    element: <PortfolioEditor />
}

export default function PortfolioEditor() {

    return <Container $useHorizontalLayout>
        <Container $useVerticalLayout $width={300} $height={document.body.clientHeight}
            $backgroundColor={Colors.Grey} $stackLayout={2}
        >
            <Container $useHorizontalLayout $backgroundColor={Colors.Pink}
                $enabledDropShadow $shadowColor={Colors.Grey} $blurRadius={2} $spread={2}
            >
                <Container $fillSelf $alignmentCenter >
                    <Text {...Typography.BodyLargeBold} $color={Colors.Red}>Editor</Text>
                </Container>
                <Icon $name="Heart" $backgroundColor={Colors.Pink} />
            </Container>
        </Container>
        <Container $useVerticalLayout $fillSelf $width={300} $height={document.body.clientHeight} $backgroundColor={Colors.Pink}>
            <EditorObserver>
                <Portfolio />
            </EditorObserver>
        </Container>
    </Container>
}

function EditorObserver(props) {
    const { children } = props;
    const renderedChildren = React.Children.map(children, function (child) {
        console.log(child, child.props.children)
        React.Children.map(child.children, function(c){
            console.log(c)
        })
        return child;
    });

    return <> {renderedChildren} </>
}

function TestFunction() {

    return <PortfolioButton>Hello Button</PortfolioButton>
}