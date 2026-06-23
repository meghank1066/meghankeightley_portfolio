import "../styles/globals.css";
import "../styles/style.css";
import "../styles/markdown.css";
import "../styles/tabletphone.css";
import "../styles/projectscss/sporex.css";
import "../styles/projectscss/sporexmobile.css";
import "../styles/projectscss/velora.css";
import "../styles/projectscss/veloramobile.css";
import "../styles/projectscss/littlestar.css";
import "../styles/projectscss/littlestarmobile.css";
import "../styles/projectscss/styleforecast.css";
import "../styles/projectscss/styleforecast-mobile.css";
import "../styles/case-studies-css/nintendo.css";
import "../styles/case-studies-css/nintendo-mobile.css";
import "../styles/case-studies-css/evelynn.css";
import "../styles/case-studies-css/evelynn-mobile.css";
import "../styles/case-studies-css/penneys.css";
import "../styles/case-studies-css/penneys-mobile.css";
import "../styles/resumecss/resume.css";
import "../styles/resumecss/resume-mobile.css";
import "../styles/case-studies-css/glamour-touch-salon.css";
import "../styles/case-studies-css/glamour-touch-salon-mobile.css";
import "../styles/resumecss/resume-mobile.css";
import { ThemeProvider } from "next-themes";  


const App = ({ Component, pageProps }) => {
  return (
  <ThemeProvider
  attribute="class"
  defaultTheme="dark"
  enableSystem={false}
>
  <Component {...pageProps} />
</ThemeProvider>
  );
};

export default App;
