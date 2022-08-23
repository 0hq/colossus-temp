import React from "react";
import LogoGroup from "../../public/other/LogoGroup.svg";
import Image from "next/image";

export const PublicHeader: React.FC = () => {
  return (
    <>
      <div className="mx-auto flex max-w-custom justify-between py-4">
        <Image src={LogoGroup} alt="The human colossus logo" />
        <a className="font-button text-sm font-semibold">Need help?</a>
      </div>
    </>
  );
};
