import { LineTip } from "../../../../../components/Arrow/styles";
import Button from "../../../../../components/Button";
import {
  ArrowWithButton,
  ColoredText,
  Container,
  ContainerImage,
  CTAContainer,
  Description,
  TextContainer,
  Title,
} from "./styles";
import Tip from "../../../../../assets/images/arrowImages/tip.svg";
import VRgirl from "../../../../../assets/images/VRwithBorder/VRgirl.webp";
import { useState, useEffect } from "react";

export default function Content() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setIsSmallScreen(window.innerWidth <= 390);
    };
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  });

  return (
    <Container>
      <CTAContainer>
        <TextContainer>
          <Title
            marginTopSmallDevice="30px"
            widthSmallDevice="298px"
            heightSmallDevice="49px"
            width="457px"
          >
            <ColoredText fontSizeColoredTextSmallDevice="36px">
              Dive{" "}
            </ColoredText>
            Into The Depths
          </Title>
          <Title
            widthSmallDevice="274px"
            heightSmallDevice="39px"
            width="402px"
            marginTop="4px"
            marginTopSmallDevice="8px"
          >
            Of{" "}
            <ColoredText fontSizeColoredTextSmallDevice="32px">
              Virtual reality
            </ColoredText>
          </Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </Description>
          <ArrowWithButton>
            {isSmallScreen ? (
              <Button
                primary
                text="BUILD YOUR WORLD"
                borderSettings="none"
                colorText="#343045"
              />
            ) : (
              <>
                <Button
                  primary
                  text="BUILD YOUR WORLD"
                  borderSettings="none"
                  colorText="#343045"
                />
                <LineTip src={Tip} alt="" />
              </>
            )}
          </ArrowWithButton>
        </TextContainer>
        <ContainerImage src={VRgirl} alt="" />
      </CTAContainer>
    </Container>
  );
}
