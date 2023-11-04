import { Colors, Typography } from "./StyleGuide";
import Avatar from "./components/Avatar/Avatar";
import { Container } from "./components/Container/Container";
import Icon from "./components/Icon/Icon";
import Image from "./components/Image/Image";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Text from "./components/Text/Text";
import { PortfolioButton } from "./custom-components/PortfolioButton";
import { usePortfolioData } from "./usePortfolioData";



export default function Portfolio() {
    const [data, setData] = usePortfolioData();

    return (
        <Container $minWidth={1440}>
            {
                //Hero
            }
            <Container $useVerticalLayout $verticalGap={32} $topPadding={40}
                $backgroundColor={Colors.Pink} $clipContent >
                {
                    //Navbar
                }
                <Container $useHorizontalLayout $alignmentTopCenter $horizontalGapAuto $horizontalPadding={124}
                    style={{
                        position: "relative"
                    }}>
                    {
                        //Logo
                    }
                    <Container $useHorizontalLayout $width={146} $height={146} $backgroundColor={Colors.Red} $isCircle
                        style={{
                            zIndex: 1,
                            position: "absolute",
                            top: -108,
                            left: "32%"
                        }}>

                    </Container>
                    <Container $useHorizontalLayout $horizontalGap={8}>
                        <Container $useHorizontalLayout>
                            <Text {...Typography.Heading2} $color={Colors.Dark}>S</Text>
                            <Text {...Typography.Heading2} $color={Colors.Red} $useAutoLayout $shiftLeft={-48 / 4}>J</Text>
                        </Container>
                        <Text {...Typography.Heading2} $color={Colors.Red}>Design</Text>
                    </Container>
                    {
                        //Links
                    }
                    <Container $useHorizontalLayout $horizontalGap={32} style={{
                        zIndex: 2,
                    }}>
                        <Text {...Typography.BodyLargeBold}>About</Text>
                        <Text {...Typography.BodyLargeBold}>Design</Text>
                        <Text {...Typography.BodyLargeBold}>Portfolio</Text>
                        <Text {...Typography.BodyLargeBold}>Blog</Text>
                    </Container>
                    <PortfolioButton>Let's Talk</PortfolioButton>
                </Container>
                {
                    //Container
                }
                <Container $useHorizontalLayout $alignmentBottomCenter $horizontalGap={48} $horizontalPadding={124} >
                    <Container $useVerticalLayout $verticalGap={48} $topPadding={64} $bottomPadding={80}>
                        {
                            //Section heading
                        }
                        <Container $useVerticalLayout $verticalGap={16}>
                            <Text {...Typography.BodyXLarge}>UX Designer</Text>
                            <Container $useVerticalLayout $verticalGap={28}>
                                <Text {...Typography.Heading2}>Hi There, I'm </Text>
                                <Text {...Typography.Heading2} $color={Colors.Red}>Sarah Jones</Text>
                            </Container>

                            <Text {...Typography.BodyMedium}>Welcome to my portfolio of captivating digital experiences. Explore my work and let's create something extraordinary together.</Text>
                        </Container>
                        {
                            //CTAs
                        }
                        <Container $useHorizontalLayout $horizontalGap={20} $alignmentLeft>
                            <PortfolioButton>Hire Me</PortfolioButton>
                            <PortfolioButton $backgroundColor={Colors.White} $color={Colors.Dark}>Portfolio</PortfolioButton>
                        </Container>
                    </Container>
                    <Image $filename="Portfolio_Home_Image_1.png" $width={687} $height={487.34} />
                </Container>
            </Container>
            {
                //About
            }
            <Container $useVerticalLayout $alignmentTopCenter $fill $verticalGap={32} $horizontalPadding={188} $topPadding={64} $bottomPadding={80}
                $backgroundColor={Colors.Dark} $clipContent
            >
                {
                    //About Heading
                }
                <Container $useVerticalLayout $alignmentCenter>
                    <Container $useVerticalLayout $alignmentTopCenter $verticalGap={24} $width={810}>
                        <Text {...Typography.Heading3} $color={Colors.White} $alignmentCenter>About Me</Text>
                        <Text {...Typography.BodyLarge} $color={Colors.White} $alignmentCenter>I'm Sara Jones, a UI/UX designer dedicated to crafting intuitive and visually stunning digital experiences. With a passion for user-centric design, I transform ideas into functional and beautiful interfaces. Let's collaborate and shape the future of design together.</Text>
                    </Container>
                </Container>
                {
                    //Container
                }
                <Container $useHorizontalLayout $alignmentTopCenter $horizontalGapAuto>
                    <Container $useVerticalLayout $alignmentTopCenter $verticalGap={10} $horizontalPadding={0} $topPadding={20}>
                        <Text {...Typography.Heading1} $color={Colors.Pink}>502</Text>
                        <Text {...Typography.BodyLargeBold} $color={Colors.White}>Projects Done</Text>
                    </Container>
                    <Container $useVerticalLayout $alignmentTopCenter $verticalGap={10} $horizontalPadding={0} $topPadding={20}>
                        <Text {...Typography.Heading1} $color={Colors.Pink}>10+</Text>
                        <Text {...Typography.BodyLargeBold} $color={Colors.White}>Years of Experience</Text>

                    </Container>
                    <Container $useVerticalLayout $alignmentTopCenter $verticalGap={10} $horizontalPadding={0} $topPadding={20}>
                        <Text {...Typography.Heading1} $color={Colors.Pink}>273+</Text>
                        <Text {...Typography.BodyLargeBold} $color={Colors.White}>Clients Served</Text>
                    </Container>
                </Container>
                {false && <Container $useHorizontalLayout $width={146} $height={146} $backgroundColor={Colors.Red} $isCircle > </Container>}
            </Container>
            {
                //Services Section
            }
            <Container $useVerticalLayout $alignmentCenter $verticalGap={32} $horizontalPadding={124} $verticalPadding={64}
                $clipContent $backgroundColor={Colors.Grey}
            >
                {
                    //Services  Heading
                }
                <Container $useVerticalLayout $alignmentTopCenter $verticalGap={24} $width={810}>
                    <Text {...Typography.Heading3} $color={Colors.Dark} $alignmentCenter>Services</Text>
                    <Text {...Typography.BodyMedium} $color={Colors.Dark} $alignmentCenter>Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.</Text>
                </Container>
                {
                    //Services
                }
                <Container $useHorizontalLayout $alignmentTopCenter $horizontalGap={64} >
                    <Container $useVerticalLayout $alignmentTopCenter $verticalGap={10} $horizontalPadding={0} $topPadding={20}>
                        <Container $useHorizontalLayout $alignmentLeft>
                            <Icon $name="IoSparklesOutline" $size="xl" $padding={1} $color={Colors.Red} />
                        </Container>
                        <Text {...Typography.BodyLargeBold} $color={Colors.Dark}>Design</Text>
                        <Text {...Typography.BodySmall} $color={Colors.Dark}>I specialize in web development and design, creating visually appealing, user-friendly digital experiences.</Text>
                    </Container>
                    <Container $useVerticalLayout $alignmentTopCenter $verticalGap={10} $horizontalPadding={0} $topPadding={20}>
                        <Container $useHorizontalLayout $alignmentLeft>
                            <Icon $name="IoPeopleOutline" $size="xl" $padding={1} $color={Colors.Red} />
                        </Container>
                        <Text {...Typography.BodyLargeBold} $color={Colors.Dark}>Branding</Text>
                        <Text {...Typography.BodySmall} $color={Colors.Dark}>I'm a branding expert, crafting unique visual identities that tell your story and resonate with your audience.</Text>

                    </Container>
                    <Container $useVerticalLayout $alignmentTopCenter $verticalGap={10} $horizontalPadding={0} $topPadding={20}>
                        <Container $useHorizontalLayout $alignmentLeft>
                            <Icon $name="IoReaderOutline" $size="xl" $padding={1} $color={Colors.Red} />
                        </Container>
                        <Text {...Typography.BodyLargeBold} $color={Colors.Dark}>UX Research</Text>
                        <Text {...Typography.BodySmall} $color={Colors.Dark}>"I specialize in user experience research, collaborating on web development, and ensuring user-friendly digital products.</Text>
                    </Container>

                    <Container $useVerticalLayout $alignmentTopCenter $verticalGap={10} $horizontalPadding={0} $topPadding={20}>
                        <Container $useHorizontalLayout $alignmentLeft>
                            <Icon $name="IoPulse" $size="xl" $padding={1} $color={Colors.Red} />
                        </Container>
                        <Text {...Typography.BodyLargeBold} $color={Colors.Dark}>Usability Testing</Text>
                        <Text {...Typography.BodySmall} $color={Colors.Dark}>I perform usability testing and optimize designs websites based on real-user feedback for seamless interactions.</Text>
                    </Container>
                </Container>
            </Container>
            {
                //Portfolio
            }
            <Container $useVerticalLayout $alignmentBottomCenter $fill $verticalGap={0} $backgroundColor={Colors.Grey}>
                {
                    //Heading
                }
                <Container $useVerticalLayout $alignmentBottomCenter $backgroundColor={Colors.Pink} $horizontalPadding={124} $topPadding={64} $bottomPadding={142} >
                    <Container $useVerticalLayout $alignmentBottomCenter $verticalGap={24} $width={810} >
                        <Text {...Typography.Heading3} $color={Colors.Dark} $alignmentCenter>My Portfolio</Text>
                        <Text {...Typography.BodyMedium} $color={Colors.Dark} $alignmentCenter>Explore my design services, from user interface and experience to prototyping and testing. Let's craft exceptional digital experiences together.</Text>
                    </Container>
                </Container>
                {
                    //Services
                }
                <Container $useVerticalLayout $alignmentBottomCenter $verticalGap={64} $horizontalPadding={124} $topPadding={0} $bottomPadding={64} $shiftUp={-78} >
                    <Container $useHorizontalLayout $horizontalGap={64}>
                        {
                            [
                                { imageFilename: "Educational-Platform.png", title: "Educational Platform", subTitle: "Web Design / Usability Testing" },
                                { imageFilename: "Travel-App-Design.png", title: "Travel App Design", subTitle: "UX Research / App Design " },
                                { imageFilename: "Personal-Page.png", title: "Personal Page", subTitle: "Web Design" }
                            ].map(
                                ({ imageFilename, title, subTitle }) => (
                                    <Container key={title}>
                                        <Image $filename={imageFilename} $height={200} $width={350} />
                                        <Container $useHorizontalLayout $horizontalGapAuto $verticalPadding={8}>
                                            <Container $useVerticalLayout $verticalGap={4}>
                                                <Text {...Typography.BodyXLargeBold}>{title}</Text>
                                                <Text {...Typography.BodySmall}>{subTitle}</Text>
                                            </Container>
                                            <Icon $name="IoArrowForwardCircle" $color={Colors.Red} $size="xl" $rotate={-45} />
                                        </Container>
                                    </Container>
                                )
                            )
                        }
                    </Container>
                    <Container $useHorizontalLayout $horizontalGap={64}>
                        {
                            [
                                { imageFilename: "Furniture-Mobile-App.png", title: "Furniture Mobile App", subTitle: "App Design " },
                                { imageFilename: "Coffee-House-Landing-Page.png", title: "Coffee House Landing Page", subTitle: "UX Research / Web Design  " },
                                { imageFilename: "Home-Services-Page.png", title: "Home Services Page", subTitle: "Web Design / Marketing" }
                            ].map(
                                ({ imageFilename, title, subTitle }) => (
                                    <Container key={title}>
                                        <Image $filename={imageFilename} $height={200} $width={350} />
                                        <Container $useHorizontalLayout $horizontalGapAuto $verticalPadding={8}>
                                            <Container $useVerticalLayout $verticalGap={4}>
                                                <Text {...Typography.BodyXLargeBold}>{title}</Text>
                                                <Text {...Typography.BodySmall}>{subTitle}</Text>
                                            </Container>
                                            <Icon $name="IoArrowForwardCircle" $color={Colors.Red} $size="xl" $rotate={-45} />
                                        </Container>
                                    </Container>
                                )
                            )
                        }
                    </Container>
                    <Container>

                    </Container>
                </Container>
            </Container>
            {
                //Skills
            }
            <Container $useVerticalLayout $alignmentTopCenter $fill $verticalGap={64} $horizontalPadding={188} $verticalPadding={90} $backgroundColor={Colors.Grey}>
                {
                    //Section Heading
                }
                <Container $useVerticalLayout $alignmentTopCenter>
                    <Container $useVerticalLayout $alignmentBottomCenter $verticalGap={24} $width={810} >
                        <Text {...Typography.Heading3} $color={Colors.Dark} $alignmentCenter>Core Design Skills</Text>
                        <Text {...Typography.BodyMedium} $color={Colors.Dark} $alignmentCenter>I excel in essential design skills, creating visually stunning and functional digital experiences. From UI design to UX research, my passion is to craft effective and memorable digital solutions.</Text>
                    </Container>
                </Container>
                {
                    //Skills Container
                }
                <Container $useHorizontalLayout $alignmentTopCenter $fill $horizontalGap={120}>
                    <Container $useVerticalLayout $alignmentTopCenter $fill $fillSelf $verticalGap={8}>
                        {
                            [{ skill: "Interaction Design", level: 60, },
                            { skill: "Usability Testing", level: 70, },
                            { skill: "User Research", level: 45 }].map(
                                ({ skill, level }) => (
                                    <Container key={skill} $useVerticalLayout $verticalGap={8}>
                                        <Text {...Typography.BodyMediumBold}>{skill}</Text>
                                        <Container $useHorizontalLayout $horizontalGap={16} $alignmentLeft>
                                            <Container $fillSelf>
                                                <ProgressBar $completed={level} $thickness={5} $roundCorner={false} />
                                            </Container>
                                            <Text {...Typography.BodyMediumBold}>{level}%</Text>
                                        </Container>
                                    </Container>
                                )
                            )
                        }

                    </Container>

                    <Container $useVerticalLayout $alignmentTopCenter $fill $fillSelf $verticalGap={8}>
                        {
                            [{ skill: "Figma", level: 95, },
                            { skill: "Prototyping", level: 80, },
                            { skill: "Information Architecture", level: 50 }].map(
                                ({ skill, level }) => (
                                    <Container key={skill} $useVerticalLayout $verticalGap={8}>
                                        <Text {...Typography.BodyMediumBold}>{skill}</Text>
                                        <Container $useHorizontalLayout $horizontalGap={16} $alignmentLeft>
                                            <Container $fillSelf>
                                                <ProgressBar $completed={level} $thickness={5} $roundCorner={false} />
                                            </Container>
                                            <Text {...Typography.BodyMediumBold}>{level}%</Text>
                                        </Container>
                                    </Container>
                                )
                            )
                        }
                    </Container>
                </Container>
            </Container>
            {
                //Testemonials
            }
            <Container $useVerticalLayout $alignmentTopCenter $fill $verticalGap={32} $horizontalPadding={124} $verticalPadding={64} $backgroundColor={Colors.Pink}>
                {
                    //Title
                }
                <Container $useVerticalLayout $fill $alignmentTopCenter $verticalGap={32}>
                    <Text {...Typography.Heading3} $alignmentCenter>Testemonials</Text>
                </Container>
                {
                    //Testemonial
                }
                <Container $useHorizontalLayout $alignmentCenter>
                    <Icon $name="IoChevronBack" $size="xl" />
                    <Container $fillSelf $alignmentCenter>
                        <Text {...Typography.BodyMedium} $width={768} $alignmentCenter >Sara Jones's designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Her attention to detail and creative approach are top-notch. Highly recommended!</Text>
                    </Container>
                    <Icon $name="IoChevronForward" $size="xl" />
                </Container>
                {
                    //Client Img & Info
                }
                <Container $useHorizontalLayout $alignmentCenter $horizontalGap={16}>
                    <Image $filename="John-Smith.png" $width={70} $height={70} $isCircle $backgroundColor={Colors.Grey} />
                    <Container $useHorizontalLayout $horizontalGap={8}>
                        <Text $fontVariant="Bold">John Smith</Text>
                        <Text>{" / CEO of XYZ Company"}</Text>
                    </Container>
                </Container>
            </Container>
            {
                //Blog
            }
            <Container $useVerticalLayout $alignmentTopCenter $fill $verticalGap={48} $horizontalPadding={124} $verticalPadding={90} $backgroundColor={Colors.Grey}>
                {
                    //Section Heading
                }
                <Container $useVerticalLayout $alignmentTopCenter>
                    <Container $useVerticalLayout $alignmentBottomCenter $verticalGap={24} $width={810} >
                        <Text {...Typography.Heading3} $color={Colors.Dark} $alignmentCenter>Design Insights and Inspiration</Text>
                        <Text {...Typography.BodyMedium} $color={Colors.Dark} $alignmentCenter>Discover industry insights, expert tips, and design inspiration. Stay updated with the latest trends in web design and user experience.</Text>
                    </Container>
                </Container>
                {
                    //Articles
                }
                <Container $useHorizontalLayout $horizontalGapAuto $horizontalGap={64}>
                    {
                        [
                            { date: "August 15, 2023", category: "UX", imageFilename: "Typography Tips for Design Success.png", title: "Typography Tips for Design Success", summary: "Dive into the world of web typography and discover how to choose, pair, and optimize fonts for compelling and readable digital designs." },
                            { date: "August 15, 2023", category: "UX", imageFilename: "Color Psychology in UX.png", title: "Color Psychology in UX", summary: "Explore how color choices impact user emotions and decision-making in UX design." },
                            { date: "August 15, 2023", category: "UX", imageFilename: "Boosting UX with Microinteractions.png", title: "Boosting UX with Microinteractions", summary: "Discover the power of microinteractions in enhancing user experience and engagement." }
                        ].map(
                            ({ date, category, imageFilename, title, summary }) => (
                                <Container key={title} $verticalGap={32}>
                                    <Image $filename={imageFilename} $height={200} $width={350} />
                                    <Container $useHorizontalLayout $fillSelf $horizontalGapAuto $verticalPadding={8} $horizontalPadding={16} $topPadding={0}>
                                        <Container $useVerticalLayout $alignmentTopLeft $verticalGap={4}>
                                            <Container $useHorizontalLayout $horizontalGap={8}>
                                                <Text {...Typography.BodySmall}>{date}</Text>
                                                <Text>/</Text>
                                                <Text {...Typography.BodySmall}>{category}</Text>
                                            </Container>
                                            <Text {...Typography.BodyMediumBold}>{title}</Text>
                                            <Text {...Typography.BodySmall} $useAutoLayout $useVerticalLayout $fillSelf $alignmentTopLeft>{summary}</Text>
                                            <Container $useHorizontalLayout $alignmentLeft>
                                                <Text {...Typography.BodySmallBold}>Read More</Text>
                                                <Icon $name="IoChevronForward" />
                                            </Container>
                                        </Container>
                                    </Container>

                                </Container>
                            )
                        )
                    }
                </Container>
            </Container>
            {
                //Contact
            }
            <Container $useHorizontalLayout $alignmentLeft $fill $horizontalGap={60} $verticalPadding={124} $horizontalPadding={124}
                $backgroundColor={Colors.Pink}
            >
                {
                    //Contact info
                }
                <Container $fillSelf $useVerticalLayout $verticalGapAuto>
                    <Container $fillSelf $useVerticalLayout $verticalGap={64}>
                        {
                            //Section Heading
                        }
                        <Container $useVerticalLayout $verticalGap={16}>
                            <Text {...Typography.Heading3}>Get in Touch</Text>
                            <Text {...Typography.BodyMedium}>Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.</Text>
                        </Container>
                        {
                            //Contact Info
                        }
                        <Container $useVerticalLayout $fillSelf $verticalGap={8}>
                            <Container $useHorizontalLayout $horizontalGap={16}>
                                <Icon $name="IoCall" />
                                <Text {...Typography.BodyMedium}>+1205 5872 321</Text>
                            </Container>
                            <Container $useHorizontalLayout $horizontalGap={16}>
                                <Icon $name="IoMail" />
                                <Text {...Typography.BodyMedium}> contact@sarajonesdesign.com</Text>
                            </Container>
                            <Container $useHorizontalLayout $horizontalGap={16}>
                                <Icon $name="IoLocationSharp" />
                                <Text {...Typography.BodyMedium}>1234 Design Street,Creativeville, Webland,Imaginary State, 98765</Text>
                            </Container>
                        </Container>
                    </Container>
                    {
                        //Social icons
                    }
                    <Container $useHorizontalLayout $horizontalGap={24}>
                        <Icon $name="IoLogoFacebook" />
                        <Icon $name="IoLogoInstagram" />
                        <Icon $name="IoLogoTwitter" />
                        <Icon $name="IoLogoDribbble" />
                    </Container>
                </Container>
                {
                    //  Text fields
                }
                <Container $fillSelf $verticalGap={32}>
                    <Container $fillSelf $verticalGap={24}>
                        <Container $useHorizontalLayout $horizontalPadding={16} $verticalPadding={14} $backgroundColor={Colors.White}>
                            <Text $color={Colors.DarkGrey}> First name </Text>
                        </Container>
                        <Container $useHorizontalLayout $horizontalPadding={16} $verticalPadding={14} $backgroundColor={Colors.White}>
                            <Text $color={Colors.DarkGrey}> Email </Text>
                        </Container>
                        <Container $useHorizontalLayout $horizontalPadding={16} $verticalPadding={14} $backgroundColor={Colors.White}>
                            <Text $color={Colors.DarkGrey}> Phone number </Text>
                        </Container>
                        <Container $useHorizontalLayout $alignmentTopLeft $horizontalPadding={16} $verticalPadding={14} $backgroundColor={Colors.White} $height={168}>
                            <Text $color={Colors.DarkGrey}> Your message </Text>
                        </Container>
                    </Container>
                    <PortfolioButton>
                        Send Message
                    </PortfolioButton>
                </Container>
            </Container>
            {
                //Footer
            }
            <Container $horizontalPadding={300} $verticalPadding={80} $backgroundColor={Colors.Dark}>
                <Container $alignmentCenter $verticalGap={64}>
                    {
                        //Links Container
                    }
                    <Container $useHorizontalLayout $horizontalGap={120}>
                        <Container $useHorizontalLayout $horizontalGap={32}>
                            <Text {...Typography.BodyXLargeBold} $color={Colors.White}> About </Text>
                            <Text {...Typography.BodyXLargeBold} $color={Colors.White}> Services </Text>
                        </Container>
                        <Container $useHorizontalLayout $fillSelf $horizontalGap={4}>
                            <Text {...Typography.Heading3} $color={Colors.White}>S</Text>
                            <Text {...Typography.Heading3} $color={Colors.Red} $useAutoLayout $shiftLeft={-12}>J</Text>
                            <Text {...Typography.Heading3} $color={Colors.Red}> Design </Text>
                        </Container>
                        <Container $useHorizontalLayout $horizontalGap={32}>
                            <Text {...Typography.BodyXLargeBold} $color={Colors.White}> Portfolio </Text>
                            <Text {...Typography.BodyXLargeBold} $color={Colors.White}> Blog </Text>
                        </Container>


                    </Container>
                    {
                        //Social icons
                    }

                    <Container $verticalGap={32}>
                        <Text {...Typography.BodyMedium} $color={Colors.White}>Follow me on social media:</Text>
                        <Container $useHorizontalLayout $horizontalGap={24}>
                            <Icon $name="IoLogoFacebook" $color={Colors.White} />
                            <Icon $name="IoLogoInstagram" $color={Colors.White} />
                            <Icon $name="IoLogoTwitter" $color={Colors.White} />
                            <Icon $name="IoLogoDribbble" $color={Colors.White} />
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}