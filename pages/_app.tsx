import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { AppProps } from "next/app";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
