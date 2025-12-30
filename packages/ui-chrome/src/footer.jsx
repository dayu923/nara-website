"use client";

import classNames from "classnames";
import YoutubeIcon from "./assets/youtube.inline.svg";
import TwitterIcon from "./assets/twitter.inline.svg";
import DiscordIcon from "./assets/discord.inline.svg";
import RedditIcon from "./assets/reddit.inline.svg";
import GithubIcon from "./assets/github.inline.svg";
import TelegramIcon from "./assets/telegram.inline.svg";
import { useTranslations } from "next-intl";
import { LanguageSelector } from "./language-selector";
import { Link, InlineLink } from "./link";
import { useMemo } from "react";
import { Fragment } from "react/jsx-runtime";
import SolanaBgSvg from "./assets/solana-bg.svg";
import dynamic from "next/dynamic";

const FooterMouseEffect = dynamic(
  () => import("./footer-mouse-effect").then((mod) => mod.FooterMouseEffect),
  {
    ssr: false,
    fallback: <div />,
  },
);

const SOCIAL_LINKS = [
  { name: "YouTube", url: "/youtube", Icon: YoutubeIcon, size: 20 },
  { name: "Twitter", url: "/twitter", Icon: TwitterIcon, size: 16 },
  { name: "Discord", url: "/discord", Icon: DiscordIcon, size: 20 },
  { name: "Reddit", url: "/reddit", Icon: RedditIcon, size: 20 },
  { name: "GitHub", url: "/github", Icon: GithubIcon, size: 20 },
  { name: "Telegram", url: "/telegram", Icon: TelegramIcon, size: 20 },
];

const CopyrightRow = () => {
  const t = useTranslations();
  const text = t("footer.copyright", {
    currentYear: new Date().getFullYear(),
  });
  const textNodes = useMemo(
    () =>
      text.split(/(\.)/).map((part, idx) =>
        part === "." ? (
          <Fragment key={idx}>
            .<br />
          </Fragment>
        ) : (
          part
        ),
      ),
    [text],
  );

  return (
    <span className="text-[#ababbc] text-sm md:text-base font-normal leading-[1.42] md:leading-[1.5]">
      {textNodes}
    </span>
  );
};

