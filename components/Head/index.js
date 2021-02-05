import NextHead from "next/head";
import { useRouter } from "next/router";

const defaultTitle = "Emmanuel Roussel";
const description =
  "I’m a Canadian software engineer with a passion for building digital products that positively impact communities.";
const baseUrl = "https://emroussel.com";

export function Head({ children, title = defaultTitle }) {
  const router = useRouter();
  const url = `${baseUrl}${router.pathname === "/" ? "" : router.pathname}`;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="emmanuel,roussel,emmanuel roussel,emroussel,javascript,react,frontend,design" />

      {/* Open Graph */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@rousselmm" />
      <meta name="twitter:creator" content="@rousselmm" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:alt" content={title} />

      <link rel="apple-touch-icon" href="/favicon-152.png" />

      <link rel="canonical" href={url} />

      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

      {children}
    </NextHead>
  );
}
