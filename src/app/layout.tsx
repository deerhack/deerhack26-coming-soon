// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Deerhack 2025 - Coming Soon",
//   description:"Deerhack 2025 Landing Page Coming Soon."
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }

import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

import Script from "next/script";

export const metadata = {
  metadataBase: "https://deerhack.deerwalk.edu.np",
  title: {
    template: "%s | DeerHack 2026 - Fawning Over Innovation",
    default: "DeerHack 2026 - Fawning Over Innovation",
  },
  description:
    "DeerHack 2026 is the brainchild of a small team to unleash the potential of young innovators through a 36-hour hackathon in which developers, designers, students, entrepreneurs, educators, and mentors collaborate to create solutions that tackle real-world problems. When people from many backgrounds collaborate, they do more than merely do good; they become a force for global change",
  keywords: [
    "Hackathon in Nepal",
    " 36 Hours Hackathon",
    " Upcoming Hackathons in Nepal",
    "Deerwalk Hackathon",
    " Deerwalk Institute Of Technology",
    " hackathon nepal",
    "hackathon meaning",
    " what is a hackathon",
    " why participate in hackathon",
  ],
  openGraph: {
    title: "Deerhack 2026 - Fawning over Innovation",
    description:
      "DeerHack 2026 is the brainchild of a small team to unleash the potential of young innovators through a 36-hour hackathon in which developers, designers, students, entrepreneurs, educators, and mentors collaborate to create solutions that tackle real-world problems. When people from many backgrounds collaborate, they do more than merely do good; they become a force for global change",
    url: "https://deerhack.deerwalk.edu.np",
    siteName: "Deerhack 2026 - Fawning Over Innovation",
    images: [
      {
        url: "/banner.webp",
        width: 400,
        height: 250,
        alt: "Deerhack 2026 Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deerhack 2026",
    description:
      "DeerHack 2026 is the brainchild of a small team to unleash the potential of young innovators through a 36-hour hackathon in which developers, designers, students, entrepreneurs, educators, and mentors collaborate to create solutions that tackle real-world problems. When people from many backgrounds collaborate, they do more than merely do good; they become a force for global change",
    images: ["/banner.webp"],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className=" bg-dark-purple">
        {/* <Navbar /> */}
      
        <main>{children}</main>
        {/* <Footer /> */}
        <Script defer async src="https://apply.devfolio.co/v2/sdk.js"></Script>
      </body>
    </html>
  );
}
