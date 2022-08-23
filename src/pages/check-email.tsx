import type { NextPage } from "next";
import LogoGroup from "../../public/other/LogoGroup.svg";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../../public/other/arrow.svg";

const CheckEmail: NextPage = () => {
  return (
    <main>
      <div className="mx-auto mt-4 flex max-w-custom flex-col gap-y-5">
        <div className="flex justify-between">
          <Image src={LogoGroup} alt="The human colossus logo" />
          <a className="font-button text-sm font-semibold">Need help?</a>
        </div>
        <div className="flex flex-col">
          <TextContainer title="/ Check your email!" infotext="Resend email">
            <h1>We just sent you a magic login link to your email,</h1>
            <br />
            <h1>
              Please check your <span className="font-bold">spam</span> folder if you don’t see it in your inbox.
            </h1>
          </TextContainer>
        </div>
      </div>
    </main>
  );
};

function TextContainer({ title, children, infotext }: { title: string; children: React.ReactNode; infotext?: string }) {
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
      <div className="rounded border border-[#30303A] p-3 font-mono text-xs text-[#B0B0BE]">{children}</div>
    </div>
  );
}

export default CheckEmail;
