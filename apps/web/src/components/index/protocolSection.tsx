import { styled } from "styled-components";
import { useTranslations } from "next-intl";

import GeneralTitle from "./generalTitle";
import AnimatedSection from "./AnimatedSection";

import cardBgIcon from "@@/public/src/img/index/home_core_hover2.webp";

export function ProtocolSection() {
  const t = useTranslations();
  const comparisonData = [
    [
      {
        key: "maxInstructionData",
        title: t("newindex.protocol.subTitle1"),
        width: "35%",
        nara: {
          label: "Nara Solana",
          value: 100,
          unit: "KB",
        },
        solana: {
          label: "Solana",
          value: 10,
          unit: "KB",
        },
      },
      {
        key: "perInstructionAccountExtension",
        title: t("newindex.protocol.subTitle2"),
        width: "40%",
        nara: {
          label: "Nara Solana",
          value: 100,
          unit: "KB",
        },
        solana: {
          label: "Solana",
          value: 10,
          unit: "KB",
        },
      },
      {
        key: "maxAccountSize",
        title: t("newindex.protocol.subTitle3"),
        width: "25%",
        nara: {
          label: "Nara Solana",
          value: 1000,
          display: "1",
          unit: "GB",
        },
        solana: {
          label: "Solana",
          value: 10,
          unit: "MB",
        },
      },
    ],
    [
      {
        key: "stackFrameSize",
        title: t("newindex.protocol.subTitle4"),
        width: "25%",
        nara: {
          label: "Nara Solana",
          value: 32,
          unit: "KB",
        },
        solana: {
          label: "Solana",
          value: 4,
          unit: "KB",
        },
      },
      {
        key: "singleReallocLimit",
        title: t("newindex.protocol.subTitle5"),
        width: "40%",
        nara: {
          label: "Nara Solana",
          value: 100,
          unit: "KB",
        },
        solana: {
          label: "Solana",
          value: 10,
          unit: "KB",
        },
      },
      {
        key: "defaultComputeUnits",
        title: t("newindex.protocol.subTitle6"),
        width: "35%",
        nara: {
          label: "Nara Solana",
          value: 1_000_000,
          unit: "CU",
          display: "1,000K",
        },
        solana: {
          label: "Solana",
          value: 200_000,
          unit: "CU",
          display: "200K",
        },
      },
    ],
    [
      {
        key: "maxComputeUnits",
        title: t("newindex.protocol.subTitle7"),
        width: "50%",
        nara: {
          label: "Nara Solana",
          value: 10,
          unit: "CU",
        },
        solana: {
          label: "Solana",
          value: 1.4,
          unit: "CU",
        },
      },
      {
        key: "perTransactionAccountLoadLimit",
        title: t("newindex.protocol.subTitle8"),
        width: "50%",
        nara: {
          label: "Nara Solana",
          value: 1000,
          display: "1",
          unit: "GB",
        },
        solana: {
          label: "Solana",
          value: 64,
          unit: "MB",
        },
      },
    ],
  ];

  return (
    <Wrapper>
      <Title>{t("newindex.protocol.title")}</Title>
      <Description>{t("newindex.protocol.description")}</Description>

      <ProtocolContent>
        {comparisonData.map((List, index) => (
          <ProtocolList key={index}>
            {List.map((item) => (
              <ProtocolItem key={item.key} $width={item.width}>
                <CardBgIcon src={cardBgIcon.src} alt="cardBgIcon" />
                <SubTitle>{item.title}</SubTitle>
                <BarBox>
                  <BarName>{item.nara.label}</BarName>
                  <BarContent>
                    <Bar
                      style={{
                        width: `${(item.nara.value / item.nara.value) * 100}%`,
                      }}
                    />
                    <BarInfo>
                      <b>
                        {item.nara.display
                          ? item.nara.display
                          : item.nara.value}
                      </b>
                      <span>{item.nara.unit}</span>
                    </BarInfo>
                  </BarContent>
                  <BarSubName>{item.solana.label}</BarSubName>
                  <BarContent>
                    <SolBar
                      style={{
                        width: `${(item.solana.value / item.nara.value) * 100}%`,
                      }}
                    />
                    <BarSolInfo>
                      <b>
                        {item.solana.display
                          ? item.solana.display
                          : item.solana.value}
                      </b>
                      <span>{item.solana.unit}</span>
                    </BarSolInfo>
                  </BarContent>
                </BarBox>
              </ProtocolItem>
            ))}
          </ProtocolList>
        ))}
      </ProtocolContent>
      <Description>{t("newindex.protocol.description2")}</Description>
    </Wrapper>
  );
}

const Wrapper = styled(AnimatedSection)`
  gap: 16px !important;
  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const Title = styled(GeneralTitle)`
  @media (max-width: 768px) {
    padding-right: 20px;
  }
`;

const Description = styled.div`
  font-size: 16px;
  color: #979699;
  line-height: 1.5;

  @media (max-width: 768px) {
    padding-right: 20px;
    text-align: center;
    font-size: 12px;
  }
`;

const ProtocolContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 12px;
    width: 100%;
    overflow-x: auto;
    padding-right: 20px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const ProtocolList = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  @media (max-width: 768px) {
    gap: 12px;
    width: auto;
  }
`;

const ProtocolItem = styled.div<{ $width: string }>`
  position: relative;
  z-index: 1;
  flex: 1 1 ${(props) => props.$width || "50%"};
  padding: 24px;
  background: rgba(250, 250, 250, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(250, 250, 250, 0.1);
  overflow: hidden;
  cursor: pointer;

  &:hover > img {
    opacity: 1;
  }

  @media (max-width: 768px) {
    min-width: 250px;
    padding: 16px;
    gap: 8px;
  }
`;

const CardBgIcon = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  max-width: 294px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

const SubTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const BarBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 16px;

  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

const BarName = styled.div`
  font-size: 16px;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const BarSubName = styled.div`
  margin-top: 8px;
  font-size: 16px;
  color: #afafb0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const BarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const BarInfo = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;

  b {
    font-weight: bold;
    font-size: 24px;
    line-height: 1;
  }

  span {
    font-size: 16px;
    line-height: 1.2;
  }

  @media (max-width: 768px) {
    b {
      font-size: 12px;
    }
    span {
      font-size: 10px;
    }
  }
`;

const BarSolInfo = styled(BarInfo)`
  align-items: center;
  color: #afafb0;
  b {
    font-weight: 300;
    font-size: 16px;
  }
`;

const Bar = styled.div`
  height: 16px;
  background: linear-gradient(97deg, #411ee0 0%, #714dff 31%, #b774ff 78%);
  border-radius: 0px 4px 4px 0px;

  @media (max-width: 768px) {
    height: 8px;
  }
`;

const SolBar = styled(Bar)`
  background: #656467;
`;
