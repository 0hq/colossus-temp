import type { NextPage } from "next";
import LogoGroup from "../../public/other/LogoGroup.svg";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../../public/other/arrow.svg";
import Mission from "../../public/other/Icon.png";

import { signatures } from "../configs/signatures";
import classNames from "classnames";

const Index: NextPage = () => {
  return (
    <main>
      <div className="mx-auto mt-4 flex max-w-custom flex-col gap-y-5">
        <Header>
          <HeaderButton link="">Join the Colossus</HeaderButton>
        </Header>

        <div className="flex flex-col">
          <Container title="/ Our Mission">
            <ScrollableWrapper>
              <Link href="/memo">
                <a>
                  <BlockWrapper>
                    <BlockContent image={Mission} title="The Human Colossus: Founding Memo">
                      <p className="text-[#747485]">via</p>
                      <p>colossus.fyi</p>
                      <p className="text-[#747485]">/</p>
                      <p className="text-[#747485]">Expose ambition. Recruiting young builders...</p>
                    </BlockContent>
                  </BlockWrapper>
                </a>
              </Link>
            </ScrollableWrapper>
          </Container>
          <Container title="/ Builder Stories">
            <ScrollableWrapper>
              <div className="flex flex-col gap-3.5">
                <BuilderStory
                  title="How I built Discord analytics for 3m+ community members."
                  image={signatures[4]?.image}
                  description="build an analytics service"
                  name="Will DePue"
                  link=""
                />
                <BuilderStory
                  title="How I built a DAO that raised $42m to buy the constitution."
                  image={signatures[1]?.image}
                  description="steal the constitution"
                  name="Miguel Piedrafita"
                  link=""
                />
                <BuilderStory
                  title="How I built a platform to help Ukrainian refugees find homes."
                  image={signatures[2]?.image}
                  description="do online activism"
                  name="Avi Schiffman"
                  link=""
                />
              </div>
            </ScrollableWrapper>
          </Container>
          <div className="p-2">
            <h1 className="mb-4 text-xl leading-5.5 text-[#E9E9EC]"> Founding Members</h1>
            <ScrollableWrapper>
              <div className="flex flex-col gap-3.5">
                {signatures.map((signature, i) => (
                  <a key={i} href="">
                    <LargeBlockContent image={signature.image} title={signature.name}>
                      <p className="text-[#747485]">in</p>
                      <p
                        className={classNames({
                          "text-[#e1b13e]": signature.name === "Rhodos",
                        })}
                      >
                        {signature.subject}
                      </p>
                      <p className="text-[#747485]">/</p>
                      <p>{signature.age}</p>
                      <p className="text-[#747485]">from</p>
                      <p>{signature.location}</p>
                    </LargeBlockContent>
                  </a>
                ))}
              </div>
            </ScrollableWrapper>
          </div>
        </div>
        <div className=" h-14">
          <div className="mt-2 flex justify-between px-4 font-mono text-[13px] leading-[16.5px] text-[#45455B]">
            <Link href="memo">Read our mission</Link>
            <a href="https://twitter.com/colossusfyi">Get updates</a>
            <a href="mailto:team@colossus.fyi">Contact us</a>
            <a href="">Privacy & Terms</a>
          </div>
        </div>
      </div>
    </main>
  );
};

function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <Image src={LogoGroup} className="cursor-pointer" height={28} width={180} alt="The human colossus logo" />
      </Link>
      {children}
    </div>
  );
}

function HeaderButton({ link, showbackground = true, children }: { link: string; showbackground?: boolean; children: string }) {
  return (
    <a href={link}>
      <div className="rounded-md px-3 py-1 font-button text-sm font-semibold" style={{ backgroundColor: showbackground ? "#191933" : "transparent" }}>
        {children}
      </div>
    </a>
  );
}

function Container({ children, title, infotext }: { title: string; infotext?: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 rounded-lg bg-[#00001c] px-4 pb-4 pt-1.5 shadow-custom">
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
  );
}

function TextWrapper({ children }: { children: React.ReactNode }) {
  return <div className="rounded border border-[#30303A] p-3 font-mono text-xs text-[#B0B0BE]">{children}</div>;
}

function ScrollableWrapper({ height, children }: { children: React.ReactNode; height?: number }) {
  return (
    <div className="overflow-y-auto overflow-x-hidden rounded" style={{ height: height }}>
      {children}
    </div>
  );
}

function BlockContent({ image, title, children }: { image: any; title: string; children: React.ReactNode }) {
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

function LargeBlockContent({ image, title, children }: { image: any; title: string; children: React.ReactNode }) {
  return (
    <>
      <div className="flex shrink-0">
        <Image src={image} alt="The human colossus logo" width={45} height={45} className="rounded" />
        <div className="mx-3 flex flex-col justify-between py-[1px]">
          <h1 className="text-[17px] font-semibold leading-5.5 text-[#E9E9EC]">{title}</h1>
          <div className="mt-0 flex gap-2 font-mono text-[13px] leading-[16.5px] text-[#BBBBC3]">{children}</div>
        </div>
      </div>
    </>
  );
}

function SignatureContent({ signature }: { signature: any }) {
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

function BlockWrapper({ key, children }: { key?: number; children: React.ReactNode }) {
  return (
    <div className="static flex h-10 items-center justify-between" key={key}>
      {children}
    </div>
  );
}

function BuilderStory({ image, title, description, name, link }: { image: any; title: string; description: string; name: string; link?: string }) {
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

export default Index;
