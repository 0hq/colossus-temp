import React from "react";
import LogoGroup from "../../public/other/LogoGroup.svg";
import Image from "next/image";
import Link from "next/link";

function Header({ link, showbackground = true, button }: { link: string; showbackground?: boolean; button: string }): React.ReactElement {
  return (
    <>
      <div className=" flex items-center justify-between">
        <Link href="/">
          <Image src={LogoGroup} className="cursor-pointer" height={28} width={180} alt="The human colossus logo" />
        </Link>
        <a href={link}>
          <div className="rounded-md px-3 py-1 font-button text-sm font-semibold" style={{ backgroundColor: showbackground ? "#191933" : "transparent" }}>
            {button}
          </div>
        </a>
      </div>
    </>
  );
}

export default Header;
