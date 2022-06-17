import { IdProvider } from "@radix-ui/react-id";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { CopyEmailProvider } from "../providers/copy-email";

function MyApp({ Component, pageProps }) {
  return (
    <IdProvider>
      <ThemeProvider attribute="class">
        <CopyEmailProvider>
          <Component {...pageProps} />
        </CopyEmailProvider>
      </ThemeProvider>
    </IdProvider>
  );
}

export default MyApp;
