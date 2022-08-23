import type { NextPage } from "next";
import LogoGroup from "../../public/other/LogoGroup.svg";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../../public/other/arrow.svg";
import { signatures } from "../configs/signatures";
import classNames from "classnames";

const CheckEmail: NextPage = () => {
  return (
    <main>
      <div className="mx-auto mt-4 flex max-w-custom flex-col gap-y-5">
        <div className="flex justify-between">
          <Image src={LogoGroup} alt="The human colossus logo" />
          <a className="font-button text-sm font-semibold">Need help?</a>
        </div>
        <div className="flex flex-col">
          <Container title="/ Check your email!" infotext="Resend email">
            <TextWrapper>
              <h1>We just sent you a magic login link to your email,</h1>
              <br />
              <h1>
                Please check your <span className="font-bold">spam</span> folder if you don’t see it in your inbox.
              </h1>
            </TextWrapper>
          </Container>
          <Container title="/ Signatures">
            <ScrollableWrapper height={250}>
              <div className="flex flex-col gap-3.5">
                {signatures.map((signature, i) => (
                  <BlockWrapper key={i}>
                    <BlockContent image={signature.image} title={signature.name}>
                      <p className="text-[#747485]">in</p>
                      <p
                        className={classNames({
                          "text-[#e1b13e]": false,
                        })}
                      >
                        {signature.subject}
                      </p>
                      <p className="text-[#747485]">/</p>
                      <p>{signature.age}</p>
                      <p className="text-[#747485]">from</p>
                      <p>{signature.location}</p>
                    </BlockContent>
                    <SignatureContent signature={signature}></SignatureContent>
                  </BlockWrapper>
                ))}
              </div>
            </ScrollableWrapper>
          </Container>
        </div>
      </div>
    </main>
  );
};

function Container({ children, title, infotext }: { title: string; infotext?: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 rounded-lg bg-[#00001c] px-4 pb-4 pt-1.5 shadow-custom">
      <div className="mb-3 flex items-center">
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
    <div className="overflow-auto rounded" style={{ height: height }}>
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
          <div className="mt-0 flex gap-2 font-mono text-xs leading-[16.5px] text-[#CCCCD2]">{children}</div>
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

function BlockWrapper({ key, children }: { key: number; children: React.ReactNode }) {
  return (
    <div className="static flex h-10 items-center justify-between" key={key}>
      {children}
    </div>
  );
}

export default CheckEmail;
