import styled from "styled-components";

function AboutCompany() {
  return (
    <AboutCompanyContainer>
      <TextContainer>
        <Header>
          Bringing you the <Orange>best</Orange> audio gear
        </Header>
        <CompanyText>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </CompanyText>
      </TextContainer>
      <Image
        src={
          process.env.PUBLIC_URL + "/assets/shared/desktop/image-best-gear.jpg"
        }
      />
    </AboutCompanyContainer>
  );
}

export default AboutCompany;

const AboutCompanyContainer = styled.div`
  display: flex;
  align-self: center;
  width: 1110px;
  margin-left: 165px;
  align-items: center;
  gap: 125px;
  margin-right: 165px;
  margin-bottom: 160px;
`;

const Header = styled.h1`
  font-size: 40px;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 1.42px;
`;

const Orange = styled.span`
  font-size: 40px;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  color: #d87d4a;
  text-transform: uppercase;
  letter-spacing: 1.42px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CompanyText = styled.p`
  text-align: justify;
`;
const Image = styled.img`
  width: 540px;
  height: 588px;
`;
