import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100"],
});

const Logo = () => {
  return (
    <Link href="/">
      <div
        className={cn(
          headingFont.className,
          "hover:opacity-75 transition items-center gap-x-2 hidden   md:flex"
        )}
      >
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <p className="text-2xl items-center">Task Tracker</p>
      </div>
    </Link>
  );
};

export default Logo;
