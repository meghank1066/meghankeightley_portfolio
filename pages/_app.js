import "../styles/globals.css";
import "../styles/style.css";
import "../styles/markdown.css";
import "../styles/tabletphone.css";
import "../styles/projectscss/sporex.css";
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
