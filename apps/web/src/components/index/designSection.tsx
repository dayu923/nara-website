import Image from "next/image";
import { useTranslations } from "next-intl";
import { styled } from "styled-components";

import GeneralTitle from "./generalTitle";
import AnimatedSection from "./AnimatedSection";

import pndIcon1 from "@@/public/src/img/index/home_icon_pnd1.png";
import pndIcon2 from "@@/public/src/img/index/home_icon_pnd2.png";
import pndIcon3 from "@@/public/src/img/index/home_icon_pnd3.png";
import pndIcon4 from "@@/public/src/img/index/home_icon_pnd4.png";
import pndIcon5 from "@@/public/src/img/index/home_icon_pnd5.png";
import pndIcon6 from "@@/public/src/img/index/home_icon_pnd6.png";

export function DesignSection() {
  const t = useTranslations();
  const designData = [
    {
      icon: pndIcon1,
      title: t("newindex.design.zkId"),
      description: t("newindex.design.zkIdDescription"),
    },
    {
      icon: pndIcon2,
      title: t("newindex.design.anonymousTransfers"),
      description: t("newindex.design.anonymousDescription"),
    },
    {
      icon: pndIcon3,
      title: t("newindex.design.anonymousVoting"),
      description: t("newindex.design.anonymousDescription2"),
    },
    {
      icon: pndIcon4,
      title: t("newindex.design.privacyDeFi"),
      description: t("newindex.design.privacyDescription"),
    },
    {
      icon: pndIcon5,
      title: t("newindex.design.privacySocialNetworks"),
      description: t("newindex.design.privacyDescription2"),
    },
    {
      icon: pndIcon6,
      title: t("newindex.design.nativeDeFiLaunchpad"),
      description: t("newindex.design.nativeDescription"),
    },
  ];

  return (
    <Wrapper>
      <GeneralTitle>{t("newindex.design.title")}</GeneralTitle>
      <TitleDescription>{t("newindex.design.description")}</TitleDescription>
      <DesignList>
        {designData.map((advantage, index) => (
          <DesignItem key={index}>
            <Image src={advantage.icon} alt="" />
            <h5>{advantage.title}</h5>
            <span>{advantage.description}</span>
          </DesignItem>
        ))}
      </DesignList>
    </Wrapper>
  );
}

const Wrapper = styled(AnimatedSection)`
  gap: 0 !important;
`;

const TitleDescription = styled.div`
  margin: 16px 0 48px;
  font-size: 16px;
  color: #979699;
  @media (max-width: 768px) {
    font-size: 12px;
    margin: 8px 0 24px;
  }
`;

const DesignList = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  @media (max-width: 768px) {
    gap: 16px;
    padding: 0 20px;
  }
`;

const DesignItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 1 48%;
  padding: 8px 24px 24px;
  line-height: 1.5;
  border-bottom: 1px solid rgba(250, 250, 250, 0.2);

  img {
    width: 32px;
    height: 32px;
  }

  h5 {
    margin: 0;
    font-weight: bold;
    font-size: 24px;
  }
  span {
    color: #afafb0;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    align-items: center;
    gap: 8px;
    padding: 0 0 16px 0;
    /* border: none; */

    img {
      width: 20px;
      height: 20px;
    }

    h5 {
      font-size: 14px;
    }

    span {
      text-align: center;
      font-size: 12px;
    }
  }
`;
