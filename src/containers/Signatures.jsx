import React from "react";
import styled, { css } from "styled-components";
import { Flex, BlockContainer, ScrollContainer } from "../styled.jsx";
import "../App.css";

import Unsigned from "../../static/signatures/UNSIGNED.svg";
// import Unsigned from "../../static/signatures/UNSIGNED Stylistic.svg";

import WillSignature from "../../static/signatures/WillSignature.svg";
import RhodosSignature from "../../static/signatures/RhodosSignature.svg";

import NoPicture from "../../static/profile-pictures/NoPFP.png";
import WillPicture from "../../static/profile-pictures/PFP.png";
import RhodosPicture from "../../static/profile-pictures/RhodosPFP.png";
import AviPicture from "../../static/profile-pictures/Avi.jpg";
import MiguelPicture from "../../static/profile-pictures/Miguel.jpg";
import KevalinPicture from "../../static/profile-pictures/Kevalin.jpg";
import JuanDavidPicture from "../../static/profile-pictures/JuanDavid.jpg";
import ChristianPicture from "../../static/profile-pictures/Christian.jpg";
import StevenPicture from "../../static/profile-pictures/Steven.jpg";
import AryanPicture from "../../static/profile-pictures/Aryan.jpg";
import SuryaPicture from "../../static/profile-pictures/Surya.jpg";
import AriPicture from "../../static/profile-pictures/Ari.jpg";
import RahulPicture from "../../static/profile-pictures/Rahul.jpg";
import KirillPicture from "../../static/profile-pictures/Kirill.jpg";
import ByeongjunPicture from "../../static/profile-pictures/Byeongjun.jpg";
import SagePicture from "../../static/profile-pictures/Sage.jpg";
import LucasPicture from "../../static/profile-pictures/Lucas.jpg";
import VirajPicture from "../../static/profile-pictures/Viraj.jpg";
import MaxPicture from "../../static/profile-pictures/Max.jpeg";
import ParkerPicture from "../../static/profile-pictures/Parker.jpg";
import BenPicture from "../../static/profile-pictures/Ben.jpg";
import AmirPicture from "../../static/profile-pictures/Amir.jpg";
import OwenPicture from "../../static/profile-pictures/Owen.jpg";
import EricPicture from "../../static/profile-pictures/Eric.jpg";
import BereketPicture from "../../static/profile-pictures/Bereket.jpg";
import HongPicture from "../../static/profile-pictures/Hong.jpg";
import SamayPicture from "../../static/profile-pictures/Samay.jpg";
import OmoPicture from "../../static/profile-pictures/Omo.jpg";
import AnPicture from "../../static/profile-pictures/An.jpg";
import EmmaPicture from "../../static/profile-pictures/Emma.jpg";
import NathanPicture from "../../static/profile-pictures/Nathan.jpg";
import NatashaPicture from "../../static/profile-pictures/Natasha.jpg";
import DonahuePicture from "../../static/profile-pictures/Donahue.jpg";

