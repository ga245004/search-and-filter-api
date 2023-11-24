import { Container } from "../Container/Container";

export default function Divider({ $thickness = 1, $color = "#000000" }) {
    return (
        <Container $height={$thickness} $backgroundColor={$color}></Container>
    )
}