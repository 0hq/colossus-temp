import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import LogoGroup from "../../public/other/LogoGroup.svg";
import Image from "next/image";

const SignIn: NextPage = () => {
  const { data: session } = useSession();

  return (
    <main>
      <div className="p-4">
        <div className="mx-auto flex max-w-custom justify-between">
          <Image src={LogoGroup} alt="The human colossus logo" />
          <a className="font-button text-sm font-semibold">Need help?</a>
        </div>
        <div className="mx-auto flex max-w-custom flex-col">
          <div className="my-5 rounded-lg bg-[#00001c] px-4 pb-4 pt-1.5 shadow-custom">
            <h1 className="z-10 w-full bg-[#00001c] pt-1 font-semibold">
              / Login & Sign Up
            </h1>
            <div className="flex gap-3 pt-4">
              <input
                className="h-9 w-full rounded bg-[#4e4e4e4d] px-2 font-mono text-xs font-normal"
                placeholder="🔎 Enter your email to login / sign up..."
              />
              <button
                className="bold flex h-9 w-40 cursor-pointer items-center justify-center rounded-md bg-[#5f4bdd] px-2 font-button text-sm font-bold text-black"
                onClick={() => {
                  // plausible("clicked-apply");
                  window.open("https://colossus.fyi/apply");
                }}
              >
                Send login link
              </button>
            </div>
          </div>
          <div className="mb-6 rounded-lg bg-[#00001c] px-4 pb-4 pt-1.5 shadow-custom">
            <div className="mb-3 flex items-center">
              <h1 className="z-10 w-full bg-[#00001c] pt-1 font-semibold">
                / Check your email!
              </h1>
              <a className=" w-36 text-right font-button text-xs font-semibold text-[#D1D1D680]">
                Resend email
              </a>
            </div>
            <div className="rounded border border-[#30303A] p-3 font-mono text-xs text-[#B0B0BE]">
              <h1>
                We just sent you a magic login link to your email,
                <span className="font-bold"> will@depue.net.</span>
              </h1>
              <br />
              <h1>
                Make sure you{" "}
                <span className="font-bold">don’t close this page.</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
};

export default SignIn;
