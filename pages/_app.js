import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Layout from "../components/Layout";


export default function MyApp({ Component, pageProps }) {
return (
<ThemeProvider>
<Layout>
<Component {...pageProps} />
</Layout>
</ThemeProvider>
);
}