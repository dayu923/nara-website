import { useTranslations } from "next-intl";
import { styled } from "styled-components";

import GeneralTitle from "./generalTitle";
import AnimatedSection from "./AnimatedSection";
import roadmapBg1 from "@@/public/src/img/index/home_roadmap_bg1.webp";
import roadmapBg2 from "@@/public/src/img/index/home_roadmap_bg2.webp";

export function RoadmapSection() {
  const t = useTranslations();

  const roadData = [
    {
      title: t("newindex.roadmap.testnetGenesis"),
      key: 1,
      introductionList: [
        t("newindex.roadmap.testnetGenesisDescription"),
        t("newindex.roadmap.testnetGenesisDescription2"),
        t("newindex.roadmap.testnetGenesisDescription3"),
      ],
    },
    {
      title: t("newindex.roadmap.mainnetLaunch"),
      key: 2,
      introductionList: [
        t("newindex.roadmap.mainnetLaunchDescription"),
        t("newindex.roadmap.mainnetLaunchDescription2"),
        t("newindex.roadmap.mainnetLaunchDescription3"),
      ],
    },
    {
      title: t("newindex.roadmap.deFiExpansion"),
      key: 3,
      introductionList: [
        t("newindex.roadmap.deFiExpansionDescription"),
        t("newindex.roadmap.deFiExpansionDescription2"),
        t("newindex.roadmap.deFiExpansionDescription3"),
      ],
    },
    {
      title: t("newindex.roadmap.massAdoption"),
      key: 4,
      introductionList: [
        t("newindex.roadmap.massAdoptionDescription"),
        t("newindex.roadmap.massAdoptionDescription2"),
        t("newindex.roadmap.massAdoptionDescription3"),
      ],
    },
  ];

  return (
    <Wrapper>
      <GeneralTitle>{t("newindex.roadmap.title")}</GeneralTitle>
      <RoadList>
        {roadData.map((road, index) => (
          <RoadItem key={index}>
            <span>0{road.key}</span>
            <h5>{road.title}</h5>
            <StatList>
              {road.introductionList.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </StatList>
          </RoadItem>
        ))}
      </RoadList>
    </Wrapper>
  );
}

const Wrapper = styled(AnimatedSection)`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const RoadList = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 12px;
  }
`;

const RoadItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 1 25%;
  min-height: 496px;
  padding: 10px 24px;
  background: rgba(250, 250, 250, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(250, 250, 250, 0.05);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${roadmapBg1.src});

  &:nth-child(2n) {
    background-image: url(${roadmapBg2.src});
  }

  & > span {
    color: #afafb0;
    font-size: 64px;
    font-weight: 300;
    line-height: 1.1;
  }

  h5 {
    margin: 0;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    flex: 1 1 46%;
    min-height: 278px;

    & > span {
      font-size: 40px;
    }

    h5 {
      font-size: 14px;
    }
  }
`;

const StatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-left: 16px;

  p {
    position: relative;
    margin: 0;
    font-size: 16px;
    color: #afafb0;
    line-height: 1.5;
  }

  p::after {
    position: absolute;
    top: -2px;
    left: -14px;
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    margin-top: 12px;
    background-color: #656467;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    padding-left: 12px;
    p {
      font-size: 12px;
    }

    p::after {
      left: -10px;
      width: 4px;
      height: 4px;
      margin-top: 8px;
    }
  }
`;
