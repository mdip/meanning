import "@fontsource/roboto-condensed/300.css";
import "@fontsource/roboto-condensed/700.css";
import { GeistMono } from "geist/font/mono";
import { type AppType } from "next/app";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${GeistMono.variable} font-mono`}>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
