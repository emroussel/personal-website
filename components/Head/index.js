import NextHead from "next/head";
import { useRouter } from "next/router";

const defaultTitle = "Emmanuel Roussel";
const defaultDescription =
  "I'm a software developer with a passion for building digital products that positively impact communities.";
const baseUrl = "https://emroussel.com";

export function Head({
  children,
  title = defaultTitle,
  description: propDescription,
}) {
  const router = useRouter();
  const url = `${baseUrl}${router.pathname === "/" ? "" : router.pathname}`;
  const description = propDescription || defaultDescription;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Emmanuel Roussel" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@rousselmm" />
      <meta name="twitter:creator" content="@rousselmm" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:alt" content={title} />

      <link rel="apple-touch-icon" href="/favicon-152.png" />

      <link rel="canonical" href={url} />

      {children}
    </NextHead>
  );
}
