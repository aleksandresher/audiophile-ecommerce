import styled from "styled-components";
import Speakerzx9 from "../Images/image-speaker-zx9.png";
import Speakerzx7 from "../Images/image-speaker-zx7.jpg";

function HomePageAdd() {
  return (
    <AddContainer>
      <FirstSpeakerContainer>
        <Speaker src={Speakerzx9} />
        <Speaker1Description>
          <SpeakerName>ZX9</SpeakerName>
          <SpeakerName>Speaker</SpeakerName>
          <DescriptionText>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </DescriptionText>
        </Speaker1Description>
      </FirstSpeakerContainer>
      <SecondSpeakerContainer>
        <Speaker2 src={Speakerzx7} />
        <div></div>
      </SecondSpeakerContainer>
    </AddContainer>
  );
}

export default HomePageAdd;

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
  margin-top: 160px;
  margin-bottom: 100px;
`;

const FirstSpeakerContainer = styled.div`
  width: 1110px;
  height: 560px;
  background-color: #d87d4a;
  border-radius: 8px;
  position: relative;
`;
const Speaker1Description = styled.div`
  position: absolute;
  top: 133px;
  right: 80px;
  display: flex;
  flex-direction: column;
`;

const SpeakerName = styled.p`
  font-size: 56px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: "Manrope", sans-serif;
  margin: 0px;
`;

const DescriptionText = styled.p`
  width: 349px;
  font-size: 15px;
  font-family: "Manrope", sans-serif;
  color: #fff;
  font-weight: 500;
  opacity: 0.75;
`;

const SecondSpeakerContainer = styled.div``;
const Speaker = styled.img`
  width: 410px;
  height: 493px;
  border-radius: 8px;
  position: absolute;
  bottom: -7px;
  left: 150px;
`;
const Speaker2 = styled.img``;
const Earphone = styled.img`
  width: 540px;
  height: 320px;
`;
