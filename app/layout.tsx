import type { Metadata } from "next";
import "./globals.css";
import { cn } from "~/lib/utils";
import { quicksand, work_sans } from "./font";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { Toaster } from "~/components/ui/sonner";
import { genMetadata } from "./shared-metadata";

export const metadata: Metadata = genMetadata({
  title: "Refuge Relief Service | Mentorship, Leadership, and Empowerment",
  description:
    "Refuge Relief Service is committed to empowering youth through leadership programs, job training, and mentorship to help them thrive and impact their communities.",
  keywords:
    "refuge relief service, refuge relief services, refugereliefservices, donation, refuge, refuge relief, youth empowerment, leadership training, mentorship programs, job placement services, community support, skills development for youth, youth leadership coaching, economic enhancement, empowering young leaders",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        quicksand.variable,
        work_sans.variable,
        "antialiased font-regular"
      )}
    >
      <body
        className={cn(
          "flex flex-col items-center mx-auto w-full text-zinc-950/70"
        )}
      >
        <Navbar />
        <main
          className={cn(
            " w-full relative flex items-center flex-col gap-y-12 md:gap-y-14 lg:gap-y-20 bg-white z-20 mb-[450px] md:mb-[434px] lg:mb-[292px]"
          )}
        >
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
