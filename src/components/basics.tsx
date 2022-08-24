import Image from "next/image";
import Link from "next/link";
import Arrow from "../../public/other/arrow.svg";

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="mx-auto mt-4 flex min-h-[90vh] max-w-custom flex-col gap-y-6">{children}</div>
      <Footer />
    </main>
  );
}

export function Footer() {
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

export function Container({ children, title, infotext }: { title: string; infotext?: string; children: React.ReactNode }) {
  return (
    <div className=" rounded-lg bg-[#00001c] px-4 pb-4 pt-1.5 shadow-custom">
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