export const Footer = ({ className = "" }) => {
  const t = useTranslations();


  const Logo = () => (
    <svg width="138" height="29" viewBox="0 0 138 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 14H14L1.5933 26.4067C1.00533 26.9947 0 26.5782 0 25.7467V14Z" fill="#714DFF"/>
    <path d="M0 0.933333C0 0.417868 0.417868 0 0.933333 0H13.0667C13.5821 0 14 0.417868 14 0.933333V14H0V0.933333Z" fill="#714DFF"/>
    <path d="M28 14H14L26.4067 1.5933C26.9947 1.00533 28 1.42175 28 2.25327V14Z" fill="#714DFF"/>
    <path d="M28 27.0667C28 27.5821 27.5821 28 27.0667 28H14.9333C14.4179 28 14 27.5821 14 27.0667V14H28V27.0667Z" fill="#714DFF"/>
    <path d="M127.897 27.9998V16.7998H130.073L134.825 23.8558V16.7998H137.193V27.9998H135.001L130.249 20.9438V27.9998H127.897Z" fill="white"/>
    <path d="M124.892 18.3201C125.927 19.3974 126.444 20.7574 126.444 22.4001C126.444 24.0428 125.927 25.4028 124.892 26.4801C123.857 27.5574 122.524 28.0961 120.892 28.0961C119.26 28.0961 117.927 27.5574 116.892 26.4801C115.857 25.4028 115.34 24.0428 115.34 22.4001C115.34 20.7574 115.857 19.3974 116.892 18.3201C117.927 17.2428 119.26 16.7041 120.892 16.7041C122.524 16.7041 123.857 17.2428 124.892 18.3201ZM118.636 19.7761C118.071 20.4588 117.788 21.3334 117.788 22.4001C117.788 23.4668 118.071 24.3468 118.636 25.0401C119.212 25.7228 119.964 26.0641 120.892 26.0641C121.82 26.0641 122.567 25.7228 123.132 25.0401C123.697 24.3468 123.98 23.4668 123.98 22.4001C123.98 21.3334 123.697 20.4588 123.132 19.7761C122.567 19.0828 121.82 18.7361 120.892 18.7361C119.964 18.7361 119.212 19.0828 118.636 19.7761Z" fill="white"/>
    <path d="M111.491 16.7998H113.891V27.9998H111.491V16.7998Z" fill="white"/>
    <path d="M101.336 16.7998H110.216V18.8638H106.968V27.9998H104.568V18.8638H101.336V16.7998Z" fill="white"/>
    <path d="M91.4702 27.9998L95.5662 16.7998H98.4462L102.51 27.9998H99.9342L99.0702 25.5518H94.8142L93.9502 27.9998H91.4702ZM95.4542 23.6158H98.4142L96.9262 19.3598L95.4542 23.6158Z" fill="white"/>
    <path d="M81.5068 27.9998V16.7998H85.5868C87.3255 16.7998 88.7282 17.3171 89.7948 18.3518C90.8615 19.3865 91.3948 20.7305 91.3948 22.3838C91.3948 24.0371 90.8562 25.3865 89.7788 26.4318C88.7122 27.4771 87.3148 27.9998 85.5868 27.9998H81.5068ZM85.5868 25.9998C86.6428 25.9998 87.4642 25.6691 88.0508 25.0078C88.6375 24.3465 88.9308 23.4718 88.9308 22.3838C88.9308 21.2958 88.6375 20.4265 88.0508 19.7758C87.4642 19.1251 86.6428 18.7998 85.5868 18.7998H83.9068V25.9998H85.5868Z" fill="white"/>
    <path d="M70.3037 27.9998V16.7998H72.4797L77.2317 23.8558V16.7998H79.5997V27.9998H77.4077L72.6557 20.9438V27.9998H70.3037Z" fill="white"/>
    <path d="M59.2705 16.7998H61.6705V23.2958C61.6705 25.1198 62.4012 26.0318 63.8625 26.0318C65.3345 26.0318 66.0705 25.1198 66.0705 23.2958V16.7998H68.4705V23.1678C68.4705 24.7678 68.0758 25.9891 67.2865 26.8318C66.5078 27.6745 65.3665 28.0958 63.8625 28.0958C62.3585 28.0958 61.2172 27.6745 60.4385 26.8318C59.6598 25.9891 59.2705 24.7678 59.2705 23.1678V16.7998Z" fill="white"/>
    <path d="M56.3452 18.3201C57.3799 19.3974 57.8972 20.7574 57.8972 22.4001C57.8972 24.0428 57.3799 25.4028 56.3452 26.4801C55.3105 27.5574 53.9772 28.0961 52.3452 28.0961C50.7132 28.0961 49.3799 27.5574 48.3452 26.4801C47.3105 25.4028 46.7932 24.0428 46.7932 22.4001C46.7932 20.7574 47.3105 19.3974 48.3452 18.3201C49.3799 17.2428 50.7132 16.7041 52.3452 16.7041C53.9772 16.7041 55.3105 17.2428 56.3452 18.3201ZM50.0892 19.7761C49.5239 20.4588 49.2412 21.3334 49.2412 22.4001C49.2412 23.4668 49.5239 24.3468 50.0892 25.0401C50.6652 25.7228 51.4172 26.0641 52.3452 26.0641C53.2732 26.0641 54.0199 25.7228 54.5852 25.0401C55.1505 24.3468 55.4332 23.4668 55.4332 22.4001C55.4332 21.3334 55.1505 20.4588 54.5852 19.7761C54.0199 19.0828 53.2732 18.7361 52.3452 18.7361C51.4172 18.7361 50.6652 19.0828 50.0892 19.7761Z" fill="white"/>
    <path d="M38.96 16.7998H46.352V18.8638H41.36V21.4878H45.456V23.4558H41.36V27.9998H38.96V16.7998Z" fill="white"/>
    <path d="M70.564 11.9998L74.66 0.799805H77.54L81.604 11.9998H79.028L78.164 9.55181H73.908L73.044 11.9998H70.564ZM74.548 7.6158H77.508L76.02 3.35981L74.548 7.6158Z" fill="white"/>
    <path d="M65.895 0.799805C67.1323 0.799805 68.1243 1.14114 68.871 1.8238C69.6283 2.49581 70.007 3.39714 70.007 4.52781C70.007 5.24247 69.8363 5.87714 69.495 6.4318C69.1536 6.9758 68.6843 7.39181 68.087 7.67981L70.295 11.9998H67.639L65.751 8.23981H63.735V11.9998H61.335V0.799805H65.895ZM63.735 2.7998V6.23981H65.703C66.2683 6.23981 66.7163 6.08514 67.047 5.7758C67.3883 5.46647 67.559 5.05047 67.559 4.52781C67.559 3.99447 67.3883 3.57314 67.047 3.26381C66.7163 2.95447 66.2683 2.7998 65.703 2.7998H63.735Z" fill="white"/>
    <path d="M49.2671 11.9998L53.3631 0.799805H56.2431L60.3071 11.9998H57.7311L56.8671 9.55181H52.6111L51.7471 11.9998H49.2671ZM53.2511 7.6158H56.2111L54.7231 3.35981L53.2511 7.6158Z" fill="white"/>
    <path d="M38.96 11.9998V0.799805H41.136L45.888 7.85581V0.799805H48.256V11.9998H46.064L41.312 4.94381V11.9998H38.96Z" fill="white"/>
    </svg>
    
  );

  return (
    <div
      className={classNames(
        "relative bg-[#0B0A0F] text-base text-white",
        "[&_ul_a]:inline-block [&_ul_a]:text-sm [&_ul_a]:md:text-base [&_ul_a]:font-normal [&_ul_a]:leading-[1.42] [&_ul_a]:md:leading-[1.5]",
        "[&_ul_li+li]:mt-3",
        className,
      )}
    >
      <div
        className="w-full max-w-[1440px] px-[20px] md:px-[32px] xl:px-[72px] pt-[56px] xl:pt-[88px] pb-[136px] md:pb-[164px] xl:pb-[320px] mx-auto bg-[length:100%_auto] bg-bottom md:bg-[position:center_120%] xl:bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${SolanaBgSvg})` }}
      >
        <div className="relative grid grid-cols-2 xl:grid-cols-6 gap-[30px]">
          <div className="flex flex-col col-span-2 md:col-span-1 xl:col-span-3">
            <p className="text-base md:text-lg font-medium mb-0 leading-[1.33]">
              {t("footer.foundation")}
            </p>
            <div className="mt-6 mb-5">
              <Link
                to="/"
                aria-label="Solana Foundation"
                className="!no-underline !text-white hover:!text-white"
              >
                <Logo
                  className="max-w-full"
                  width={234}
                  height={40}
                  viewBox="0 0 136 29"
                />
              </Link>
            </div>
            <div>
              <CopyrightRow />
            </div>
            <div className="mt-5 flex flex-wrap justify-stretch xl:mt-auto xl:block [&_a+a:before]:content-[''] [&_a+a:before]:absolute [&_a+a:before]:top-0 [&_a+a:before]:left-[-8px] [&_a+a:before]:bottom-0 [&_a+a:before]:my-auto [&_a+a:before]:w-px [&_a+a:before]:h-3 [&_a+a:before]:bg-[rgba(240,228,255,0.12)]">
              {SOCIAL_LINKS.map(({ name, url, Icon, size }) => (
                <InlineLink
                  key={name}
                  to={url}
                  aria-label={name}
                  className="relative !no-underline !text-[#ababbc] hover:!text-white transition-colors inline-flex p-2.5 rounded-full mr-4 flex-1 md:flex-none [&_svg]:m-auto"
                >
                  <Icon width={size} height={size} />
                </InlineLink>
              ))}
            </div>
          </div>
          <div className="col-span-1 absolute right-0 top-0 md:relative xl:order-4">
            <div className="relative flex justify-end xl:justify-start py-[8px] px-[16px] rounded-[8px] !bg-gray-50/5 w-max">
              <LanguageSelector className="!text-[#ababbc] hover:!text-white" />
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-4 md:mb-6 text-base md:text-lg font-medium leading-[1.33]">
              {t("footer.solana.heading")}
            </div>
            <ul className="list-unstyled m-0">
              <li>
                <InlineLink
                  to="https://solana.org/grants"
                  className="!no-underline !text-[#ababbc] hover:!text-white transition-colors"
                >
                  {t("footer.solana.grants")}
                </InlineLink>
              </li>
              <li>
                <Link
                  to="/branding"
                  className="!no-underline !text-[#ababbc] hover:!text-white transition-colors"
                >
                  {t("footer.solana.media")}
                </Link>
              </li>
              <li>
                <InlineLink
                  to="https://jobs.solana.com/"
                  className="!no-underline !text-[#ababbc] hover:!text-white transition-colors"
                >
                  {t("footer.solana.careers")}
                </InlineLink>
              </li>
              <li>
                <Link
                  to="/tos"
                  className="!no-underline !text-[#ababbc] hover:!text-white transition-colors"
                >
                  {t("footer.solana.disclaimer")}
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="!no-underline !text-[#ababbc] hover:!text-white transition-colors"
                >
                  {t("footer.solana.privacy-policy")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <div>
              <div className="mb-4 md:mb-6 text-base md:text-lg font-medium leading-[1.33]">
                {t("footer.get-connected.heading")}
              </div>
              <ul className="list-unstyled m-0">
                <li>
                  <Link
                    to="/news"
                    aria-label={t("footer.get-connected.blog")}
                    className="!no-underline !text-[#ababbc] hover:!text-white transition-colors"
                  >
                    {t("footer.get-connected.blog")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/newsletter"
                    className="!no-underline !text-[#ababbc] hover:!text-white transition-colors"
                  >
                    {t("footer.get-connected.newsletter")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FooterMouseEffect className="absolute bottom-0 left-0 w-full h-[300px] hidden xl:block" />
    </div>
  );
};
