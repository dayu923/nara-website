import { Fragment } from "react";
import { styled } from "styled-components";
import { useTranslations } from "next-intl";
import Image from "next/image";

import GeneralTitle from "./generalTitle";
import AnimatedSection from "./AnimatedSection";

import privacyBgIcon from "@@/public/src/img/index/home_img_privacybg.webp";

export function PrivacySection() {
  const t = useTranslations();
  const privacyNewsData = [
    {
      des: t.rich("newindex.privacy.heroDescription1", {
        light: (chunks) => (
          <>
            <strong>{chunks}</strong>
          </>
        ),
      }),
      key: 1,
    },
    {
      des: t.rich("newindex.privacy.heroDescription2", {
        light: (chunks) => (
          <>
            <strong>{chunks}</strong>
          </>
        ),
      }),
      key: 2,
    },
    {
      des: t.rich("newindex.privacy.heroDescription3", {
        light: (chunks) => (
          <>
            <strong>{chunks}</strong>
          </>
        ),
      }),
      key: 3,
    },
  ];

  return (
    <PrivacySectionBox>
      <GeneralTitle>{t("newindex.privacy.title")}</GeneralTitle>
      <PrivacyShadowBg src={privacyBgIcon} alt="bg" />
      <PrivacyBg>
        <PrivacyList>
          {privacyNewsData.map((item, index) => (
            <Fragment key={item.key}>
              {index == 1 && <PrivacyLine />}
              <PrivacyItem>
                <span>{item.des}</span>
              </PrivacyItem>
              {index == 1 && <PrivacyLine />}
            </Fragment>
          ))}
        </PrivacyList>
      </PrivacyBg>
    </PrivacySectionBox>
  );
}

const PrivacySectionBox = styled(AnimatedSection)`
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const PrivacyShadowBg = styled(Image)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const PrivacyBg = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, #714dff 0%, rgba(113, 77, 255, 0) 100%);
    border-radius: 16px;
    border: 1px solid;
    opacity: 0.5;
    border-image: linear-gradient(
        98deg,
        rgba(250, 250, 250, 0.1),
        rgba(250, 250, 250, 0.4),
        rgba(255, 255, 255, 0.1)
      )
      1 1;
    filter: blur(50px);
  }
`;

const PrivacyList = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  border-radius: 16px;
  border: 1px solid rgba(250, 250, 250, 0.1);
  background: rgba(1, 0, 5, 0.6);
  height: 152px;
  @media (max-width: 768px) {
    padding: 16px;
    flex-direction: column;
    height: auto;
  }
`;

const PrivacyLine = styled.div`
  width: 1px;
  height: 100%;
  margin: 0 16px;
  background: linear-gradient(
    180deg,
    rgba(250, 250, 250, 0.1),
    rgba(250, 250, 250, 0.4),
    rgba(255, 255, 255, 0.1)
  );
  @media (max-width: 768px) {
    width: 100%;
    height: 1px;
    margin: 12px 0;
  }
`;

const PrivacyItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 1.5;
  color: #fafafa;
  strong {
    color: #afafb0;
    font-weight: 300;
  }

  span {
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 2px;
      height: 24px;
      position: absolute;
      left: -17px;
      top: 6px;
      background: #d9d9d9;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;

    span::before {
      display: none;
    }
  }
`;
