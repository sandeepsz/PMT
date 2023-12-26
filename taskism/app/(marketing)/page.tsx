import Link from "next/link";
import { Medal } from "lucide-react";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { Poppins, Adamina, Actor } from "next/font/google";
import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        {/* <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase ">
          <Medal className="h-6 w-6 mr-2" />
          No 1 Task Management
        </div> */}
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Task Tracker helps team move
        </h1>
        <div className="text-3xl md:text-5xl bg-gradient-to-r from-sky-600 to-blue-800 text-white px-4 p-2 rounded-md pb-4 w-fit">
          Work forward.
        </div>
      </div>

      <div
        className={cn(
          textFont.className,
          "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto"
        )}
      >
        Collaborate, manage projects , and reach new productivity peaks. From
        high rises to the home office, the way your team works is
        unique—accomplish it all with Task Tracker.
      </div>

      <Button
        className={cn(textFont.className, "mt-6 font-[headingFont]  mx-auto")}
        size="lg"
        asChild
      >
        <Link href="/sign-up">Get Started with Task Tracker</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
