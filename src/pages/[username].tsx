import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Box,
  BuilderStory,
  Container,
  Header,
  Hrline,
  Main,
  Organization,
  ScrollableWrapper,
} from "src/components/basics";
import { trpc } from "src/utils/trpc";
import Star from "../../public/icons/Star.svg";

const Profile: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  const userName = username as string;

  const user = trpc.proxy.user.user.useQuery({ username: userName });

  return (
    <Main>
      <Header value="Join the Colossus" link="/" showBackground />
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
        <div className="mt-1 flex gap-2.5 font-mono text-sm text-[#CCCCD2]">
          <Image
            src={Star}
            alt=""
            width={15}
            height={15}
            className="mt-[-1px]"
          ></Image>
          <h1 className="text-[#FFE604]">Founding Member</h1>
          <h1 className="text-muted">/</h1>
          <h1>19</h1>
          <h1 className="text-muted">from</h1>
          <h1>Denver 🇺🇸</h1>
          <h1 className="text-muted">/</h1>
          <h1 className="text-muted">in</h1>
          <h1>Software Engineering</h1>
        </div>
        <div>
          <h1 className="text-xl">About me</h1>
          <p className="mt-1 text-[14px]">
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
        <BuilderStory
          title="How I built Discord analytics for 3m+ community members."
          image="https://pbs.twimg.com/profile_images/1330934712165167104/CEJ0NPF0_400x400.jpg"
          description="build an analytics service"
          name={user.data?.name!}
          link=""
        />
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
