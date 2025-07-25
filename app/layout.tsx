import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/component/navbar";
import Image from "next/image";
import logo from "../public/Logo ABC.png";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CRM Service Social</title>
      </head>
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Image alt="Logo ABC" src={logo} width={238} height={150} />
        </footer>
      </body>
    </html>
  );
}