const signatures = [
  [RhodosPicture, "Rhodos", "Founding Colossus", "??", "Nowhere 🇦🇶", RhodosSignature, true],
  [MiguelPicture, "Miguel Piedrafita", "Web3 & Crypto", "20", "Nowhere 🇦🇶", Unsigned],
  [AviPicture, "Avi Schiffman", "Internet Activism", "19", "Nowhere 🇦🇶", Unsigned],
  [JuanDavidPicture, "Juan David Campelargo", "Learning & Flight", "??", "Chicago 🇺🇸", Unsigned],
  [WillPicture, "Will DePue", "Community Analytics", "19", "Los Angeles 🇺🇸", WillSignature],
  [KevalinPicture, "Kevalin Ketcham", "Crypto", "??", "San Francisco 🇺🇸", Unsigned],
  [ByeongjunPicture, "Byeongjun Moon", "DAOs & Governance", "??", "Westwood 🇺🇸", Unsigned],
  [LucasPicture, "Lucas Chu", "DAO Finance", "??", "New York 🇺🇸", Unsigned],
  [KirillPicture, "Kirill Avery", "Dec. Identity", "??", "San Francisco 🇺🇸", Unsigned],
  [SagePicture, "Sage Khanuja", "Health", "??", "Seattle 🇺🇸", Unsigned],
  [MaxPicture, "Max Keenan", "Productivity", "??", "Seattle 🇺🇸", Unsigned],
  [ParkerPicture, "Parker Henderson", "Unset", "??", "Nowhere 🇦🇶", Unsigned],
  [SuryaPicture, "Surya Dantuluri", "On-Chain Chaos", "??", "San Francisco 🇺🇸", Unsigned],
  [AriPicture, "Ari Dutilh", "Community", "17", "Connecticut 🇺🇸", Unsigned],
  [AryanPicture, "Aryan Sharma", "Web3 Data", "??", "Nowhere 🇦🇶", Unsigned],
  [VirajPicture, "Viraj Chhajed", "On-Chain Bot Detection", "??", "Westwood 🇺🇸", Unsigned],
  [StevenPicture, "Steven Lu", "Next-gen Accelerators", "??", "Seattle 🇺🇸", Unsigned],
  [RahulPicture, "Rahul Nandakumar", "DAOs & Community", "??", "New Jersey 🇺🇸", Unsigned],
  [BenPicture, "Benjamin Lim", "Unset", "??", "Nowhere 🇦🇶", Unsigned],
  [ChristianPicture, "Christian Glassiognon", "Unset", "??", "San Jose 🇺🇸", Unsigned],
  [AmirPicture, "Amir Bolous", "Crypto", "??", "Atlanta 🇺🇸", Unsigned],
  [OwenPicture, "Owen Roe", "Esports", "19", "Nowhere 🇦🇶", Unsigned],
  [EricPicture, "Eric Button", "Fintech", "??", "New York 🇺🇸", Unsigned],
  [BereketPicture, "Bereket Semagn", "Development", "13", "Toronto 🇨🇦", Unsigned],
  [SamayPicture, "Samay Shamdasani", "Unlocking Potential", "??", "Ann Arbor 🇺🇸", Unsigned],
  [NathanPicture, "Nathan Newman", "Unlocking Potential", "??", "Ann Arbor 🇺🇸", Unsigned],
  [EmmaPicture, "Emma Salinas", "Something New", "??", "San Francisco 🇺🇸", Unsigned],
  [HongPicture, "Daniel Hong", "Blockchain", "??", "Nowhere 🇦🇶", Unsigned],
  [OmoPicture, "Omoruyi Atekha", "Coordination", "??", "San Francisco 🇺🇸", Unsigned],
  [DonahuePicture, "Nick Donahue", "Housing", "??", "Nowhere 🇦🇶", Unsigned],
  [AnPicture, "An Vu", "Education & Communities", "??", "Nowhere 🇦🇶", Unsigned],
  [NatashaPicture, "Natasha Asmi", "Decentralized Science", "??", "Ann Arbor 🇺🇸", Unsigned],
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default function Signatures({ children }) {
  const shuffled = shuffle(signatures);
  return (
    <BlockContainer title="/ Signatures">
      <ScrollContainer height={230}>
        {shuffled.map(([image, name, subject, age, location, signature, gold]) => SignatureBlock(image, name, subject, age, location, signature, gold))}
        {children}
      </ScrollContainer>
    </BlockContainer>
  );
}

function SignatureBlock(image, name, subject, age, location, signature, gold = false) {
  return (
    <Person key={name}>
      <LeftInfo>
        <Profile src={image} />
        <TextContent>
          <Name>{name}</Name>
          <Description>
            <Mono dark>in</Mono>
            <Mono light gold={gold}>
              {subject}
            </Mono>
            <Mono dark>/</Mono>
            <Mono light>{age}</Mono>
            <Mono dark>from</Mono>
            <Mono light>{location}</Mono>
          </Description>
        </TextContent>
      </LeftInfo>
      <img src={signature} width="80px"></img>
    </Person>
  );
}

const Name = styled.h3`
  font-family: "Body";
  color: #e9e9ec;
  margin: 0;
  font-size: 16px;
  font-weight: regular;
`;

const Profile = styled.img`
  height: 40px;
  border-radius: 5px;
`;

const Person = styled(Flex)`
  overflow: hidden;
  justify-content: space-between;
`;

const LeftInfo = styled(Flex)`
  gap: 10px;
`;

const TextContent = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
`;

const Description = styled(Flex)`
  gap: 7px;
`;

const Mono = styled.p`
  font-family: "Mono";
  margin: 0px;
  font-size: 12px;

  ${({ light }) =>
    light &&
    css`
      color: #ccccd2;
    `}

  ${({ dark }) =>
    dark &&
    css`
      color: #747485;
    `}

  ${({ gold }) =>
    gold &&
    css`
      color: #e1b13e;
    `}
`;
