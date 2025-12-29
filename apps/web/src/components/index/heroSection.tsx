import Image from "next/image";
import { styled } from "styled-components";
import { useTranslations } from "next-intl";

import BgIcon from "@@/public/src/img/index/hero-top-bg.webp";
import BgShadowIcon from "@@/public/src/img/index/hero-bgcloud.webp";

export function HeroSection() {
  const t = useTranslations();

  console.log(process.env.NODE_ENV, "NODE_ENV");

  return (
    <HeroSectionBox>
      <HeroSectionContent>
        <h1>{t("newindex.meta.title")}</h1>
        <h2>{t("newindex.meta.description")}</h2>
      </HeroSectionContent>
      <HeroBgBox>
        <HeroBgIcon src={BgIcon} alt="bg" />
        <HeroBgIconShadow src={BgShadowIcon} alt="bg shadow" />
      </HeroBgBox>
    </HeroSectionBox>
  );
}

const HeroSectionBox = styled.section`
  position: relative;
  top: -64px;
  width: 100%;
  margin-bottom: 160px;
  font-family: "Sans Tab";
  @media (max-width: 768px) {
    top: 0 !important;
    margin-bottom: 64px;
  }
`;

const HeroSectionContent = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transform: translate(-50%, -35%);

  h1 {
    font-weight: bold;
    font-size: 144px;
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: 40px;
    }
  }

  h2 {
    max-width: 590px;
    text-align: center;
    font-size: 24px;
    line-height: 1.5;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.64);

    @media (max-width: 768px) {
      max-width: 300px;
      font-size: 12px;
    }
  }
`;

const HeroBgBox = styled.div`
  position: relative;
  width: 100%;
`;

const HeroBgIcon = styled(Image)`
  width: 100%;
  aspect-ratio: 1440 / 774;
  object-fit: contain;
`;

const HeroBgIconShadow = styled(Image)`
  position: absolute;
  inset: 0;

  @media (max-width: 768px) {
    top: -62px;
  }
`;
