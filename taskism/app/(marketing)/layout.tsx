import React from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="bg-slate-100 pt-20 mb-20 ">{children}</main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
