import { config } from "@@/src/config";
import { getUrlWithoutLocale } from "@@/src/app/sources/utils";
import { getAlternates } from "@workspace/i18n/routing";
import { getTranslations } from "next-intl/server";

export function getBaseMetadata(locale: string) {
  const { siteMetadata, siteUrl } = config;
  return {
    other: {
      language: locale,
    },
    title: {
      template: "%s | Nara Solana",
      default: siteMetadata.title,
    },
    description: siteMetadata.description,
    openGraph: {
      type: "website",
      images: [siteMetadata.socialShare],
      locale,
    },
    twitter: {
      card: "summary_large_image",
      creator: siteMetadata.author,
    },
    robots: "index, follow",
    manifest: "/site.webmanifest",
    metadataBase: new URL(siteUrl),
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png" }],
    },
  };
}

export async function getIndexMetadata({
  titleKey,
  descriptionKey,
  locale,
  path,
}) {
  const t = await getTranslations();
  return {
    title: t(titleKey),
    description: t(descriptionKey),
    alternates: getAlternates(path, locale),
  };
}

export function getMdxMetadata(page) {
  const url = getUrlWithoutLocale(page);
  const title = page.data.seoTitle || page.data.h1 || page.data.title;
  const description = page.data.description;
  const { openGraph } = getBaseMetadata(page.locale);

  const imagePrefix = url?.startsWith("/docs")
    ? "/opengraph/developers"
    : "/opengraph";

  return {
    title,
    description,
    alternates: getAlternates(url, page.locale),
    openGraph: {
      ...openGraph,
      images: [imagePrefix + url],
      title,
      description,
    },
  };
}
