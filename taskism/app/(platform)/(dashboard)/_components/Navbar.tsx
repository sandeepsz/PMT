import React from "react";
import Logo from "./../../../../components/logo";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
  return (
    <nav className="  h-14 top-0 z-50 border-b px-4 shadow-sm bg-white flex items-center justify-between ">
      <div className="flex items-center gap-x-2 md:gap-x-4">
        <MobileMenu />
        <div className="hiddens md:flex">
          <Logo />
        </div>
        <Button
          size="sm"
          className="rounded-sm hidden md:block h-auto py-1.5 px-2"
        >
          create
        </Button>
        <Button size="sm" className="rounded-sm md:hidden block">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <div className=" flex items-center gap-x-2 ">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/organization/:id"
          afterSelectOrganizationUrl="/organization/:id"
          afterLeaveOrganizationUrl="/select-org"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                width: 30,
                height: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
