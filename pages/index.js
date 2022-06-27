import Head from "next/head";
import LandingPage from "../components/LandingPage/LandingPage";

export default function Home() {
  return (
    <div className="h-screen bg-gray-100">
      <Head>
        <title>Yokaa</title>
        <meta name="description" content="Yokaa music live streaming platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </div>
  );
}
