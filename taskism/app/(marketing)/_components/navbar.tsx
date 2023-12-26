import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm flex items-center bg-white ">
      <div className="md:max-w-screen-2xl mx-auto w-full flex justify-between ">
        <Logo />
      </div>

      <div className="space-x-4 md:w-auto flex items-center justify-between w-full">
        <Link href="/sign-in">
          <Button size="lg" variant="outline">
            Login
          </Button>
        </Link>

        <Link href="/sign-up">
          <Button size="lg">Get Started</Button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
