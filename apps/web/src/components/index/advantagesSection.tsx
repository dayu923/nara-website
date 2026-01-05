import Image from "next/image";
import { useTranslations } from "next-intl";
import { styled } from "styled-components";
import AnimatedSection from "./AnimatedSection";
import GeneralTitle from "./generalTitle";

import coreIcon1 from "@@/public/src/img/index/home-core-1.png";
import coreIcon2 from "@@/public/src/img/index/home-core-2.png";
import coreIcon3 from "@@/public/src/img/index/home-core-3.png";
import coreIcon4 from "@@/public/src/img/index/home-core-4.png";
import coreIcon5 from "@@/public/src/img/index/home-core-5.png";
import coreIcon6 from "@@/public/src/img/index/home-core-6.png";
import cardBgIcon from "@@/public/src/img/index/home_core_hover1.webp";

export function AdvantagesSection() {
  const t = useTranslations();
  const advantagesData = [
    {
      icon: coreIcon1,
      title: t("newindex.advantages.gas"),
      description: t("newindex.advantages.gasDescription"),
    },
    {
      icon: coreIcon2,
      title: t("newindex.advantages.lower"),
      description: t("newindex.advantages.lowerDescription"),
    },
    {
      icon: coreIcon3,
      title: t("newindex.advantages.ultra"),
      description: t("newindex.advantages.ultraDescription"),
    },
    {
      icon: coreIcon4,
      title: t("newindex.advantages.super"),
      description: t("newindex.advantages.superDescription"),
    },
    {
      icon: coreIcon5,
      title: t("newindex.advantages.program"),
      description: t("newindex.advantages.programDescription"),
    },
    {
      icon: coreIcon6,
      title: t("newindex.advantages.assets"),
      description: t("newindex.advantages.assetsDescription"),
    },
  ];

  return (
    <Wrapper>
      <GeneralTitle>{t("newindex.advantages.title")}</GeneralTitle>
      <AdvantagesInner>
        <AdvantagesList>
          {advantagesData.map((advantage, index) => (
            <AdvantagesItem key={index}>
              <Image src={advantage.icon} alt="" />
              <h5>{advantage.title}</h5>
              <span>{advantage.description}</span>
            </AdvantagesItem>
          ))}
        </AdvantagesList>
      </AdvantagesInner>
    </Wrapper>
  );
}

const Wrapper = styled(AnimatedSection)`
  gap: 48px;

  @media (max-width: 768px) {
    position: relative;
    gap: 20px;
    padding-left: 20px;
  }
`;

const AdvantagesInner = styled.div`
  position: relative;
  width: 100%;
`;

const AdvantagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  &::after {
    content: "NARA";
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 400px;
    background: linear-gradient(
      90deg,
      #714dff 0%,
      #411ee0 33%,
      #9c83ff 45%,
      #e151ff 78%,
      #fff759 85%
    );
    background-size: 100% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    white-space: nowrap;
    pointer-events: none;
    user-select: none;

    @media (max-width: 768px) {
      font-size: 128px;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    gap: 12px;
    padding-right: 20px;
    width: 100%;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const AdvantagesItem = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 1 30%;
  padding: 24px;
  background: rgba(250, 250, 250, 0.08);
  border-radius: 16px;
  line-height: 1.5;
  backdrop-filter: blur(30px);
  cursor: pointer;
  overflow: hidden;

  img {
    width: 40px;
    height: 40px;
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

  &::before {
    position: absolute;
    content: "";
    inset: 0;
    background: url(${cardBgIcon.src}) no-repeat;
    background-size: 100% 100%;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    min-width: 206px;
    gap: 8px;

    img {
      width: 32px;
      height: 32px;
    }

    h5 {
      font-size: 14px;
    }

    span {
      font-size: 12px;
    }
  }
`;
