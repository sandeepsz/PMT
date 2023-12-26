import React from "react";
import { OrganizationProfile } from "@clerk/nextjs";

const Setting = () => {
  return (
    <div>
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
            },

            card: {
              boxShadow: "none",
            },
          },
        }}
      />
    </div>
  );
};

export default Setting;
