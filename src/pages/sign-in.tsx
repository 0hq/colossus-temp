import type { NextPage } from "next";
import LogoGroup from "../../public/other/LogoGroup.svg";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";

const SignIn: NextPage = () => {
  const [email, setEmail] = useState("");

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
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bold flex h-9 w-40 cursor-pointer items-center justify-center rounded-md bg-[#5f4bdd] px-2 font-button text-sm font-bold text-black"
                onClick={() => {
                  signIn("email", { email: email, callbackUrl: "/" });
                }}
              >
                Send login link
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
