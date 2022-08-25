import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Box,
  BuilderStory,
  Container,
  Header,
  Hrline,
  ImageButton,
  Main,
  Organization,
  ScrollableWrapper,
} from "src/components/basics";
import { trpc } from "src/utils/trpc";
import Star from "../../public/icons/Star.svg";
import Twitter from "../../public/icons/Twitter.svg";
import Substack from "../../public/icons/Substack.svg";
import Message from "../../public/icons/Message.svg";
import test from "node:test";
import { useQuery } from "react-query";

const Profile: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  const userName = username as string;
  const { data: session, status } = useSession();

  const user = trpc.proxy.user.user.useQuery({ username: userName });

  const query = useQuery(["fetch-iamge", user.data?.username], async () => {
    const { default: image } = await import(
      `/public/profile-pictures/${user.data?.username}.jpg`
    );
    return image;
  });

  const authHeader = () => {
    if (session?.user?.email === user.data?.email) {
      return <Header value="Edit Profile" link="/profile" showBackground />;
    }
    if (status === "loading" || user.isLoading) return;
    return <Header value="Join the Colossus" link="/" showBackground />;
  };

  if (!user.data) {
    return null;
  }

  return (
    <Main>
      {authHeader()}
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
          <h1 className="text-3xl font-medium">{user.data?.name}</h1>
        </div>
        <div className="mt-1 flex flex-wrap gap-2 font-mono text-[0.80rem] text-[#CCCCD2]">
          <div className="flex">
            <Image
              src={Star}
              alt=""
              width={15}
              height={15}
              className="mt-[-1px]"
            />
          </div>
          <h1 className="text-[#FFE604]">Founding Member</h1>
          <div className="flex gap-2">
            <h1 className="text-muted">/</h1>
            <h1>19</h1>
          </div>
          <div className="flex gap-2">
            <h1 className="text-muted">from</h1>
            <h1>Denver 🇺🇸</h1>
          </div>
          <div className="flex gap-2">
            <h1 className="text-muted">/</h1>
            <h1 className="text-muted">in</h1>
            <h1>Software Engineering</h1>
          </div>
        </div>
        <Hrline />
        <div className="mt-1 mb-1">
          <div className="flex justify-between">
            <h1 className="text-[22px]">About me</h1>

            <div className=" flex justify-between gap-3 px-3">
              <ImageButton
                text=""
                textColor="text-[#DDDDE8]"
                border="border-[#0077B5]"
              >
                <Image src={Twitter} alt="" width="16px" height="16px"></Image>
              </ImageButton>
              <ImageButton
                text=""
                textColor="text-[#DDDDE8]"
                border="border-[#FE6719]"
              >
                <Image src={Substack} alt="" width="16px" height="16px"></Image>
              </ImageButton>
              <ImageButton
                text=""
                textColor="text-[#DDDDE8]"
                border="border-[#5865F1]"
              >
                <Image src={Message} alt="" width="16px" height="16px"></Image>
              </ImageButton>
            </div>
          </div>
          <p className="mt-1.5 text-[15px]">
            How to properly measure a (blockchain) system is one of the least
            talked about but most significant steps in its design and
            evaluation. There are numerous consensus protocols and variations
            with various performance and scalability tradeoffs. But as of yet,
            there is still no universally agreed-upon, reliable method that
            enables apples-to-apples comparisons.
          </p>
        </div>
        <Hrline />
      </div>

      <Box styles="px-4 py-3.5">
        <div>
          <a href="">
            <div className="flex h-10 items-center justify-between truncate">
              <div className="flex">
                {query.data && (
                  <Image
                    src={query.data}
                    alt="The human colossus logo"
                    width={40}
                    height={40}
                    className="rounded"
                    layout="fixed"
                  />
                )}
                <div className="mx-3 flex flex-col justify-between">
                  <h1 className="text-normal font-semibold leading-5.5 text-[#E9E9EC]">
                    How I built Discord analytics for 3m+ community members.
                  </h1>
                  <div className="mt-0 flex w-full gap-2 whitespace-nowrap font-mono text-xs leading-[16.5px] text-[#BBBBC3]">
                    <p className="text-[#747485]">learn how to</p>
                    <p>build an analytics service</p>
                    <p className="text-[#747485]">with</p>
                    <p className="">{user.data?.name!} asdasdfsdfa</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </Box>

      <Container title="/ Organizations">
        <ScrollableWrapper>
          <Organization
            title="A global education platform for the self-motivated."
            image="https://pbs.twimg.com/profile_images/1555419633460473856/tabdTAGz_400x400.jpg"
            location="🌍"
            time="June 2022"
            size="50+"
            name="Colossus"
            link=""
            category="Education"
          />
        </ScrollableWrapper>
      </Container>

      <Container title="/ Projects">
        <ScrollableWrapper>
          <Organization
            title="A global education platform for the self-motivated."
            image="https://pbs.twimg.com/profile_images/1555419633460473856/tabdTAGz_400x400.jpg"
            location="🌍"
            time="June 2022"
            size="50+"
            name="Colossus"
            link=""
            category="Education"
          />
        </ScrollableWrapper>
      </Container>
    </Main>
  );
};

export default Profile;
