import Card from "../components/Card/Card";
import { Container } from "../components/Container/Container";
import Image from "../components/Image/Image";
import Text from "../components/Text/Text";
import { MediaWithIcon } from "./Medias";

import CARD_IMAGE_1 from "../images/card-image-1.jpg";

export function CardWithHeader(props) {
    let { backgroundColor = "#FFFFFF", avatarImage, title, subtitle, actionName, ringColors, size,
        dark = false, noRing =false
    } = props;

    if (dark) {
        backgroundColor = "#0C111C";
    }

    return (
        <Card dark={dark} useFullWidth useAutoHeight layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25}
            backgroundColor={backgroundColor}>
            <MediaWithIcon {...{ avatarImage, title, subtitle, actionName, ringColors, size, dark, noRing }} />
        </Card>
    )
}

export function BasicCard(props) {
    const { content, imageFilename, footerText = "3 September 2019" } = props;
    const showContent = !!content;
    const hideImage = imageFilename == "";
    const hasImageFilename = !!imageFilename;
    return (
        <Card useFullWidth layoutType="vertical" alignment="top stretch" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
            <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                <MediaWithIcon />
            </Container>
            {!hideImage && (hasImageFilename ? <Image filename={imageFilename} /> : <Image src={CARD_IMAGE_1} />)}
            {showContent && (
                <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                    <Text fontSize={29} fontVariant="Bold">{content}</Text>
                </Container>
            )}
            <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                <Text color="#78858F" fontSize={16}>{footerText}</Text>
            </Container>
        </Card>
    )
}
