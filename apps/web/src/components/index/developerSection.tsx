import { useTranslations } from "next-intl";
import { styled } from "styled-components";
import AnimatedSection from "./AnimatedSection";
import GeneralTitle from "./generalTitle";
import ItemBgIcon from "@@/public/src/img/index/home_bg_dev.webp";

export function DeveloperSection() {
  const t = useTranslations();
  const DeveloperData = [
    {
      title: t("newindex.developer.rewards"),
      description: t("newindex.developer.rewardsDescription"),
    },
    {
      title: t("newindex.developer.funding"),
      description: t("newindex.developer.fundingDescription"),
    },
    {
      title: t("newindex.developer.program"),
      description: t("newindex.developer.programDescription"),
    },
  ];

  return (
    <Wrapper>
      <GeneralTitle>{t("newindex.developer.title")}</GeneralTitle>
      <TitleDescription>{t("newindex.developer.description")}</TitleDescription>
      <DeveloperList>
        {DeveloperData.map((item, index) => (
          <DeveloperItem key={index}>
            <h5>{item.title}</h5>
            <span>{item.description}</span>
          </DeveloperItem>
        ))}
      </DeveloperList>
    </Wrapper>
  );
}

const Wrapper = styled(AnimatedSection)`
  gap: 0 !important;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const TitleDescription = styled.div`
  margin: 16px 0 48px;
  font-size: 16px;
  color: #979699;
  line-height: 1.5;

  @media (max-width: 768px) {
    text-align: center;
    margin: 8px 0 24px;
    font-size: 12px;
  }
`;

const DeveloperList = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const DeveloperItem = styled.div`
  position: relative;
  z-index: 1;
  flex: 1 1 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
  cursor: pointer;
  &::before {
    position: absolute;
    inset: 0;
    z-index: -1;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("${ItemBgIcon.src}");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    opacity: 0.7;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }

  h5 {
    margin: 0;
    font-weight: bold;
    font-size: 24px;
  }

  span {
    font-size: 16px;
    color: #afafb0;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    gap: 8px;
    padding: 12px 16px;

    h5 {
      font-size: 14px;
    }

    span {
      font-size: 12px;
    }
  }
`;
