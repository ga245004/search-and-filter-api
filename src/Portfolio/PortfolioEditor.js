import React from "react";
import { Colors, Typography } from "./StyleGuide";
import { Container } from "./components/Container/Container";
import Icon from "./components/Icon/Icon";
import Text from "./components/Text/Text";
import { PortfolioButton } from "./custom-components/PortfolioButton";
import Portfolio from "./Portfolio";
import Divider from "./components/Divider/Divider";
import Button from "./components/Button/Button";

export const PortfolioEditorRoute = {
    path: "/portfolio-editor",
    element: <PortfolioEditor />
}

const EditorColors = {
    Black: "#1E1E1E",
    BorderColor: "#3B3B3B"
}

const EditorStyles = {
    Stroke: {
        $enabledDropShadow: true,
        $spread: 1,
        $shadowColor: EditorColors.BorderColor,
        $shadowOpacity: 1,
    },

    Button: {
        $size: "xl",
        $color: "#BDBDBD",
        $linearGradientColors: ["#393939", "#353535"],
        $linearGradientDirection: "bottom",
    },

    ElementIcon: {
        $color: "#FFFFFF",
        $width: 16,
        $height: 16,
        $padding: 1,
    }
}

function LeftSideBar() {
    return (
        <Container $useVerticalLayout $width={34} $backgroundColor={EditorColors.Black} {...EditorStyles.Stroke} >
            <Icon $name="IoLogoInstagram" $color="#BDBDBD" $size="sm" $padding={4} />
            <Divider $thickness={1} $color="#BDBDBD" />
            <Container $verticalGap={4}>
                <Container $verticalGap={4}>
                    <Icon $name="Add" $color="#BDBDBD" $size="sm" $padding={4} />
                    <Icon $name="IoDocumentOutline" $color="#BDBDBD" $size="sm" $padding={4} />
                    <Icon $name="IoLayersOutline" $color="#BDBDBD" $size="sm" $padding={4} />
                </Container>
                <Divider $color="#BDBDBD" />
                <Container $verticalGap={4}>
                    <Icon $name="IoCubeOutline" $color="#BDBDBD" $size="sm" $padding={4} />
                    <Icon $name="IoPricetagsSharp" $color="#BDBDBD" $size="sm" $padding={4} $rotate={45} />
                    <Icon $name="IoColorPaletteOutline" $color="#BDBDBD" $size="sm" $padding={4} />
                    <Icon $name="IoImagesOutline" $color="#BDBDBD" $size="sm" $padding={4} />
                </Container>
                <Divider $color="#BDBDBD" />
                <Container $verticalGap={4}>
                    <Icon $name="IoServerOutline" $color="#BDBDBD" $size="sm" $padding={4} />
                    <Icon $name="IoOptionsOutline" $color="#BDBDBD" $size="sm" $padding={4} />
                    <Icon $name="IoPersonOutline" $color="#BDBDBD" $size="sm" $padding={4} />
                    <Icon $name="IoBagOutline" $color="#BDBDBD" $size="sm" $padding={4} />
                    <Icon $name="IoAppsOutline" $color="#BDBDBD" $size="sm" $padding={4} />
                </Container>
            </Container>

            <Container $fillSelf></Container>
            <Container $verticalGap={4}>
                <Icon $name="Settings" $color="#BDBDBD" $size="sm" $padding={4} />
                <Icon $name="Help" $color="#BDBDBD" $size="sm" $padding={4} />
                <Icon $name="IoCheckboxOutline" $color="#BDBDBD" $size="sm" $padding={4} />
                <Icon $name="Search" $color="#BDBDBD" $size="sm" $padding={4} />
                <Icon $name="IoVideocamOutline" $color="#BDBDBD" $size="sm" $padding={4} />
            </Container>
        </Container>
    )
}

