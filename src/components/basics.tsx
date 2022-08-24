import Image from "next/image";
import Link from "next/link";
import Arrow from "../../public/other/arrow.svg";
import LogoGroup from "../../public/other/LogoGroup.svg";
import RedUpvote from "../../public/icons/RedUpvote.svg";
import React, { Children } from "react";
import classNames from "classnames";

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="mx-auto mt-4 flex min-h-[90vh] max-w-custom flex-col gap-y-6">
        {children}
      </div>
      <Footer />
    </main>
  );
}

/**
 *
 * @param {string} value - The value that will be displayed in the header.
 * @param {Function} button - This controls the onClick event. There can be a button and a link passed in at the same time.
 * @param {string} link - This controls the href of the link. There can be a button and a link passed in at the same time.
 * @param {boolean} showBackground - This determines whether or not the button will look like a link or a button.
 * @returns React.FC
 */

export const Header: React.FC<{
  value: string;
  button?: () => void;
  link?: string;
  showBackground?: boolean; // False styles this as a link, true styles it as a button
}> = ({ value, button, link, showBackground }) => {
  const props = {
    ...(link && { href: link }),
    ...(button && { onClick: button }),
  };

  return (
    <div className="my-5 flex justify-between pl-1 pt-1">
      <Link href="/">
        <Image
          src={LogoGroup}
          className="cursor-pointer"
          height={30}
          width={180}
          alt="The human colossus logo"
        />
      </Link>
      <Hrline />
      <a {...props}>
        <div
          className={classNames(
            "rounded-md px-3 pt-1 pb-1 font-button text-sm font-semibold",
            { "bg-[#191933]": showBackground }
          )}
        >
          {value}
        </div>
      </a>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <div className="mx-auto mt-8 h-12 max-w-[600px]">
      <div className=" flex justify-between px-2 font-mono text-[13px] leading-[16.5px] text-[#45455B]">
        <Link href="memo">Read our mission</Link>
        <a href="https://twitter.com/colossusfyi">Get updates</a>
        <a href="mailto:team@colossus.fyi">Contact us</a>
        <a href="">Privacy & Terms</a>
      </div>
    </div>
  );
}

export const Hrline = () => {
  return <hr className="my-2.5 border-0.1 border-solid border-[#2D304F]" />;
};

export function Container({ children, title, infotext }: { title: string; infotext?: string; children: React.ReactNode }) {
  return (
    <Box>
      <div className="px-4 pb-4 pt-1.5">
        <div className="mb-[10px] flex items-center">
          <h1 className="z-10 w-full bg-[#00001c] pt-1 font-semibold">{title}</h1>
          {infotext && (
            <div className="flex gap-x-1">
              <Link href="/sign-in">
                <a className="w-36 text-right font-button text-xs font-semibold text-[#D1D1D680]">{infotext}</a>
              </Link>
              <Image src={Arrow} width="13px" alt="" />
            </div>
          )}
        </div>
        {children}
      </div>
    </Box>
  );
}

export function Box({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={"rounded-lg bg-[#00001c] shadow-custom " + className}>{children}</div>;
}

export function TextWrapper({ children }: { children: React.ReactNode }) {
  return <div className="rounded border border-[#30303A] p-3 font-mono text-xs text-[#B0B0BE]">{children}</div>;
}

export function ScrollableWrapper({ height, children }: { children: React.ReactNode; height?: number }) {
  return (
    <div className="overflow-y-auto overflow-x-hidden rounded" style={{ height: height }}>
      {children}
    </div>
  );
}

export function BlockContent({ image, title, children }: { image: any; title: string; children: React.ReactNode }) {
  return (
    <>
      <div className="flex shrink-0">
        <Image src={image} alt="The human colossus logo" width={40} height={40} className="rounded" />
        <div className="mx-3 flex flex-col justify-between">
          <h1 className="text-normal font-semibold leading-5.5 text-[#E9E9EC]">{title}</h1>
          <div className="mt-0 flex gap-2 font-mono text-xs leading-[16.5px] text-[#BBBBC3]">{children}</div>
        </div>
      </div>
    </>
  );
}

export function LargeBlockContent({ image, title, children }: { image: any; title: string; children: React.ReactNode }) {
  return (
    <>
      <div className="flex shrink-0">
        <Image src={image} alt="The human colossus logo" width={45} height={45} className="rounded-md" />
        <div className="mx-3 flex flex-col justify-between py-[1px]">
          <h1 className="text-[17px] font-semibold leading-5.5 text-[#E9E9EC]">{title}</h1>
          <div className="mt-0 flex gap-2 font-mono text-[13px] leading-[16.5px] text-[#BBBBC3]">{children}</div>
        </div>
      </div>
    </>
  );
}

export function SignatureContent({ signature }: { signature: any }) {
  return (
    <>
      {signature.signature ? (
        <div className="flex h-full w-20 items-center justify-center">
          <Image src={signature.signature} alt="The human colossus logo" className="relative rounded" width={78} height={25} layout="fixed" />
        </div>
      ) : (
        <span className="align-middle font-signature text-xl text-[#4C4C60]">{signature.name}</span>
      )}
    </>
  );
}

export function BlockWrapper({ key, children }: { key?: number; children: React.ReactNode }) {
  return (
    <div className="static flex h-10 items-center justify-between" key={key}>
      {children}
    </div>
  );
}

export function BuilderStory({ image, title, description, name, link }: { image: any; title: string; description: string; name: string; link?: string }) {
  return (
    <a href={link}>
      <BlockWrapper>
        <BlockContent image={image} title={title}>
          <p className="text-[#747485]">learn how to</p>
          <p>{description}</p>
          <p className="text-[#747485]">with</p>
          <p>{name}</p>
        </BlockContent>
      </BlockWrapper>
    </a>
  );
}

export function Organization({
  image,
  title,
  size,
  name,
  location,
  time,
  link,
  category,
}: {
  image: any;
  title: string;
  size: string;
  name: string;
  location: string;
  time: string;
  category: string;
  link?: string;
}) {
  return (
    <a href={link}>
      <BlockWrapper>
        <BlockContent image={image} title={title}>
          <p className="text-[#747485]">by</p>
          <p>{name}</p>
          <p className="text-[#747485]">/ team of</p>
          <p>{size}</p>
          <p className="text-[#747485]">from</p>
          <p>{location}</p>
          <p className="text-[#747485]">/ started</p>
          <p>{time}</p>
          {/* <p className="text-[#747485]">/</p> */}
          {/* <div className="rounded-[4px] bg-[#17172B] py-[2px] px-[5px]  text-[#BD68FF]">{category}</div> */}
        </BlockContent>
        <UpvoteButton color="red" />
      </BlockWrapper>
    </a>
  );
}

import RedUpvote from "../../public/icons/RedUpvote.svg";

export function UpvoteButton({ color }: { color: string }) {
  const textColor = color === "red" ? "text-[#FF9F81]" : "text-[#AFA5EE]";
  const highlightColor = color === "red" ? "border-[#FF4004]" : "border-[#5F4BDD]";
  return (
    <div className={"flex h-[40px] w-[54px] flex-col justify-between rounded border-[0.5px] pt-[5px] pb-[4px] font-mono " + textColor + " " + highlightColor}>
      <Image src={RedUpvote} height="12px" alt="" className="" />
      <h1 className="text-center text-xs tracking-tight	">10 pts</h1>
    </div>
  );
}