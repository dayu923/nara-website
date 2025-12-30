import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import AnimatedSection from "./AnimatedSection";
import GeneralTitle from "./generalTitle";

import whatsBgIcon from "@@/public/src/img/index/home_img_whats1.webp";
import whatsBgIcon2 from "@@/public/src/img/index/home_img_whats2.webp";

export function WhatSection() {
  const t = useTranslations();
  return (
    <Wrapper>
      <GeneralTitle>{t("newindex.what.title")}</GeneralTitle>
      <Grid>
        <GridShaowBg src={whatsBgIcon} alt="" />
        <GridShaowBg2 src={whatsBgIcon2} alt="" />
        <WhatLeft
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <WhatLeftTitle>{t("newindex.what.subTitle")}</WhatLeftTitle>
          <Paragraph>{t("newindex.what.subDescription")}</Paragraph>
        </WhatLeft>

        <CodeBox>
          <Typewriter
            lines={[
              "$ git clone https://github.com/tinkle-community/lay-nara.git",
              "$ cd nara",
              "$ chmod +x start.sh",
              "$ ./start.sh start --build",
              "Starting automated trading system...",
              "API server started on port 8080",
              "Web console http://localhost:3000",
            ]}
            typingSpeed={70}
            lineDelay={900}
            style={{
              color: "#979699",
            }}
          />
        </CodeBox>
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled(AnimatedSection)`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Grid = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 42px;
  padding: 24px;
  background: rgba(250, 250, 250, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(250, 250, 250, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    gap: 20px;
  }
`;

const GridShaowBg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 275px;
`;

const GridShaowBg2 = styled(Image)`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 275px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const WhatLeft = styled(motion.div)`
  position: relative;
  flex: 1 1 50%;
`;

const WhatLeftTitle = styled.div`
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 24px;

  @media (max-width: 768px) {
    margin-bottom: 8px;
    font-size: 14px;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  font-size: 16px;
  color: #afafb0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const CodeBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 50%;
  min-height: 256px;
  padding: 32px;
  font-size: 14px;
  border-radius: 8px;
  background: linear-gradient(
    360deg,
    rgba(250, 250, 250, 0) 0%,
    rgba(250, 250, 250, 0.05) 100%
  );

  pre {
    margin: 0;
  }

  @media (max-width: 768px) {
    padding: 12px;
    width: 100%;
    height: auto;
  }
`;