function TopHeader() {
    return (
        <Container $height={34} $backgroundColor={EditorColors.Black} {...EditorStyles.Stroke}>
            <Container $fillSelf $useHorizontalLayout $alignmentLeft $horizontalGapAuto>
                {
                    //Left
                }
                <Container $height={24} $useHorizontalLayout $horizontalPadding={8}>
                    <Button $label="Home" $beforeIcon="IoDocumentOutline" {...EditorStyles.Button}
                    />
                </Container>
                {
                    //Center
                }
                <Container $useHorizontalLayout $horizontalPadding={4} $horizontalGap={2}>
                    <Button $beforeIcon="IoEllipsisHorizontal" {...EditorStyles.Button} />
                    <Button $beforeIcon="IoDesktopOutline" {...EditorStyles.Button} />
                    <Button $beforeIcon="IoTabletPortraitOutline" {...EditorStyles.Button} />
                    <Button $beforeIcon="IoPhoneLandscapeOutline" {...EditorStyles.Button} />
                    <Button $beforeIcon="IoPhonePortraitOutline" {...EditorStyles.Button} />
                    <Button $label="1220 px" {...EditorStyles.Button} />
                </Container>
                {
                    //Right
                }
                <Container $useHorizontalLayout $horizontalPadding={4} $horizontalGap={2}>
                    <Button $beforeIcon="IoBrushOutline" $label="Designing" $afterIcon="IoChevronDown" {...EditorStyles.Button} />
                    <Button $beforeIcon="IoCheckmarkCircleOutline" {...EditorStyles.Button} $color="#63D489" />
                    <Button $beforeIcon="Code" {...EditorStyles.Button} />
                    <Button $beforeIcon="IoChatbubble" {...EditorStyles.Button} />
                    <Button $beforeIcon="IoPlayOutline" {...EditorStyles.Button} />
                    <Button $beforeIcon="IoPersonOutline" $label="Share" {...EditorStyles.Button} />
                    <Button $beforeIcon="IoBrushOutline" $label="Publish" $afterIcon="IoChevronDown" {...EditorStyles.Button} />
                </Container>
            </Container>
        </Container>
    )
}


function BottomBar() {
    return (
        <Container $height={28} $backgroundColor={EditorColors.Black} {...EditorStyles.Stroke}>

        </Container>
    )
}


function RightSideBar() {
    return (
        <Container $width={250} $backgroundColor={EditorColors.Black} {...EditorStyles.Stroke}>

        </Container>
    )
}

function Element({ title, icon }) {
    return (
        <Container $useHorizontalLayout $horizontalGap={4} $horizontalPadding={8} $verticalPadding={4}>
            <Icon $name={icon} {...EditorStyles.ElementIcon} />
            <Text $font="Roboto" $fontVariant="Regular" $fontSize={11.5} $letterSpacing={0.5} $color="#F5F5F5">{title}</Text>
        </Container>
    )
}

function Navigation() {
    return (
        <Container $width={250} $backgroundColor={EditorColors.Black} {...EditorStyles.Stroke}>
            <Container $useHorizontalLayout $horizontalGapAuto $horizontalPadding={10} $verticalPadding={8} {...EditorStyles.Stroke}>
                <Text $font="Roboto" $fontVariant="Medium" $fontSize={12.5} $letterSpacing={0.5} $color="#F5F5F5">Navigator</Text>
                <Container $useHorizontalLayout $horizontalGap={2}>
                    <Button $beforeIcon="IoCode" {...EditorStyles.Button} $rotate={90} />
                    <Button $beforeIcon="IoPlaySkipBackOutline" {...EditorStyles.Button} />
                </Container>
            </Container>
            <Container>
                <Element icon="IoBrowsersOutline" title="Body" />
            </Container>
        </Container>
    )
}



function Screen() {
    return (
        <Container $backgroundColor={Colors.White} {...EditorStyles.Stroke}>

        </Container>
    )
}

export default function PortfolioEditor() {

    return (
        <Container $fillSelf $useHorizontalLayout $backgroundColor={Colors.Grey}>
            <LeftSideBar />
            <Container $fillSelf>
                <TopHeader />
                <Container $fillSelf $useHorizontalLayout>
                    <Container $fillSelf>
                        <Container $fillSelf $useHorizontalLayout>
                            <Navigation />
                            <Container $fillSelf>
                                <Screen />
                            </Container>
                        </Container>
                        <BottomBar />
                    </Container>
                    <RightSideBar />
                </Container>
            </Container>
        </Container>
    )
}


