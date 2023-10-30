import Card from "../components/Card/Card";
import { Container } from "../components/Container/Container";
import Button from "../components/Button/Button";
import Text from "../components/Text/Text";
import Icon from "../components/Icon/Icon";
import Avatar from "../components/Avatar/Avatar";

import PROFILE_IMAGE from "./../images/profile.png";

export function MediaWithIcon(props) {

    const { size = "md", avatarImage = PROFILE_IMAGE, filename, title = "Elton Platt",
        subtitle = "Web Development", actionName = "IoEllipsisVertical", buttonName = "", buttonType ,
        ringColors, dark = false, noRing = false,
        subtitleFontSize, propsAvatar = {}
    } = props;

    let titleColor = "#000000";
    let subtitleColor = "#78858F";

    let iconColor = "#000000";
    let iconBackgroundColor = "#FFFFFF";

    if (dark) {
        titleColor = "#FFFFFF";
        subtitleColor = "#78858F";
        iconColor = "#7986A3";
        iconBackgroundColor = "#05080E";
    }

    let showSubtitle = !!subtitle;

    return (
        <Container layoutType="horizontal" alignment="top center" verticalGap={10} horizontalPadding={0} verticalPadding={0}>
            <Avatar filename={filename} image={filename ? "" : avatarImage} ringColors={ringColors} size={size} noRing={noRing} {...propsAvatar} />
            <Container layoutType="vertical" alignment="center stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0} fill={true} fillItemSelf={true}>
                <Text fontVariant="Medium" fontSize={20} lineHeight={25} color={titleColor}>{title}</Text>
                {showSubtitle && <Text color={subtitleColor} fontSize={subtitleFontSize}>{subtitle}</Text>}
            </Container>
            {actionName !== "" && <Icon name={actionName} title={actionName} color={iconColor} backgroundColor={iconBackgroundColor}></Icon>}
            {buttonName !== "" && <Button label={buttonName} type={buttonType}></Button>}
        </Container>
    )
}

export function MediaVerticalWithButtons({ showAvatar = true }) {
    return (
        <Container layoutType="vertical" alignment="top center" verticalGap={10} horizontalPadding={0} verticalPadding={0}>
            {showAvatar && <Avatar image={PROFILE_IMAGE} />}
            <Container layoutType="vertical" alignment="center stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0} fill={true} fillItemSelf={true}>
                <Text fontVariant="Medium" fontSize={20} lineHeight={25}>Elton Platt</Text>
                <Text color="#78858F">Web Development</Text>
            </Container>
            <Container layoutType="horizontal" alignment="center stretch" verticalGap={10} horizontalPadding={0} verticalPadding={0} fill={true} fillItemSelf={true}>
                <Button label={"BUTTON"}></Button>
                <Button label={"BUTTON"} type="Outline"></Button>
            </Container>
        </Container>
    )
}

export default function Medias() {

    return (
        <Card width={422} height={1552} verticalGap={20} >
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={20}>
                <Text fontVariant="Medium" fontSize={28}>Media</Text>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase={true}>{"Media"}</Text>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                <Text fontVariant="Medium" fontSize={20} lineHeight={25}>Elton Platt</Text>
                <Text color="#78858F">Web Development</Text>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase={true}>{"Media with avatar"}</Text>
            </Container>
            <Container layoutType="horizontal" alignment="top center" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                <Avatar image={PROFILE_IMAGE} />
                <Container layoutType="vertical" alignment="center stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0} fill={true} fillItemSelf={true}>
                    <Text fontVariant="Medium" fontSize={20} lineHeight={25}>Elton Platt</Text>
                    <Text color="#78858F">Web Development</Text>
                </Container>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase={true}>{"Media with button"}</Text>
            </Container>
            <Container layoutType="horizontal" alignment="top center" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                <Avatar image={PROFILE_IMAGE} />
                <Container layoutType="vertical" alignment="center stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0} fill={true} fillItemSelf={true}>
                    <Text fontVariant="Medium" fontSize={20} lineHeight={25}>Elton Platt</Text>
                    <Text color="#78858F">Web Development</Text>
                </Container>
                <Button label={"BUTTON"}></Button>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase={true}>{"Media with icon"}</Text>
            </Container>
            <MediaWithIcon />
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase={true}>{"Media with icon time"}</Text>
            </Container>
            <Container layoutType="horizontal" alignment="top center" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                <Avatar image={PROFILE_IMAGE} />
                <Container layoutType="vertical" alignment="center stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0} fill={true} fillItemSelf={true}>
                    <Text fontVariant="Medium" fontSize={20} lineHeight={25}>Elton Platt</Text>
                    <Text color="#78858F">Web Development</Text>
                </Container>
                <Icon size="sm" name={"IoTimeOutline"} color="#777777" title={"More Options"} text="3 min"></Icon>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase={true}>{"Media vertical"}</Text>
            </Container>
            <Container layoutType="vertical" alignment="top center" verticalGap={10} horizontalPadding={0} verticalPadding={0}>
                <Avatar image={PROFILE_IMAGE} />
                <Container layoutType="vertical" alignment="center stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0} fill={true} fillItemSelf={true}>
                    <Text fontVariant="Medium" fontSize={20} lineHeight={25}>Elton Platt</Text>
                    <Text color="#78858F">Web Development</Text>
                </Container>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase={true}>{"Media vertical with button"}</Text>
            </Container>
            <Container layoutType="vertical" alignment="top center" verticalGap={10} horizontalPadding={0} verticalPadding={0}>
                <Avatar image={PROFILE_IMAGE} />
                <Container layoutType="vertical" alignment="center stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0} fill={true} fillItemSelf={true}>
                    <Text fontVariant="Medium" fontSize={20} lineHeight={25}>Elton Platt</Text>
                    <Text color="#78858F">Web Development</Text>
                </Container>
                <Button label={"BUTTON"}></Button>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase={true}>{"Media vertical with buttons"}</Text>
            </Container>
            <MediaVerticalWithButtons />
        </Card>
    )
}