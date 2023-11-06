import Providers from "./Providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DPS Resto YT",
  description: "food delivery app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const graphqlApiKey = process.env.GRAPHQL_API_KEY as string;

  return (
    <html lang="en">
      <body>
        <Providers graphqlApiKey={graphqlApiKey}>{children}</Providers>
      </body>
    </html>
  );
}
