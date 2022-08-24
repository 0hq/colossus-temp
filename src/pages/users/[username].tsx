import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { trpc } from "src/utils/trpc";

const Profile: NextPage<{ hello: string }> = ({ hello }) => {
  const router = useRouter();
  const { username } = router.query;
  const userName = username as string;

  const user = trpc.proxy.user.user.useQuery({ username: userName });

  return (
    <main>
      <div className="px-4">
        <div className="mx-auto max-w-custom flex-col">
          <div className="flex items-center gap-4">
            <Image
              src="https://pbs.twimg.com/profile_images/1330934712165167104/CEJ0NPF0_400x400.jpg"
              alt="The human colossus logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <h1 className="text-3xl font-medium">{user.data?.name}</h1>
          </div>
          <div className="flex gap-2.5 font-mono text-sm text-[#CCCCD2]">
            <h1 className="text-[#FF04AA]">Level 8</h1>
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
            <p className="font-light">
              How to properly measure a (blockchain) system is one of the least
              talked about but most significant steps in its design and
              evaluation. There are numerous consensus protocols and variations
              with various performance and scalability tradeoffs. But as of yet,
              there is still no universally agreed-upon, reliable method that
              enables apples-to-apples comparisons.
            </p>
          </div>
          <div className="my-5 flex items-center rounded-lg bg-[#00001c] p-3 shadow-custom">
            <Image
              src="https://pbs.twimg.com/profile_images/1330934712165167104/CEJ0NPF0_400x400.jpg"
              alt="The human colossus logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div className="ml-2 flex flex-col justify-between">
              <h1 className="z-10 w-full bg-[#00001c] pt-1 font-semibold">
                Building a worldwide education platform for the self-motivated.
              </h1>
              <p className="font-mono text-xs text-muted">
                learn how to build cool shit with{" "}
                <span className="text-white">{user.data?.name}</span>
              </p>
            </div>
          </div>
          <div className="my-5 items-center rounded-lg bg-[#00001c] p-3 shadow-custom">
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
                  Building a worldwide education platform for the
                  self-motivated.
                </h1>
                <p className="font-mono text-xs text-muted">
                  by <span className="text-white">{user.data?.name}</span>
                </p>
              </div>
              <div className="flex h-12 w-16 items-center justify-center rounded border border-[#5F4BDD] font-mono text-[#5F4BDD]">
                <h1 className="text-center text-xs">100 pts</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
