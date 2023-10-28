import styled, { ThemeProvider } from "styled-components";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import { Container } from "./components/Container/Container";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import Input from "./components/Input/Input";
import Badge from "./components/Badge/Badge";
import Icon from "./components/Icon/Icon";
import * as Io5Icon from "react-icons/io5";
import { useState } from "react";
import Avatar from "./components/Avatar/Avatar";

import PROFILE_IMAGE from "./images/profile.png";
import CARD_IMAGE_1 from "./images/card-image-1.jpg";
import Image from "./components/Image/Image";

const ICON_LIST = Object.keys(Io5Icon);

const PreviewWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #E5E5E5;
    padding: 24px;
    gap: 24px;
`

// Define what props.theme will look like
const theme = {
    //default: "mediumseagreen"
};


function Forms() {
    return (
        <Card verticalGap={44} height={981} width={398}>
            <Container layoutType="vertical" alignment="top left" verticalGap={10} horizontalPadding={0} verticalPadding={20}>
                <Text fontVariant="Medium" fontSize={28}>Forms</Text>
            </Container>
            <Text color="#909090">DEFAULT</Text>
            <Container layoutType="vertical" alignment="top fill" verticalGap={20} horizontalPadding={20} verticalPadding={20}
                cornerRadius={5}
                strokeColor="#AFA7D8" strokeType="inside" strokeWidth={2} strokePerSides="all">
                <Input placeholder="Placeholder" size="sm"></Input>
                <Input placeholder="Placeholder" ></Input>
                <Input placeholder="Placeholder" size="lg"></Input>
                <Input placeholder="Placeholder" size="sm" type="Outline"></Input>
                <Input placeholder="Placeholder" type="Outline"></Input>
                <Input placeholder="Placeholder" size="lg" type="Outline"></Input>
                <Input placeholder="Placeholder" size="sm" pill={true}></Input>
                <Input placeholder="Placeholder" pill={true} ></Input>
                <Input placeholder="Placeholder" size="lg" pill={true}></Input>
                <Input placeholder="Placeholder" size="sm" type="Outline" pill={true}></Input>
                <Input placeholder="Placeholder" type="Outline" pill={true}></Input>
                <Input placeholder="Placeholder" size="lg" type="Outline" pill={true}></Input>
            </Container>
        </Card>
    )
}

function Buttons() {
    return (
        <Card height={331} width={542}>
            <Container layoutType="vertical" alignment="top left" verticalGap={10} horizontalPadding={0} verticalPadding={20}>
                <Text fontVariant="Medium" fontSize={28}>Buttons</Text>
            </Container>
            <Container layoutType="wrap" alignment="top left" verticalGap={10} horizontalPadding={20} verticalPadding={10}
                cornerRadius={5}
                strokeColor="#AFA7D8" strokeType="inside" strokeWidth={2} strokePerSides="all">
                <Button label={"DEFAULT"}></Button>
                <Button label={"OUTLINE"} type="Outline"></Button>
                <Button label={"DEFAULT"} type="Pill"></Button>
                <Button label={"OUTLINE"} type="Outline-pill"></Button>
                <Button label={"SMALL"} size={"sm"}></Button>
                <Button label={"SMALL"} size={"sm"} type="Outline"></Button>
                <Button label={"SMALL"} size={"sm"} type="Pill"></Button>
                <Button label={"SMALL"} size={"sm"} type="Outline-pill"></Button>
                <Button label={"SMALL"} size={"sm"} type="Outline-pill" style={{ opacity: '0' }}></Button>
                <Button label={"LARGE"} size={"lg"}></Button>
                <Button label={"LARGE"} size={"lg"} type="Outline"></Button>
                <Button label={"LARGE"} size={"lg"} type="Pill"></Button>
                <Button label={"LARGE"} size={"lg"} type="Outline-pill"></Button>
            </Container>
        </Card>
    )
}

function Badges() {
    return (
        <Card width={255} height={247} verticalGap={20}  >
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={20}>
                <Text fontVariant="Medium" fontSize={28}>Badges</Text>
            </Container>
            <Container layoutType="wrap" alignment="top left" verticalGap={20} horizontalPadding={20} verticalPadding={20}
                cornerRadius={5}
                strokeColor="#AFA7D8" strokeType="inside" strokeWidth={2} strokePerSides="all">
                <Badge label={"BADGE"} type="Outline" pill={true}></Badge>
                <Badge label={"BADGE"} type="Contained" pill={true}></Badge>
                <Badge label={"BADGE"} type="Outline"></Badge>
                <Badge label={"BADGE"} type="Contained" pill={false}></Badge>
            </Container>
        </Card>
    )
}

function Icons() {

    const [icons, SetIcons] = useState(ICON_LIST.slice(0, (5 * 6 / 2)));
    const OnFilterIcon = (e) => {
        SetIcons(
            ICON_LIST.filter(
                i => i.toLowerCase().includes(e.target.value.toLowerCase())
            ).slice(0, (5 * 6 / 2))
        )
    }

    const CopyIcon = (i) => window.navigator.clipboard.writeText(i);

    return (
        <Card width={422} height={500} verticalGap={20}  >
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={20}>
                <Text fontVariant="Medium" fontSize={28}>Icons</Text>
            </Container>
            <Container layoutType="vertical" alignment="top fill" verticalGap={20} horizontalPadding={0} verticalPadding={0}>
                <Input placeholder="Filter icons" onChange={OnFilterIcon} ></Input>
            </Container>
            <Container layoutType="wrap" alignment="center center" verticalGap={10} horizontalPadding={20} verticalPadding={20}
                cornerRadius={5}
                strokeColor="#AFA7D8" strokeType="inside" strokeWidth={2} strokePerSides="all">
                {
                    icons.map(i => (
                        <>
                            <Icon name={i} title={`${i} - click icon for coping`} onClick={() => CopyIcon(i)}></Icon>
                            <Icon name={i} contained={true} title={i} onClick={() => CopyIcon(i)}></Icon>
                        </>
                    ))
                }
            </Container>
        </Card>
    )
}

function FooterSocial() {

    return (
        <Card width={422} height={940} verticalGap={20} >
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={20}>
                <Text fontVariant="Medium" fontSize={28}>Footer social</Text>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090">REACTIONS</Text>
            </Container>
            <Container layoutType="wrap" alignment="center center" verticalGap={0} horizontalPadding={20} verticalPadding={20}
                cornerRadius={5} fill={true}
                strokeColor="#AFA7D8" strokeType="inside" strokeWidth={2} strokePerSides="all">
                <Container layoutType="horizontal" alignment="between left" horizontalPadding={0} verticalPadding={0}>
                    <Icon name={"HeartOutline"} title={"HeartOutline"} text="20k"></Icon>
                    <Icon name={"IoShareSocialOutline"} title={"IoShareSocialOutline"} text="34"></Icon>
                    <Icon name={"IoChatbubbleEllipsesOutline"} title={"IoChatbubbleEllipsesOutline"} text="567"></Icon>
                </Container>
                <Container layoutType="horizontal" alignment="between left" horizontalPadding={0} verticalPadding={0}>
                    <Icon name={"HeartOutline"} contained={true} title={"HeartOutline"} text="20k"></Icon>
                    <Icon name={"IoShareSocialOutline"} contained={true} title={"IoShareSocialOutline"} text="34"></Icon>
                    <Icon name={"IoChatbubbleEllipsesOutline"} contained={true} title={"IoChatbubbleEllipsesOutline"} text="567"></Icon>
                </Container>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090">{"reactions another variant".toUpperCase()}</Text>
            </Container>
            <Container layoutType="wrap" alignment="center center" verticalGap={10} horizontalPadding={20} verticalPadding={20}
                cornerRadius={5} fill={true}
                strokeColor="#AFA7D8" strokeType="inside" strokeWidth={2} strokePerSides="all">
                <Container layoutType="horizontal" alignment="between left" horizontalPadding={0} verticalPadding={0}>
                    <Icon name={"HeartOutline"} title={"HeartOutline"} text="20k"></Icon>
                    <Icon name={"IoShareSocialOutline"} title={"IoShareSocialOutline"} text="34"></Icon>
                    <Icon name={"IoSwapVerticalOutline"} title={"IoSwapVerticalOutline"} text="567"></Icon>
                    <Icon name={"IoPaperPlaneOutline"} title={"IoPaperPlaneOutline"} text="567"></Icon>
                </Container>
                <Container layoutType="horizontal" alignment="between left" horizontalPadding={0} verticalPadding={0}>
                    <Icon name={"HeartOutline"} contained={true} containedText={false} title={"HeartOutline"} text="20k"></Icon>
                    <Icon name={"IoShareSocialOutline"} contained={true} containedText={false} title={"IoShareSocialOutline"} text="34"></Icon>
                    <Icon name={"IoSwapVerticalOutline"} contained={true} containedText={false} title={"IoSwapVerticalOutline"} text="567"></Icon>
                    <Icon name={"IoPaperPlaneOutline"} contained={true} containedText={false} title={"IoPaperPlaneOutline"} text="567"></Icon>
                </Container>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090">{"creative  social content".toUpperCase()}</Text>
            </Container>
            <Container layoutType="wrap" alignment="center center" verticalGap={10} horizontalPadding={20} verticalPadding={20}
                cornerRadius={5} fill={true}
                strokeColor="#AFA7D8" strokeType="inside" strokeWidth={2} strokePerSides="all">
                <Container layoutType="horizontal" alignment="between left" horizontalPadding={0} verticalPadding={0}>
                    <Icon name={"IoLogoDribbble"} title={"IoLogoDribbble"}></Icon>
                    <Icon name={"IoLogoCodepen"} title={"IoLogoCodepen"}></Icon>
                    <Icon name={"IoLogoGithub"} title={"IoLogoGithub"}></Icon>
                    <Icon name={"IoLogoTwitter"} title={"IoLogoTwitter"}></Icon>
                </Container>
                <Container layoutType="horizontal" alignment="between left" horizontalPadding={0} verticalPadding={0}>
                    <Icon name={"IoLogoDribbble"} contained={true} title={"IoLogoDribbble"}></Icon>
                    <Icon name={"IoLogoCodepen"} contained={true} title={"IoLogoCodepen"}></Icon>
                    <Icon name={"IoLogoGithub"} contained={true} title={"IoLogoGithub"}></Icon>
                    <Icon name={"IoLogoTwitter"} contained={true} title={"IoLogoTwitter"}></Icon>
                </Container>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090">{"social network".toUpperCase()}</Text>
            </Container>
            <Container layoutType="wrap" alignment="center center" verticalGap={10} horizontalPadding={20} verticalPadding={20}
                cornerRadius={5} fill={true}
                strokeColor="#AFA7D8" strokeType="inside" strokeWidth={2} strokePerSides="all">
                <Container layoutType="horizontal" alignment="between left" horizontalPadding={0} verticalPadding={0}>
                    <Icon name={"IoLogoPinterest"} title={"IoLogoPinterest"}></Icon>
                    <Icon name={"IoLogoInstagram"} title={"IoLogoInstagram"}></Icon>
                    <Icon name={"IoLogoWhatsapp"} title={"IoLogoWhatsapp"}></Icon>
                    <Icon name={"IoLogoFacebook"} title={"IoLogoFacebook"}></Icon>
                </Container>
                <Container layoutType="horizontal" alignment="between left" horizontalPadding={0} verticalPadding={0}>
                    <Icon name={"IoLogoPinterest"} contained={true} title={"IoLogoPinterest"}></Icon>
                    <Icon name={"IoLogoInstagram"} contained={true} title={"IoLogoInstagram"}></Icon>
                    <Icon name={"IoLogoWhatsapp"} contained={true} title={"IoLogoWhatsapp"}></Icon>
                    <Icon name={"IoLogoFacebook"} contained={true} title={"IoLogoFacebook"}></Icon>
                </Container>
            </Container>
        </Card>
    )
}

function MediaWithIcon() {
    return (
        <Container layoutType="horizontal" alignment="top center" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
            <Avatar image={PROFILE_IMAGE} />
            <Container layoutType="vertical" alignment="center stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0} fill={true} fillItemSelf={true}>
                <Text fontVariant="Medium" fontSize={20} lineHeight={25}>Elton Platt</Text>
                <Text color="#78858F">Web Development</Text>
            </Container>
            <Icon name={"IoEllipsisVertical"} title={"More Options"}></Icon>
        </Container>
    )
}

function Media() {

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
            <Container layoutType="vertical" alignment="top center" verticalGap={10} horizontalPadding={0} verticalPadding={0}>
                <Avatar image={PROFILE_IMAGE} />
                <Container layoutType="vertical" alignment="center stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0} fill={true} fillItemSelf={true}>
                    <Text fontVariant="Medium" fontSize={20} lineHeight={25}>Elton Platt</Text>
                    <Text color="#78858F">Web Development</Text>
                </Container>
                <Container layoutType="horizontal" alignment="center stretch" verticalGap={10} horizontalPadding={0} verticalPadding={0} fill={true} fillItemSelf={true}>
                    <Button label={"BUTTON"}></Button>
                    <Button label={"BUTTON"} type="Outline"></Button>
                </Container>
            </Container>
        </Card>
    )
}

function Avatars() {

    return (
        <Card width={453} height={600} verticalGap={20} >
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={20}>
                <Text fontVariant="Medium" fontSize={28}>Avatars</Text>
            </Container>
            <Container layoutType="wrap" alignment="center center" verticalGap={10} horizontalPadding={20} verticalPadding={20}
                cornerRadius={5} fill={true}
                strokeColor="#AFA7D8" strokeType="inside" strokeWidth={2} strokePerSides="all">
                <Container layoutType="horizontal" alignment="between center" horizontalPadding={0} verticalPadding={0}>
                    <Avatar size="xs" image={PROFILE_IMAGE} />
                    <Avatar size="sm" image={PROFILE_IMAGE} />
                    <Avatar image={PROFILE_IMAGE} />
                    <Avatar size="lg" image={PROFILE_IMAGE} />
                    <Avatar size="xl" image={PROFILE_IMAGE} />
                </Container>
            </Container>
            <Container layoutType="wrap" alignment="center center" verticalGap={10} horizontalPadding={20} verticalPadding={20}
                cornerRadius={5} fill={true}
                strokeColor="#AFA7D8" strokeType="inside" strokeWidth={2} strokePerSides="all">
                <Container layoutType="horizontal" alignment="between center" horizontalPadding={0} verticalPadding={0}>
                    <Avatar size="xs" outline={true} image={PROFILE_IMAGE} />
                    <Avatar size="sm" outline={true} image={PROFILE_IMAGE} />
                    <Avatar size="md" outline={true} image={PROFILE_IMAGE} />
                    <Avatar size="lg" outline={true} image={PROFILE_IMAGE} />
                    <Avatar size="xl" outline={true} image={PROFILE_IMAGE} />
                </Container>
            </Container>
            <Container layoutType="wrap" alignment="center center" verticalGap={10} horizontalPadding={20} verticalPadding={20}
                cornerRadius={5} fill={true}
                strokeColor="#AFA7D8" strokeType="inside" strokeWidth={2} strokePerSides="all">
                <Container layoutType="horizontal" alignment="between center" horizontalPadding={0} verticalPadding={0}>
                    <Avatar size="xs" online={true} image={PROFILE_IMAGE} />
                    <Avatar size="sm" online={true} image={PROFILE_IMAGE} />
                    <Avatar size="md" online={true} image={PROFILE_IMAGE} />
                    <Avatar size="lg" online={true} image={PROFILE_IMAGE} />
                    <Avatar size="xl" online={false} backgroundColor={"red"} borderColor={"#FFFFFF"} innerCircleColor="#5DCA07" image={PROFILE_IMAGE} />
                </Container>
            </Container>
        </Card>
    )
}
function BasicCard() {

    return (
        <Card width={410} height={2102} verticalGap={20} backgroundColor="#F4F4F4">
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={20}>
                <Text fontVariant="Medium" fontSize={28}>Basic card</Text>
            </Container>
            <Card useFullWidth verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                    <MediaWithIcon />
                </Container>
                <Image src={CARD_IMAGE_1} />
                <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                    <Text color="#78858F" fontSize={16}>3 September 2019</Text>
                </Container>
            </Card>
        </Card>
    )
}
function ImageGroup() {

    return (
        <Card width={422} height={940} verticalGap={20} >
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={20}>
                <Text fontVariant="Medium" fontSize={28}>Image group</Text>
            </Container>
        </Card>
    )
}
function Profile() {

    return (
        <Card width={422} height={940} verticalGap={20} >
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={20}>
                <Text fontVariant="Medium" fontSize={28}>Profile</Text>
            </Container>
        </Card>
    )
}

export default function Preview() {

    return (

        <ThemeProvider theme={{ theme }}>
            <PreviewWrapper>
                <Forms />
                <Container horizontalPadding={0} verticalPadding={0}>
                    <Buttons />
                    <Badges />
                    <Icons />
                </Container>
                <FooterSocial />
                <Media />
                <Avatars />
                <BasicCard />
                <ImageGroup />
                <Profile />
            </PreviewWrapper>
        </ThemeProvider>
    )
}