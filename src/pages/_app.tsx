import "@fontsource/roboto-condensed/300.css";
import "@fontsource/roboto-condensed/700.css";
import { GeistMono } from "geist/font/mono";
import { type AppType } from "next/app";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={`${GeistMono.variable} font-mono`}>
      <Component {...pageProps} />
      <footer className="border-t border-stone-300 bg-white px-5 py-5 text-center text-xs leading-5 text-stone-600 sm:px-8">
        <p>
          Meanning is an open-source project.{" "}
          <a
            className="font-semibold text-stone-900 underline decoration-stone-400 underline-offset-4 transition hover:decoration-stone-900"
            href="https://github.com/mdip/meanning"
            rel="noreferrer"
            target="_blank"
          >
            View the project on GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default MyApp;
