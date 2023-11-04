import { Container } from "../components/Container/Container";
import Text from "../components/Text/Text";

const Sections = [
    { title: "Navbar", subTitle: "" },
    { title: "Hero Header Section", subTitle: "Introduce LearnHub platform and highlight its main features" },
    { title: "Feature Section", subTitle: "Present the diverse range of courses offered by LearnHub" },
    { title: "Testimonial Section", subTitle: "Showcase positive reviews and experiences from satisfied learners" },
    { title: "Pricing Section", subTitle: "Display various pricing plans and subscription options for users" },
    { title: "CTA Section", subTitle: "Encourage users to sign up and start learning with a strong call-to-action" },
    { title: "Newsletter Section", subTitle: "Invite users to subscribe to the LearnHub newsletter for latest updates and offers" },
    { title: "Contact Section", subTitle: "Provide contact information and encourage users to get in touch for any inquiries or support" },
    { title: "Footer", subTitle: "" },
];


function Section({ title = "New Section", subTitle = "Your text...", $titleColor = "#000000", $subTitleColor = "#000000" }) {
    const isSubTitle = !!subTitle;
    return (
        <Container $useVerticalLayout $verticalGap={8} $horizontalPadding={10} $verticalPadding={8} $cornerRadius={4}
            $useInsideStroke $strokeWidth={1} $strokeColor="#000000"
            style={{ "border": "2px solid black" }}>
            <Text $font="Roboto" $fontVariant="Medium" $fontSize={13} $color={$titleColor}>{title}</Text>
            {isSubTitle && < Text $font="Roboto" $fontVariant="Regular" $fontSize={10} $color={$subTitleColor}> {subTitle}</Text>}
        </Container>

    )
}

export default function LearningHub() {
    return (
        <Container $fillSelf $alignmentCenter  $backgroundColor="#E1E1E1" >
            <Container $width={300}>
                {
                    //Page Title
                }
                <Container $useHorizontalLayout $horizontalPadding={12} $verticalPadding={8} $backgroundColor="#000000"
                    $cornerRadius={8} $cornerRadiusBottomLeft={0} $cornerRadiusBottomRight={0}
                    style={{ position: "sticky", top: 0 }} >
                    <Text $font="Roboto" $fontVariant="Medium" $fontSize={14} $color="#FFFFFF">Home</Text>
                </Container >
                {
                    //Page Wrapper
                }
                <Container $fillSelf $useVerticalLayout $verticalGap={8} $horizontalPadding={8} $verticalPadding={8} $backgroundColor="#FFFFFF">
                    {
                        [...Sections].map(
                            (item) => (
                                <Section {...item}></Section>
                            )
                        )
                    }
                </Container>
            </Container>
        </Container>
    )
}