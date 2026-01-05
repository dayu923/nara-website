import Image from "next/image";
import { useTranslations } from "next-intl";
import { styled } from "styled-components";
import AnimatedSection from "./AnimatedSection";
import GeneralTitle from "./generalTitle";

import googleIcon from "@@/public/src/img/index/home_icon_google.png";
import browserIcon from "@@/public/src/img/index/home_icon_browser.png";
import appleIcon from "@@/public/src/img/index/home_icon_apple.png";
import cardBgIcon from "@@/public/src/img/index/home_core_hover1.webp";

export function DownloadSection() {
  const t = useTranslations();
  const downloadData = [
    {
      icon: appleIcon,
      name: t("newindex.download.apple"),
      url: "",
    },
    {
      icon: googleIcon,
      name: t("newindex.download.google"),
      url: "",
    },
    {
      icon: browserIcon,
      name: t("newindex.download.browser"),
      url: "",
    },
  ];

  return (
    <Wrapper>
      <GeneralTitle>{t("newindex.download.title")}</GeneralTitle>
      <DownloadList>
        {downloadData.map((it, index) => (
          <DownloadItem key={index}>
            <Image src={it.icon} alt="" />
            <Info>
              <h5>{it.name}</h5>
              <a href={it.url}>Download</a>
            </Info>
          </DownloadItem>
        ))}
      </DownloadList>
    </Wrapper>
  );
}

const Wrapper = styled(AnimatedSection)`
  gap: 48px;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 0 20px;
  }
`;

const DownloadList = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    width: 100%;
  }
`;

const DownloadItem = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 30%;
  padding: 48px;
  background: rgba(250, 250, 250, 0.08);
  border-radius: 16px;
  line-height: 1.5;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 96px;
    height: 96px;
  }

  h5 {
    margin: 24px 0 8px 0;
    font-weight: bold;
    font-size: 24px;
    white-space: nowrap;
  }
  a {
    color: #fafafa;
    font-size: 16px;
    text-decoration: underline;
  }

  &::before {
    position: absolute;
    z-index: -1;
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
    flex-direction: row;
    gap: 8px;
    padding: 16px;
    border-radius: 8px;

    img {
      width: 48px;
      height: 48px;
    }

    h5 {
      margin: 0;
      font-size: 14px;
    }

    a {
      font-size: 12px;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
    max-width: 78px;
  }
`;
