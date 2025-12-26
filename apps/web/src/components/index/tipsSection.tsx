import { styled } from "styled-components";
import { useTranslations } from "next-intl";

import AnimatedSection from "./AnimatedSection";

export const TipsSection = () => {
  const t = useTranslations();
  return (
    <TipsWrapper>
      <P>{t("newindex.build.buildFreely")}</P>
      <P>{t("newindex.build.buildAbove")}</P>
    </TipsWrapper>
  );
};

const TipsWrapper = styled(AnimatedSection)`
  gap: 0px !important;
`;

const P = styled.p`
  text-align: center;
  margin: 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
