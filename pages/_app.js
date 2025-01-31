import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { font } from "../styles/font";
import { CopyEmailProvider } from "../providers/copy-email";

function MyApp({ Component, pageProps }) {
  return (
    <div className={font}>
      <ThemeProvider attribute="class">
        <CopyEmailProvider>
          <Component {...pageProps} />
        </CopyEmailProvider>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
