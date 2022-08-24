import type { NextPage } from "next";
import LogoGroup from "../../public/other/LogoGroup.svg";
import Image from "next/image";
import Link from "next/link";
import Star from "../../public/icons/Star.svg";
import Header from "src/components/public-header";
import Mission from "../../public/other/Icon.png";
import { Main, Container, ScrollableWrapper, BlockContent, BlockWrapper, BuilderStory, LargeBlockContent, Hrline } from "../components/basics";
import { signatures } from "../configs/signatures";
import classNames from "classnames";

const Test: NextPage = () => {
  return (
    <Main>
      <Header link="" button="Join The Colossus" />
      <div className="-mt-4 flex flex-col gap-y-2">
        <Hrline />
        <div className=" flex items-center gap-4">
          <Image
            src="https://pbs.twimg.com/profile_images/1330934712165167104/CEJ0NPF0_400x400.jpg"
            alt="The human colossus logo"
            width={45}
            height={45}
            className="rounded-md"
          />
          <h1 className="text-4xl font-medium">Will DePue</h1>
        </div>
        <div className="mt-1 flex gap-2.5 font-mono text-sm text-[#CCCCD2]">
          <Image src={Star} alt="" width={15} height={15} style={{ marginTop: "-1px" }}></Image>
          <h1 className="text-[#FFE604]">Founding Member</h1>
          <h1 className="text-muted">/</h1>
          <h1>19</h1>
          <h1 className="text-muted">from</h1>
          <h1>Denver 🇺🇸</h1>
          <h1 className="text-muted">/</h1>
          <h1 className="text-muted">in</h1>
          <h1>Stuff</h1>
        </div>
        <div>
          <h1 className="text-xl">About me</h1>
          <p className="mt-1 text-sm">
            How to properly measure a (blockchain) system is one of the least talked about but most significant steps in its design and evaluation. There are
            numerous consensus protocols and variations with various performance and scalability tradeoffs. But as of yet, there is still no universally
            agreed-upon, reliable method that enables apples-to-apples comparisons.
          </p>
        </div>
        <Hrline />
      </div>

      <div className="flex items-center rounded-lg bg-[#00001c] p-3 shadow-custom">
        <Image
          src="https://pbs.twimg.com/profile_images/1330934712165167104/CEJ0NPF0_400x400.jpg"
          alt="The human colossus logo"
          width={50}
          height={50}
          className="rounded-lg"
        />
        <div className="ml-2 flex flex-col justify-between">
          <h1 className="z-10 w-full bg-[#00001c] pt-1 font-semibold">Building a worldwide education platform for the self-motivated.</h1>
          <p className="font-mono text-xs text-muted">
            learn how to build cool shit with <span className="text-white">Will DePue</span>
          </p>
        </div>
      </div>
      <div className="items-center rounded-lg bg-[#00001c] p-3 shadow-custom">
        <h1 className="font-bold">/ Projects</h1>
        <div className="flex">
          <div>
            <Image
              src="https://pbs.twimg.com/profile_images/1330934712165167104/CEJ0NPF0_400x400.jpg"
              alt="The human colossus logo"
              width={50}
              height={50}
              layout="fixed"
              className="m-4 rounded-lg"
            />
          </div>
          <div className="ml-2 flex w-full flex-col">
            <h1 className="z-10 w-96 overflow-hidden text-clip whitespace-nowrap bg-[#00001c] pt-1 font-semibold">
              Building a worldwide education platform for the self-motivated.
            </h1>
            <p className="font-mono text-xs text-muted">
              by <span className="text-white">Will DePue</span>
            </p>
          </div>
          <div className="flex h-12 w-16 items-center justify-center rounded border border-[#5F4BDD] font-mono text-[#5F4BDD]">
            <h1 className="text-center text-xs">100 pts</h1>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Test;
