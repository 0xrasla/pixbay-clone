import "@/styles/globals.scss";

//theme
import "primereact/resources/themes/mdc-dark-deeppurple/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
