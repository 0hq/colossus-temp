import type { NextPage } from "next";
import { Main, Container, TextWrapper, Footer } from "../components/basics";
import Header from "src/components/public-header";

const CheckEmail: NextPage = () => {
  return (
    <Main>
      <Header link="" button="Join the Colossus" />
      <Container title="/ Check your email!" infotext="Resend email">
        <TextWrapper>
          <h1>We just sent you a magic login link to your email,</h1>
          <br />
          <h1>
            Please check your <span className="font-bold">spam</span> folder if you don’t see it in your inbox.
          </h1>
        </TextWrapper>
      </Container>
    </Main>
  );
};

export default CheckEmail;
