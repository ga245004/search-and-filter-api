import styled, { ThemeProvider } from "styled-components"
import { Container } from "./components/Container/Container";
import { BasicCard, CardWithHeader } from "./Parts/Cards";

import Fermin_Image from "./images/Fermin.png";
import Julia_Image from "./images/Julia.png";
import JENNY_IMAGE from "./images/Jenny.avif";
import YOLANDA_IMAGE from "./images/Yolanda.jpg";
import MARIA_IMAGE from "./images/Marina.png";
import Card from "./components/Card/Card";
import Image from "./components/Image/Image";
import Text from "./components/Text/Text";
import Icon from "./components/Icon/Icon";
import Button from "./components/Button/Button";
import Avatar from "./components/Avatar/Avatar";
import { MediaWithIcon } from "./Parts/Medias";
import Badge from "./components/Badge/Badge";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Input from "./components/Input/Input";


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
`;

const theme = {

};

export default function Preview() {

    return (

        <ThemeProvider theme={{ theme }}>
            <ComponentsWrapper>
                <Container layoutType="vertical" alignment="top stretch" width={360} horizontalPadding={0} verticalPadding={0}>
                    <BasicCard footerText="This is a basic card" />
                    <CardWithHeader noRing={true} avatarImage={YOLANDA_IMAGE} title="Yolanda" subtitle="Web Development" actionName="IoCameraOutline" />
                    <CardWithHeader size="lg" avatarImage={JENNY_IMAGE} title="Jenny Wilson" subtitle="" actionName=""
                        ringColors={["#F600DE", "#EC0060", "#FF9900"]} />
                    <CardWithHeader dark={true} noRing={true} avatarImage={MARIA_IMAGE} title="Marina Flick" subtitle="Web Development" actionName="IoAddSharp" />
                    <Card layoutType="horizontal" alignment="top stretch" height={120} useFullWidth horizontalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Image src={Julia_Image} width={107} height={120} />
                        <Container fillItemSelf layoutType="vertical" alignment="center left" verticalGap={0}>
                            <Text fontVariant="Medium" fontSize={20}>Julia Robert</Text>
                            <Text fontSize={16} color="#78858F">Frontend development</Text>
                        </Container>
                    </Card>
                    <Card layoutType="horizontal" alignment="top stretch" height={120} useFullWidth horizontalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Container fillItemSelf layoutType="vertical" alignment="center right" verticalGap={0}>
                            <Text fontVariant="Medium" fontSize={20}>Fermin vargas</Text>
                            <Text fontSize={16} color="#78858F">Construction manager</Text>
                        </Container>
                        <Image filename={"Fermin.png"} width={107} height={120} />
                    </Card>
                    <Card layoutType="horizontal" alignment="top stretch" height={120} useFullWidth horizontalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Image filename={"Maria.png"} width={107} height={120} />
                        <Container fillItemSelf layoutType="horizontal" alignment="between center" horizontalGap={0}>
                            <Text fontVariant="Medium" fontSize={20}>Maria</Text>
                            <Icon size="lg" name="IoCall" rotate={270} />
                        </Container>
                    </Card>
                    <Card layoutType="horizontal" alignment="top stretch" height={120} useFullWidth horizontalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Image filename={"Jhony.png"} width={107} height={120} />
                        <Container fillItemSelf layoutType="horizontal" alignment="between center" horizontalGap={0}>
                            <Text fontVariant="Medium" fontSize={24}>Jhony</Text>
                            <Button label="Follow" upperCase type="Pill"></Button>
                        </Container>
                    </Card>
                    <Card layoutType="horizontal" alignment="top stretch" height={120} useFullWidth horizontalGap={10}>
                        <Image filename={"Jenny.png"} width={80} height={80} isCircle />
                        <Container fillItemSelf layoutType="vertical" alignment="center stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0}>
                            <Text fontVariant="Medium" fontSize={20}>Jenny Wilson</Text>
                            <Text fontSize={16} clampLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</Text>
                        </Container>
                    </Card>

                    <Card useFullWidth layoutType="vertical" alignment="top stretch" horizontalPadding={30} verticalPadding={30} verticalGap={8}>
                        <Container layoutType="vertical" alignment="top right" horizontalPadding={0} verticalPadding={0}>
                            <Icon name="IoEllipsisVerticalSharp"></Icon>
                        </Container>
                        <Container layoutType="vertical" alignment="top center" horizontalPadding={0} verticalPadding={0}>
                            <Image filename={"Sunshine.png"} width={172} height={172} isCircle />
                        </Container>
                        <Container layoutType="vertical" alignment="top center" horizontalPadding={0} verticalPadding={0} verticalGap={5}>
                            <Text fontVariant="Medium" fontSize={28}>{"Sunshine - Mix"}</Text>
                            <Text fontSize={16}>{"Lookee Stefane"}</Text>
                        </Container>
                        <Container layoutType="horizontal" alignment="center center" horizontalPadding={0} verticalPadding={15} verticalGap={10} horizontalGap={10}>
                            <Text fontSize={12} lineHeight={22} letterSpacing={0.25}>{"03:34"}</Text>
                            <ProgressBar backgroundColor="#EBEBEB" processBarColor="#A823F9" thickness={4} completed={62.6} />
                            <Text fontSize={12} lineHeight={22} letterSpacing={0.25}>{"02:04"}</Text>
                        </Container>
                        <Container layoutType="horizontal" alignment="top center" horizontalPadding={0} verticalPadding={0}>
                            <Icon name="IoRepeatSharp" />
                            <Icon name="IoPlayBackSharp" />
                            <Icon name="PlaySharp" contained={true} size="lg"></Icon>
                            <Icon name="IoPlayForwardSharp" />
                            <Icon name="IoShuffleSharp" />
                        </Container>
                    </Card>

                    <Card layoutType="horizontal" height={120}
                        useFullWidth horizontalGap={15} horizontalPadding={0} verticalPadding={0} rightPadding={35}>
                        <Image filename={"Weeknd.png"} width={96} height={120} />
                        <Container layoutType="vertical" alignment="center stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0} fillItemSelf={true}>
                            <Text fontVariant="Medium" fontSize={20} lineHeight={25}>{"The Weeknd"}</Text>
                            <Text fontSize={14} color="#787878" lineHeight={22} letterSpacing={0.25} clampLines={1} >Take My Breath ( Official video )</Text>
                        </Container>
                        <Icon name="IoPlay" contained={true} />
                    </Card>

                    <Card dark useFullWidth layoutType="vertical" alignment="top stretch" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Container layoutType="horizontal" alignment="between stretch" horizontalPadding={25} verticalPadding={25}>
                            <Container layoutType="horizontal" alignment="center center" horizontalGap={10} verticalGap={10} horizontalPadding={0} verticalPadding={0}>
                                <Badge label="Trends" upperCase backgroundColor="#CD23A8" color="#FFFFFF" />
                                <Badge label="Design" upperCase backgroundColor="#00D9F5" color="#000000" />
                            </Container>
                            <Icon name="HeartOutline" color="#FFFFFF" size="sm" padding={5} />
                        </Container>
                        <Container layoutType="vertical" alignment="center stretch" horizontalPadding={25} verticalPadding={25} verticalGap={25}>
                            <MediaWithIcon dark ringColors={["#FF004D", "#B403D1", "#E90054", "#D74D00", "#C56105", "#DC9E00"]} propsAvatar={{ innerCircleColor: "#0A0C0E", backgroundColor: "#FFFFFF" }} />
                            <Text fontVariant="Bold" fontSize={28}
                                useLinearGradient linearGradientColors={["#E65C00", "#F9D423"]} linearGradientDirection="right"
                            >Web Design templates Selection</Text>
                        </Container>
                        <Container layoutType="horizontal" alignment="top center" horizontalPadding={25} verticalPadding={25}>
                            <Text fontVariant="Regular" fontSize={13} color="#FFFFFF" lineHeight={15} letterSpacing={0.4}>{"16 January 2017"}</Text>
                        </Container>
                    </Card>

                    <Card useFullWidth backgroundColor="#EBD18D" layoutType="vertical" alignment="top stretch" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Container layoutType="horizontal" alignment="between stretch" horizontalPadding={25} verticalPadding={25}>
                            <Container layoutType="horizontal" alignment="top center" horizontalGap={10} verticalGap={10} horizontalPadding={0} verticalPadding={0}
                                clipContent width={85} >
                                <Container layoutType="vertical" alignment="center center" verticalGap={10} horizontalPadding={10} verticalPadding={10}
                                    cornerRadius={50} width={40} height={40} backgroundColor="#000000"
                                    style={{ transform: "translateX(0px)", zIndex: "3" }} >
                                    <Text fontVariant="Medium" fontSize={16} lineHeight={23} letterSpacing={0.5} color="#FFFFFF">+3</Text>
                                </Container>
                                <Avatar filename="Jad.png" outline={false} size="sm" style={{ transform: "translateX(-14px)", zIndex: "2" }} />
                                <Avatar filename="June.png" outline={false} size="sm" style={{ transform: "translateX(-29px)", zIndex: "1" }} />
                            </Container>
                            <Icon name="IoEllipsisVertical" backgroundColor="#F6DB96" size="sm" padding={5} />
                        </Container>
                        <Container layoutType="vertical" alignment="center stretch" horizontalPadding={25} verticalPadding={25} verticalGap={15}>
                            <Text fontVariant="Bold" fontSize={33} lineHeight={33 * 1.3} >Web Design templates Selection</Text>
                            <Text fontSize={16} lineHeight={23} >Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</Text>
                        </Container>
                        <Container layoutType="vertical" alignment="center stretch" horizontalPadding={25} verticalPadding={25} verticalGap={5}>
                            <Text fontVariant="Medium" fontSize={14} color="#000000" lineHeight={23} letterSpacing={0.5}>{"135 Works / 45% "}</Text>
                            <ProgressBar backgroundColor="#CDB26E" processBarColor="#000000" thickness={4} completed={45} />
                        </Container>
                    </Card>

                    <Card useFullWidth backgroundColor="#8DD4EB" layoutType="vertical" alignment="top stretch" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Container layoutType="horizontal" alignment="between stretch" horizontalPadding={25} verticalPadding={25}>
                            <Container layoutType="horizontal" alignment="top center" horizontalGap={10} verticalGap={10} horizontalPadding={0} verticalPadding={0}
                                clipContent width={85} >
                                <Container layoutType="vertical" alignment="center center" verticalGap={10} horizontalPadding={10} verticalPadding={10}
                                    cornerRadius={50} width={40} height={40} backgroundColor="#000000"
                                    style={{ transform: "translateX(0px)", zIndex: "3" }} >
                                    <Text fontVariant="Medium" fontSize={16} lineHeight={23} letterSpacing={0.5} color="#FFFFFF">+3</Text>
                                </Container>
                                <Avatar filename="Jad.png" outline={false} size="sm" style={{ transform: "translateX(-14px)", zIndex: "2" }} />
                                <Avatar filename="June.png" outline={false} size="sm" style={{ transform: "translateX(-29px)", zIndex: "1" }} />
                            </Container>
                            <Icon name="IoEllipsisVertical" backgroundColor="#8DD4EB" size="sm" padding={5} />
                        </Container>
                        <Container layoutType="vertical" alignment="center stretch" horizontalPadding={25} verticalPadding={25} verticalGap={15}>
                            <Text fontVariant="Bold" fontSize={33} lineHeight={33 * 1.3} >Web Design templates Selection</Text>
                            <Text fontSize={16} lineHeight={23} >Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod.</Text>
                        </Container>
                        <Container layoutType="vertical" alignment="center stretch" horizontalPadding={25} verticalPadding={25} verticalGap={5}>
                            <Text fontVariant="Medium" fontSize={14} color="#000000" lineHeight={23} letterSpacing={0.5}>{"135 Works / 45% "}</Text>
                            <ProgressBar backgroundColor="#68B1C9" processBarColor="#000000" thickness={4} completed={45} />
                        </Container>
                    </Card>

                    <Card useFullWidth layoutType="vertical" alignment="top stretch" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Container layoutType="horizontal" alignment="between stretch" horizontalPadding={25} verticalPadding={25} verticalGap={0} horizontalGap={0}>
                            <Text fontVariant="Bold" fontSize={26} lineHeight={25} letterSpacing={26 * .01}>Strawberry Cake</Text>
                            <Container layoutType="horizontal" alignment="between stretch" horizontalPadding={0} verticalPadding={0} verticalGap={5} horizontalGap={5}>
                                <Icon name="IoLeaf" backgroundColor="#2ECC71" color="#FFFFFF" size="sm" padding={4} width={24} height={24} rotate={90} />
                                <Icon name="IoBonfire" backgroundColor="#F8593B" color="#FFFFFF" size="sm" padding={4} width={24} height={24} />
                            </Container>
                        </Container>
                        <Image filename="card-image-6.png" height={210} />
                        <Container layoutType="horizontal" alignment="between stretch" horizontalPadding={25} verticalPadding={25} verticalGap={10} horizontalGap={10}>
                            <Text fontSize={16} lineHeight={23} letterSpacing={0.5}>
                                Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.
                            </Text>
                        </Container>

                        <Container layoutType="horizontal" alignment="between stretch" horizontalPadding={25} verticalPadding={25} verticalGap={0} horizontalGap={0}>
                            <Container layoutType="horizontal" alignment="between stretch" horizontalPadding={0} verticalPadding={0} verticalGap={5} horizontalGap={5}>
                                <Text fontVariant="Bold" fontSize={26} lineHeight={25} letterSpacing={0} color="#081F32">$13.90</Text>
                                <Text fontSize={16} lineHeight={25} letterSpacing={0} color="#F8593B" >$18.90</Text>
                            </Container>
                            <Button label="order now" upperCase type="Outline" />
                        </Container>
                    </Card>

                    <Card useFullWidth layoutType="vertical" alignment="top stretch" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Container layoutType="vertical" alignment="top stretch" verticalGap={15} horizontalPadding={25} verticalPadding={25}>
                            <MediaWithIcon filename="Alexandro.png" title="Alexandro Vargas" subtitle="Ayer 23:50" />
                        </Container>
                        <Image filename="card-image-7.png" height={315} />
                        <Container layoutType="horizontal" alignment="top stretch" verticalGap={0} bottomPadding={10} horizontalPadding={25} verticalPadding={25}>
                            <Container fillItemSelf layoutType="horizontal" alignment="top stretch" verticalGap={0} bottomPadding={0} horizontalPadding={0} verticalPadding={0}>
                                <Icon name="IoThumbsUpOutline" backgroundColor="#125CED" color="#F8F8F8" size="sm" padding={4} width={24} height={24} />
                                <Icon name="IoHeartHalf" backgroundColor="#FFCC4D" color="#FFFFFF" size="sm" padding={4} width={24} height={24} style={{ transform: "translateX(-4px)" }} />
                                <Icon name="IoHeart" backgroundColor="#DC101D" color="#F5F8FA" size="sm" padding={4} width={24} height={24} style={{ transform: "translateX(-6px)" }} />
                            </Container>
                            <Text fontSize={16} letterSpacing={0.5} color="#565656">27 comments</Text>
                        </Container>
                        <Container layoutType="horizontal" alignment="top center" verticalGap={3} horizontalPadding={25} verticalPadding={25}
                            style={{ position: 'relative' }}>
                            <Avatar size="sm" filename="profile.png" />
                            <Input size="sm" fillItemSelf pill placeholder="Placeholder">

                            </Input>
                            <Container layoutType="horizontal" alignment="top right" verticalGap={8} horizontalPadding={0} verticalPadding={0}
                                style={{ position: 'absolute', right: 40 }}
                            >
                                <Icon name="IoCameraOutline" size="sm" padding={1} width={20} height={20} />
                                <Icon name="IoAttachOutline" size="sm" padding={1} width={20} height={20} />
                                <Icon name="IoGiftOutline" size="sm" padding={1} width={20} height={20} />
                            </Container>

                        </Container>
                    </Card>

                    <Card useFullWidth layoutType="horizontal" alignment="top stretch" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Container fillItemSelf layoutType="vertical" alignment="between left" verticalGap={3} horizontalPadding={25} verticalPadding={25} topPadding={30}
                        >
                            <Container layoutType="vertical" alignment="between left" verticalGap={20} horizontalPadding={0} verticalPadding={0}>
                                <Container layoutType="vertical" alignment="between left" verticalGap={10} horizontalPadding={0} verticalPadding={0}>
                                    <Text fontVariant="Black" fontSize={48}>Buy</Text>
                                    <Text fontVariant="Black" fontSize={36}>Now</Text>
                                </Container>

                                <Text fontVariant="Medium" fontSize={20}>$8.99</Text>
                            </Container>

                            <Icon name="Heart" color="#FF565E" contained size="xl" />
                        </Container>
                        <Container fillItemSelf layoutType="vertical" alignment="top stretch" verticalGap={10} horizontalPadding={0} verticalPadding={0} rightPadding={30}
                        >
                            <Image filename="man.png" width={178} height={554} />
                        </Container>
                    </Card>
                </Container>
                {
                    //2nd Column
                }
                <Container layoutType="vertical" alignment="top stretch" width={360} horizontalPadding={0} verticalPadding={0}>
                    <BasicCard imageFilename="" content="Minim dolor in amet nulla laboris" footerText="3 September 2019" />
                    <Card useFullWidth useAutoHeight layoutType="horizontal" alignment="center center"
                        useLinearGradient linearGradientColors={["#C84E89", "#F15F79"]} linearGradientDirection="right"
                    >
                        <Text fontVariant="Bold" fontSize={36} color="#FFFFFF">Python</Text>
                    </Card>
                    <Card useFullWidth useAutoHeight layoutType="horizontal" alignment="center center"
                        useLinearGradient linearGradientColors={["#FF512F", "#F09819"]} linearGradientDirection="right"
                    >
                        <Text fontVariant="Bold" fontSize={36} color="#FFFFFF">Javascript</Text>
                    </Card>
                    <Card useFullWidth useAutoHeight layoutType="vertical" alignment="top stretch" horizontalPadding={0} verticalPadding={0} verticalGap={0}>
                        <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} verticalGap={10}>
                            <Text fontVariant="Bold" fontSize={29} color="#000000" lineHeight={38}>Minim dolorin</Text>
                            <Text fontVariant="Regular" fontSize={16} color="#606060" lineHeight={23}>Minim dolor in amet nulla laboris enim dolore consequat.</Text>
                        </Container>
                        <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} verticalGap={20}>
                            {[{
                                title: "Wade Warren",
                                subtitle: "Dog Trainer",
                                imageFilename: "Wade.png",
                                buttonLabel: "Follow"
                            },
                            {
                                title: "Robert Fox",
                                subtitle: "President of Sales",
                                imageFilename: "Robert.png",
                                buttonLabel: "Follow"
                            },
                            {
                                title: "Jane Cooper",
                                subtitle: "Nursing Assistant",
                                imageFilename: "Jane.png",
                                buttonLabel: "Follow"
                            },
                            {
                                title: "Jay Esteban",
                                subtitle: "Software Tester",
                                imageFilename: "Jay.png",
                                buttonLabel: "Follow"
                            },
                            {
                                title: "Dianne Russell",
                                subtitle: "Web Designer",
                                imageFilename: "Dianne.png",
                                buttonLabel: "Follow"
                            }].map(p => (
                                <Container key={p.title} layoutType="horizontal" alignment="between center" horizontalPadding={0} verticalPadding={0} verticalGap={10}>
                                    <Avatar filename={p.imageFilename} />
                                    <Container layoutType="vertical" alignment="center stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0} fill={true} fillItemSelf={true}>
                                        <Text fontVariant="Medium" fontSize={20} lineHeight={25}>{p.title}</Text>
                                        <Text fontSize={16} color="#78858F">{p.subtitle}</Text>
                                    </Container>
                                    <Button label={p.buttonLabel} upperCase backgroundColor="#C223EA" borderColor="#C223EA"></Button>
                                </Container>
                            ))}
                        </Container>
                        <Container layoutType="horizontal" alignment="between center" horizontalPadding={25} verticalPadding={25} verticalGap={10} backgroundColor={"#FBFBFB"}>
                            <Text upperCase fontVariant="Medium" fontSize={12} color="#A0A0A0" letterSpacing={0.5} >543 students</Text>
                            <Text upperCase fontVariant="Medium" fontSize={12} color="#000000" letterSpacing={0.5}>VIEW ALL MEMBER</Text>
                        </Container>
                    </Card>

                    <Card dark={true} backgroundColor="#080913" layoutType="horizontal" alignment="top stretch" height={120} useFullWidth horizontalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Image filename={"Alex.png"} width={107} height={120} />
                        <Container fillItemSelf backgroundColor="#080913" layoutType="horizontal" alignment="between center" verticalGap={0}>
                            <Text fontVariant="Medium" fontSize={24} color="#FFFFFF" >Alex</Text>
                            <Button label="Add" upperCase type="Outline-pill" backgroundColor="#FFFFFF" ></Button>
                        </Container>
                    </Card>

                    <Card dark={true} backgroundColor="#090909" useFullWidth layoutType="vertical" alignment="top stretch" horizontalPadding={30} verticalPadding={30} verticalGap={8}>
                        <Container layoutType="vertical" alignment="top left" horizontalPadding={0} verticalPadding={0}>
                            <Icon name="IoMenu" color="#FFFFFF"></Icon>
                        </Container>
                        <Container layoutType="horizontal" alignment="center center" horizontalPadding={35} verticalPadding={35} horizontalGap={10} isCircle backgroundColor="#080808">
                            <Image filename={"Runaway.png"} width={172} height={172} isCircle
                                useDropShadow shadowOpacity={0.04} spread={32}
                            />
                        </Container>
                        <Container layoutType="vertical" alignment="top center" horizontalPadding={0} verticalPadding={0} verticalGap={5}>
                            <Text fontVariant="Medium" fontSize={28} color="#FFFFFF">{"Runaway"}</Text>
                            <Text fontSize={16} color="#B9B9B9">{"Smalltown Boy , Shane D"}</Text>
                        </Container>
                        <Container layoutType="horizontal" alignment="center center" horizontalPadding={0} verticalPadding={15} verticalGap={10} horizontalGap={10}>
                            <Text fontSize={12} lineHeight={22} letterSpacing={0.25}>{"03:34"}</Text>
                            <Container fillItemSelf layoutType="horizontal" alignment="center center" horizontalPadding={1} verticalPadding={4} verticalGap={10}>
                                <Container fillItemSelf layoutType="vertical" alignment="center left" horizontalPadding={0} verticalPadding={0} verticalGap={10} backgroundColor="#424242" cornerRadius={50}>
                                    <Container layoutType="horizontal" alignment="center center" horizontalPadding={0} verticalPadding={0} verticalGap={10} backgroundColor="#FFFFFF" height={4} width={113} cornerRadius={50}>

                                    </Container>
                                </Container>
                            </Container>
                            <Text fontSize={12} lineHeight={22} letterSpacing={0.25}>{"02:04"}</Text>
                        </Container>
                        <Container layoutType="horizontal" alignment="top center" horizontalPadding={0} verticalPadding={0}>
                            <Icon name="IoRepeatSharp" color="#FFFFFF" />
                            <Icon name="IoPlayBackSharp" color="#FFFFFF" />
                            <Icon name="PlaySharp" contained={true} size="lg"></Icon>
                            <Icon name="IoPlayForwardSharp" color="#FFFFFF" />
                            <Icon name="IoShuffleSharp" color="#FFFFFF" />
                        </Container>
                    </Card>

                    <Card dark={true} backgroundColor="#080808" layoutType="horizontal" height={120}
                        useFullWidth horizontalGap={15} horizontalPadding={0} verticalPadding={0} rightPadding={35}>
                        <Image filename={"Coldplay.png"} width={96} height={120} />
                        <Container layoutType="vertical" alignment="center stretch" verticalGap={5} horizontalPadding={0} verticalPadding={0} fillItemSelf={true}>
                            <Text fontVariant="Medium" fontSize={20} lineHeight={25} color="#FFFFFF">{"Coldplay"}</Text>
                            <Text fontSize={14} color="#C4C4C4" lineHeight={22} letterSpacing={0.25} clampLines={1} >the scientist ( Official video )</Text>
                        </Container>
                        <Icon name="IoPlay" color="#000000" contained={true} />
                    </Card>



                </Container>
                {
                    //3rd Column
                }
                <Container layoutType="vertical" alignment="top stretch" width={360} horizontalPadding={0} verticalPadding={0}>
                    <Card useFullWidth layoutType="vertical" alignment="top stretch" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Image filename={"card-image-2.png"} />
                        <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                            <MediaWithIcon filename={"Wade-Warren.png"} title="Wade Warren" subtitle="Software Tester" actionName="IoEllipsisVertical" />
                        </Container>
                    </Card>
                </Container>

                <Container layoutType="vertical" alignment="top stretch" width={360} horizontalPadding={0} verticalPadding={0}>
                    <Card useFullWidth layoutType="vertical" alignment="top stretch" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                            <MediaWithIcon filename={"Savannah.png"} title="Savannah Nguyen" subtitle="Web Development" actionName="IoEllipsisVertical" />
                        </Container>
                        <Image filename={"card-image-3.png"} />
                        <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                            <Text fontSize={29} fontVariant="Bold">{"Minim dolor in amet nulla laboris"}</Text>
                        </Container>
                        <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                            <Text color="#78858F" fontSize={16}>{"October 14"}</Text>
                        </Container>
                    </Card>
                </Container>

                <Container layoutType="vertical" alignment="top stretch" width={360} horizontalPadding={0} verticalPadding={0}>
                    <Card useFullWidth layoutType="vertical" alignment="top stretch" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                            <MediaWithIcon filename={"Devon.png"} title="Devon Lane" subtitle="Web Development" subtitleFontSize={15} actionName="" buttonName="BUTTON" buttonType="Outline" />
                        </Container>
                        <Image filename={"card-image-3.png"} />
                        <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                            <Text fontSize={29} fontVariant="Bold">{"Minim dolor in amet nulla laboris"}</Text>
                        </Container>
                        <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                            <Text color="#78858F" fontSize={16}>{"23 April 2021"}</Text>
                        </Container>
                    </Card>
                </Container>

                <Container layoutType="vertical" alignment="top stretch" width={360} horizontalPadding={0} verticalPadding={0}>
                    <Card useFullWidth layoutType="vertical" alignment="top stretch" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                            <MediaWithIcon filename={"Annette.png"} title="Annette Black" subtitle="Web Development" actionName="IoEllipsisVertical" />
                        </Container>
                        <Image filename={"card-image-4.png"} />
                        <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                            <Text fontSize={29} fontVariant="Bold">{"Minim dolor in amet nulla laboris"}</Text>
                        </Container>
                        <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                            <Text color="#78858F" fontSize={16}>{"January 07"}</Text>
                        </Container>
                    </Card>
                </Container>

                <Container layoutType="vertical" alignment="top stretch" width={360} horizontalPadding={0} verticalPadding={0}>
                    <Card useFullWidth layoutType="vertical" alignment="top stretch" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                            <MediaWithIcon filename={"Robert-Fox.png"} title="Robert Fox" subtitle="Web Development" actionName="" />
                        </Container>

                        <Container layoutType="vertical" alignment="top stretch" verticalGap={10} horizontalPadding={25} verticalPadding={25} >
                            <Text fontSize={29} fontVariant="Bold" lineHeight={38}>{"Minim dolor in amet nulla laboris"}</Text>
                            <Text fontSize={17} color="#838383">{"September 23, 2021"}</Text>
                            <Text fontSize={17} lineHeight={17 * 1.41}>{"Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod..."}</Text>
                        </Container>
                        <Container layoutType="horizontal" alignment="top center" horizontalPadding={25} verticalPadding={25} horizontalGap={10} verticalGap={10}>
                            <Badge label="React" backgroundColor="#EB3349"></Badge>
                            <Badge label="Javascript" backgroundColor="#EB3349"></Badge>
                            <Badge label="Angular" backgroundColor="#EB3349"></Badge>
                        </Container>
                        <Container layoutType="horizontal" alignment="between center" horizontalPadding={25} verticalPadding={25} horizontalGap={10} verticalGap={10}>
                            <Icon name={"HeartOutline"} title={"HeartOutline"} text="20k"></Icon>
                            <Icon name={"IoShareSocialOutline"} title={"IoShareSocialOutline"} text="34"></Icon>
                            <Icon name={"IoChatbubbleEllipsesOutline"} title={"IoChatbubbleEllipsesOutline"} text="567"></Icon>
                        </Container>
                    </Card>
                </Container>

                <Container layoutType="vertical" alignment="top stretch" width={360} horizontalPadding={0} verticalPadding={0}>
                    <Card useFullWidth layoutType="vertical" alignment="top stretch" verticalGap={0} horizontalPadding={0} verticalPadding={0}>
                        <Image filename={"card-image-5.png"} />
                        <Container layoutType="vertical" alignment="top stretch" verticalGap={10} horizontalPadding={25} verticalPadding={25} >
                            <Text fontSize={29} fontVariant="Bold" lineHeight={38}>{"Consequat "}</Text>
                            <Text fontSize={17} color="#78858F">{"16 January 2017"}</Text>
                            <Text fontSize={16} lineHeight={23}>{"Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod..."}</Text>
                        </Container>
                        <Container layoutType="vertical" alignment="top stretch" horizontalPadding={25} verticalPadding={25} >
                            <MediaWithIcon filename={"Cameron.png"} title="Cameron Williamson" subtitle="" actionName="" />
                        </Container>
                    </Card>
                </Container>

            </ComponentsWrapper>
        </ThemeProvider>
    )
}