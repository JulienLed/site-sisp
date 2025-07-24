import { ReactNode } from "react";
import Navbar from "@/component/navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CRM Service Social</title>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
