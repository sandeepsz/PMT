import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex h-full items-center justify-center ">
      <div className="flex items-center gap-4 ">
        <Image
          alt="not found"
          width={200}
          height={200}
          src="/images/notfound.jpg"
        />
        <div>
          <h1 className="text-5xl animate-bounce font-semibold">4⚙️4</h1>
          <p className="text-2xl font-semibold">Page not found</p>
          <Link href="/">
            <p className="text-[#013e68]">Go to Home page</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
