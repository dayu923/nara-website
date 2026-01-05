import { styled } from "styled-components";
import { useTranslations } from "next-intl";

import chatIcon from "@@/public/src/img/index/home_img_chart.png";

import GeneralTitle from "./generalTitle";
import AnimatedSection from "./AnimatedSection";

export function TokenomicsSection() {
  const t = useTranslations();

  const tokenomicsData = [
    {
      color: "#714DFF",
      text: t("newindex.tokenomics.privatePresale"),
      range: "50%",
      value: "100,000,000",
    },
    {
      color: "#FB4D82",
      text: t("newindex.tokenomics.airdropToSolanaHolders"),
      range: "10%",
      value: "100,000,000",
    },
    {
      color: "#E7B337",
      text: t("newindex.tokenomics.dAppEcosystemRewards"),
      range: "10%",
      value: "100,000,000",
    },
    {
      color: "#49A5FF",
      text: t("newindex.tokenomics.earlyStakingRewards"),
      range: "10%",
      value: "100,000,000",
    },
    {
      color: "#DE4DFB",
      text: t("newindex.tokenomics.testnetParticipantRewards"),
      range: "10%",
      value: "100,000,000",
    },
    {
      color: "#79D651",
      text: t("newindex.tokenomics.foundationReserve"),
      range: "10%",
      value: "100,000,000",
    },
  ];

  return (
    <Wrapper>
      <GeneralTitle>{t("newindex.tokenomics.title")}</GeneralTitle>
      <Chat>
        <ChaLablel>{t("newindex.tokenomics.totalSupply")}</ChaLablel>
        <ChatValue>1000,000,000 NARA</ChatValue>
      </Chat>
      <TokenomicsContent>
        {tokenomicsData.map((item, index) => (
          <TokenomicsItem key={index}>
            <Info>
              <InfoLender $color={item.color} />
              <InfoRange>{item.range}</InfoRange>
              <InfoValue>({item.value})</InfoValue>
            </Info>
            <ItemLabel>{item.text}</ItemLabel>
          </TokenomicsItem>
        ))}
      </TokenomicsContent>
    </Wrapper>
  );
}

const Wrapper = styled(AnimatedSection)`
  gap: 24px;

  @media (max-width: 768px) {
    gap: 12px;
    padding: 0 20px;
  }
`;

const Chat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 392px;
  height: 392px;
  background: url(${chatIcon.src}) no-repeat;
  background-size: 120% 120%;
  background-position: center center;

  @media (max-width: 768px) {
    width: 208px;
    height: 208px;
  }
`;

const ChaLablel = styled.div`
  font-size: 16px;
  color: #afafb0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ChatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const TokenomicsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 826px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const TokenomicsItem = styled.div`
  flex: 1 1 30%;
  @media (max-width: 768px) {
    flex: 1 1 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ItemLabel = styled.div`
  padding-left: 24px;
  font-size: 16px;
  @media (max-width: 768px) {
    margin-left: 0;
    font-size: 12px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InfoLender = styled.div<{ $color: string }>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-color: ${(props: { $color: string }) => props.$color};
  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }
`;

const InfoValue = styled.div`
  font-size: 16px;
  color: #afafb0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const InfoRange = styled.div`
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
