import Image from "next/image";
import { useTranslations } from "next-intl";
import { styled } from "styled-components";
import { motion } from "framer-motion";

import GeneralTitle from "./generalTitle";
import AnimatedSection from "./AnimatedSection";

import stakingIcon1 from "@@/public/src/img/index/home_icon_staking1.png";
import stakingIcon2 from "@@/public/src/img/index/home_icon_staking2.png";
import stakingIcon3 from "@@/public/src/img/index/home_icon_staking3.png";
import stakingIcon4 from "@@/public/src/img/index/home_icon_staking4.png";

export function EarlySection() {
  const t = useTranslations();
  const earlyData = [
    { icon: stakingIcon1, title: t("newindex.early.subsidy1") },
    { icon: stakingIcon2, title: t("newindex.early.subsidy2") },
    { icon: stakingIcon3, title: t("newindex.early.subsidy3") },
    { icon: stakingIcon4, title: t("newindex.early.subsidy4") },
  ];

  return (
    <Wrapper>
      <GeneralTitle>{t("newindex.early.title")}</GeneralTitle>
      <TitleDescription>{t("newindex.early.description")}</TitleDescription>
      <EarlyList>
        {earlyData.map((advantage, index) => (
          <EarlyItem
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image src={advantage.icon} alt="" />
            <h5>{advantage.title}</h5>
          </EarlyItem>
        ))}
      </EarlyList>
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
    margin: 8px 0 24px;
    font-size: 12px;
  }
`;

const EarlyList = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EarlyItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  flex: 1 1 25%;

  img {
    width: 96px;
    height: 96px;
  }

  h5 {
    margin: 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.5;
    text-align: center;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    gap: 8px;
    img {
      width: 56px;
      height: 56px;
    }
    h5 {
      font-size: 14px;
    }
  }
`;
