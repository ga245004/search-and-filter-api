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
import PROFILE_COVER_1 from "./images/profile-cover-1.jpg";
import Image from "./components/Image/Image";
import Medias, { MediaVerticalWithButtons } from "./Parts/Medias";
import { BasicCard } from "./Parts/Cards";

const ICON_LIST = Object.keys(Io5Icon);
const DATA_IMAGE_1 = `data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7`;
const ComponentsWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #E5E5E5;
    padding: 24px;
    gap: 24px;
    justify-content: flex-start;
    align-items: flex-start;
`

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
                    icons.map((i, index) => (
                        <>  
                            <Icon size={index < 4 ? "sm" : index > 12 ? "lg" : "md"} name={i} title={`${i} - click icon for coping`} onClick={() => CopyIcon(i)}></Icon>
                            <Icon size={index < 4  ? "sm" : index > 12 ? "lg" : "md"}  name={i} contained={true} title={i} onClick={() => CopyIcon(i)}></Icon>
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


function BasicCards() {

    return (
        <Card width={410} height={2102} verticalGap={20} backgroundColor="#F4F4F4">
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={20}>
                <Text fontVariant="Medium" fontSize={28}>Basic card</Text>
            </Container>
            <BasicCard />
            <Container layoutType="wrap" alignment="top stretch" verticalGap={20} horizontalPadding={5} verticalPadding={5}
                cornerRadius={5}
                strokeColor="#7B61FF" strokeType="inside" strokeWidth={2} strokePerSides="all">
                <Card useFullWidth verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                    <Container layoutType="horizontal" alignment="top center" horizontalPadding={25} verticalPadding={25} >
                        <Text fillItemSelf fontVariant="Medium" fontSize={37}>Trends</Text>
                        <Icon name={"IoSunny"} contained={true} ></Icon>
                    </Container>
                    <Container layoutType="horizontal" alignment="top left" horizontalPadding={25} verticalPadding={25} >
                        <Text fillItemSelf fontVariant="Regular" fontSize={16}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun...</Text>
                    </Container>
                    <Container layoutType="horizontal" alignment="top center" horizontalPadding={25} verticalPadding={25} >
                        <Text fillItemSelf fontVariant="Medium" fontSize={16}>Light theme</Text>
                        <Icon name={"IoToggle"} contained={false} ></Icon>
                    </Container>
                </Card>
                <Card useFullWidth verticalGap={0} horizontalPadding={0} verticalPadding={0} dark={true}>
                    <Container layoutType="horizontal" alignment="top center" horizontalPadding={25} verticalPadding={25} >
                        <Text fillItemSelf fontVariant="Medium" fontSize={37} color="#FFFFFF">Trends</Text>
                        <Icon name={"IoSunny"} contained={false} color="#F8D000"></Icon>
                    </Container>
                    <Container layoutType="horizontal" alignment="top center" horizontalPadding={25} verticalPadding={25} >
                        <Text fillItemSelf fontVariant="Regular" fontSize={16} color="#FFFFFF">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun...</Text>
                    </Container>
                    <Container layoutType="horizontal" alignment="top center" horizontalPadding={25} verticalPadding={25} >
                        <Text fillItemSelf fontVariant="Medium" fontSize={16} color="#FFFFFF">Dark theme</Text>
                        <Icon name={"IoToggle"} contained={false} color="#1B93D7"></Icon>
                    </Container>
                </Card>
            </Container>
            <Card useFullWidth verticalGap={0} horizontalPadding={0} verticalPadding={0} dark={false}>
                <Container layoutType="horizontal" alignment="top center" horizontalGap={6} verticalGap={6} horizontalPadding={25} verticalPadding={25} >
                    <Text fontVariant="Bold" fontSize={50}>$39</Text>
                    <Text fontVariant="Regular" fontSize={16} >/month</Text>
                </Container>
                <Container layoutType="vertical" alignment="top stretch" verticalGap={27} horizontalPadding={25} verticalPadding={25} >
                    <Text fontVariant="Medium" fontSize={30} color="#E99A00">Basic License</Text>
                    <Text fontVariant="Regular" fontSize={16} >Our goverment backed plan designed to keep your business legaly and secure</Text>
                    <Container fillItemSelf layoutType="vertical" alignment="top center" verticalGap={0} horizontalPadding={0} verticalPadding={0}
                        strokeColor="#F3F3F3" strokeType="solid" strokeWidth={1} strokePerSides="all" />
                    <Container fillItemSelf layoutType="vertical" alignment="top left" verticalGap={10} horizontalPadding={0} verticalPadding={0}
                    >
                        {[
                            "Secure your customer usage",
                            "View basic analytics",
                            "Up to 350 customer profiles",
                            "Custom network name"
                        ].map((i, index) => (
                            <Container index={`text-${index}`} fillItemSelf layoutType="horizontal" alignment="top center" verticalGap={0} horizontalPadding={0} verticalPadding={0}
                            >
                                <Icon size="sm" name={"IoCheckmarkSharp"} contained={false} color="#F3B007"></Icon>
                                <Text fontVariant="Regular" fontSize={16} >{i}</Text>
                            </Container>
                        ))}
                    </Container>
                </Container>
                <Container layoutType="horizontal" alignment="center center" verticalGap={6} horizontalPadding={25} verticalPadding={25} >

                    <Button label={"Your current plan"} upperCase type="Outline"></Button>
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

            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase>{"variant 1"}</Text>
            </Container>
            <Container layoutType="vertical" alignment="top stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                <Container layoutType="horizontal" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                </Container>
                <Container layoutType="horizontal" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                </Container>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase>{"variant 2"}</Text>
            </Container>
            <Container layoutType="vertical" alignment="top stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                <Container layoutType="horizontal" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                </Container>
                <Container layoutType="horizontal" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                </Container>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase>{"variant 3"}</Text>
            </Container>
            <Container layoutType="horizontal" alignment="top center" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                <Container fillItemSelf layoutType="vertical" alignment="top stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                </Container>
                <Container fillItemSelf layoutType="vertical" alignment="top stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                    <Image backgroundColor="#F2F2F2" height={55} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={55} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={55} src={DATA_IMAGE_1} />
                </Container>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase>{"variant 4"}</Text>
            </Container>
            <Container layoutType="horizontal" alignment="top center" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                <Container fillItemSelf layoutType="vertical" alignment="top stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                    <Image backgroundColor="#F2F2F2" height={55} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={55} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={55} src={DATA_IMAGE_1} />
                </Container>
                <Container fillItemSelf layoutType="vertical" alignment="top stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                </Container>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase>{"variant 5"}</Text>
            </Container>
            <Container layoutType="horizontal" alignment="top center" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                <Container fillItemSelf layoutType="vertical" alignment="top stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                </Container>
                <Container fillItemSelf layoutType="vertical" alignment="top stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                </Container>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase>{"variant 6"}</Text>
            </Container>
            <Container layoutType="horizontal" alignment="top center" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                <Container fillItemSelf layoutType="vertical" alignment="top stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                    <Image backgroundColor="#F2F2F2" height={175} src={DATA_IMAGE_1} />
                </Container>
                <Container fillItemSelf layoutType="vertical" alignment="top stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                </Container>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase>{"variant 7"}</Text>
            </Container>
            <Container layoutType="horizontal" alignment="top center" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                <Container fillItemSelf layoutType="vertical" alignment="top stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                    <Image backgroundColor="#F2F2F2" height={85} src={DATA_IMAGE_1} />
                </Container>
                <Container fillItemSelf layoutType="vertical" alignment="top stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                    <Image backgroundColor="#F2F2F2" height={175} src={DATA_IMAGE_1} />
                </Container>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase>{"variant 8"}</Text>
            </Container>
            <Image backgroundColor="#F2F2F2" src={DATA_IMAGE_1} />
        </Card>

    )
}
function Profile() {

    return (
        <Card width={422} height={940} verticalGap={20} >
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={20}>
                <Text fontVariant="Medium" fontSize={28}>Profile</Text>
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase>{"variant 1"}</Text>
            </Container>
            <Container layoutType="vertical" alignment="top center" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                <Image height={214} backgroundColor="#F2F2F2" src={PROFILE_COVER_1} />
                <Avatar image={PROFILE_IMAGE} backgroundColor="#F2F2F2" borderColor="#FFFFFF" size="xl" shift="-15%" />
            </Container>
            <Container layoutType="vertical" alignment="top left" verticalGap={20} horizontalPadding={0} verticalPadding={10}>
                <Text color="#909090" upperCase>{"variant 2"}</Text>
            </Container>
            <Container layoutType="vertical" alignment="top stretch" verticalGap={10} horizontalPadding={0} verticalPadding={0}>
                <Container layoutType="vertical" alignment="top center" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                    <Image height={214} backgroundColor="#F2F2F2" src={PROFILE_COVER_1} />
                    <Avatar image={PROFILE_IMAGE} backgroundColor="#F2F2F2" borderColor="#FFFFFF" size="xl" shift="-15%" />
                </Container>
                <MediaVerticalWithButtons showAvatar={false} />
            </Container>
        </Card>
    )
}

export default function Components() {

    return (

        <ThemeProvider theme={{ theme }}>
            <ComponentsWrapper>
                <Forms />
                <Container horizontalPadding={0} verticalPadding={0}>
                    <Buttons />
                    <Badges />
                </Container>

                <Container horizontalPadding={0} verticalPadding={0}>
                    <Icons />
                    <FooterSocial />
                </Container>
                <Medias />
                <Avatars />
                <BasicCards />
                <ImageGroup />
                <Profile />
            </ComponentsWrapper>
        </ThemeProvider>
    )
}