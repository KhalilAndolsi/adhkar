import "./globals.css";
import Head from "next/head";
import Header from "@components/Header";
import Providers from "@redux/Provider";
import Copyright from "@components/Copyright";

// Fontawesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
  title: "Adhkar",
  description: "{description: Adhkar & created by |Khalil Andolsi| using 'NEXT JS'♥};",
  keywords: ["adhkar", "اذكار", "اسلام", "اذكار الصباح", "دعاء"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="rpJz9jX03IT5mPTa3VdCmyPryMgs0BnwVVQCgxG_xjk" />
      </Head>
      <body className="bg-blue-500 text-white text-lg" >
        <Providers>
          <Header/>
          {children}
        </Providers>
        <footer className="text-center py-4">Copyright <Copyright/> | Created By <a href="https://github.com/KhalilAndolsi" target="_blanck">Khalil Andolsi</a> ❤️</footer>
      </body>
    </html>
  );
}
