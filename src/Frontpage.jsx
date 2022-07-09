import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Flex from "./Flex";
import styled, { css } from "styled-components";
import Box from "./Box";
import Arrow from "../static/down.svg";
import Lock from "../static/Lock.png";
import Marquee from "react-fast-marquee";

const colors = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#9e9e9e",
  "#607d8b",
];

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        "border-color": "transparent transparent #fff transparent",
        height: "40px",
        fontFamily: "Inter",
        fontSize: "16px",
        width: "117px",
      }}
    >
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
};

export default function Home() {
  const [score, setScore] = useState(null);
  const [lines, setLines] = useState(null);
  const [frozenComparison, setFrozenComparison] = useState(null);
  const [comparison, setComparison] = useState([]);
  const [lineColors, setLineColors] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [starter, setStarter] = useState(false);
  const [starterValue, setStarterValue] = useState();
  const [dropdownValue, setDropdownValue] = useState("python");
  const [dropdownOptions, setDropdownOptions] = useState([
    "python",
    "c",
    "c++",
    "java",
    "ml",
    "pascal",
    "ada",
    "lisp",
    "scheme",
    "haskell",
    "fortran",
    "ascii",
    "vhdl",
    "verilog",
    "perl",
    "matlab",
    ,
    "mips",
    "prolog",
    "spice",
    "vb",
    "csharp",
    "modula2",
    "a8086",
    "javascript",
    "plsql",
  ]);

  useEffect(() => {
    fetch("/static/defaultText.txt").then((res) => {
      res.text().then((text) => {
        const submission = document.getElementById("submissionField");
        submission.innerHTML = text;
        const comparison_element = document.getElementById("comparisonField");
        comparison_element.innerHTML = text;
      });
    });
  }, []);

  async function check() {
    const submission_value = document.getElementById("submissionField").value;
    let comparison_value, split;
    if (comparison.length === 0) {
      const comparison_element = document.getElementById("comparisonField");
      comparison_value = comparison_element.value;
      split = comparison_element.value.split("\n");
      setFrozenComparison(comparison_value);
      setComparison(split);
    } else {
      comparison_value = frozenComparison;
      split = comparison;
    }

    var bodyFormData = new FormData();
    bodyFormData.append("comparison_file", comparison_value);
    bodyFormData.append("main_file", submission_value);
    if (starterValue) {
      bodyFormData.append("starter_file", starterValue);
    }
    bodyFormData.append("language", dropdownValue);
    bodyFormData.append("engine", "MOSS");
    let done = await axios.post("http://localhost:5000/check", bodyFormData);
    // let done = { data: { line_numbers: [{ file_1: [1, 89], file_2: [1, 89] }], similarity_score: 99 }, status: "Data ready!", success: true };
    console.log(done.data);

    if (done.data.success) {
      let lines = done.data.data.line_numbers;
      console.log(lines);
      let lines_with_color = lines.map((line, i) => {
        line.color = colors[i];
        return line;
      });
      console.log(lines_with_color);
      setScore(done.data.data.similarity_score);
      setLines(lines_with_color);
      // iterate through comparison and join together the lines, seperated by the line numbers

      let temp = [];
      for (let i = 0; i < split.length; i++) {
        let color = "#999999";
        for (let x = 0; x < lines.length; x++) {
          if (lines[x].file_2[0] - 1 <= i && lines[x].file_2[1] - 1 >= i) {
            color = lines[x].color;
          }
        }
        temp.push(color);
      }
      console.log(temp, lines);
      setLineColors(temp);
    }
  }

  const ScrollText = styled.p`
    color: #ffffff;
    margin: 5px;
    margin-right: 50px;
  `;

  return (
    <>
      <Marquee style={{ backgroundColor: "#001AFF" }} gradient={false} speed={10}>
        {true &&
          Array(10)
            .fill(0)
            .map((_, i) => <ScrollText>Plagiarism.fyi</ScrollText>)}
      </Marquee>
      <Marquee style={{ backgroundColor: "#EE0000" }} gradient={false} direction="right">
        {true &&
          Array(10)
            .fill(0)
            .map((_, i) => (
              <ScrollText>
                🚨 We don’t share with schools... but! <u>Read more.</u>
              </ScrollText>
            ))}
      </Marquee>
      <Marquee style={{ backgroundColor: "#009D23" }} gradient={false}>
        {true &&
          Array(10)
            .fill(0)
            .map((_, i) => (
              <ScrollText>
                How do I use this tool? <u>A guide to beating MOSS.</u>
              </ScrollText>
            ))}
      </Marquee>
      <Main>
        <Flex justifyContent="space-between">
          {starter && (
            <Flex flexDirection="column" width="500px" position="absolute" top="112px" box-shadow="0px 4px 16px rgba(0, 0, 0, 0.25)" zIndex="10">
              <WhiteBox code width="100%" flex="1" grey>
                <Flex justifyContent="space-between" width="100%">
                  <Text>Starter Code </Text>
                  <Text
                    onClick={() => {
                      const starter_elem = document.getElementById("starterField");
                      setStarterValue(starter_elem.value);
                      setStarter(false);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    Done!
                  </Text>
                </Flex>
              </WhiteBox>
              <WhiteBox code vertical flex="1" grey style={{ height: "400px" }}>
                <Textarea contenteditable="true" id="starterField" grey placeholder={"Paste any code shared across all files here..."}>
                  {starterValue}
                </Textarea>
              </WhiteBox>
            </Flex>
          )}

          <Flex maxWidth="450px" justifyContent="space-between" flexGrow="1" flexWrap="wrap">
            <WhiteBox
              width="117px"
              onClick={() => {
                dropdown ? setDropdown(false) : setDropdown(true);
              }}
            >
              <Dropdown
                label="Language"
                value={dropdownValue}
                options={dropdownOptions}
                onChange={(e) => {
                  setDropdownValue(e.target.value);
                }}
              ></Dropdown>
            </WhiteBox>

            <WhiteBox
              width="204px"
              onClick={() => {
                if (starter) {
                  const starter_elem = document.getElementById("starterField");
                  setStarterValue(starter_elem.value);
                  setStarter(false);
                } else {
                  setStarter(true);
                }
              }}
              style={{ cursor: "pointer" }}
            >
              <Text>{starterValue ? "Change starter file" : "+ Add a starter file"}</Text>
            </WhiteBox>
            <WhiteBox width="109px" style={{ cursor: "not-allowed" }}>
              <Text>MOSS</Text>
              <img src={Lock} width="17px" alt="arrow" />
            </WhiteBox>
          </Flex>
          <Link
            onClick={() => {
              console.log("click");
              check();
            }}
            href="#"
          >
            <WhiteBox black width="182px" ml="20px">
              <Text>Submit to MOSS</Text>
            </WhiteBox>
          </Link>
        </Flex>
        {score !== null && (
          <Flex flexDirection="row" mt="20px" width="100%" flex="1">
            <Flex flexDirection="column" flex="1" maxWidth="270px">
              <WhiteBox code width="100%" flex="1">
                <Text bold>🚨 Report:</Text>
                <Text>{score}% similarity score</Text>
              </WhiteBox>
            </Flex>
            <Flex flexDirection="column" flex="1">
              <WhiteBox code width="100%" flex="1" overflow="auto">
                {lines?.length > 0 &&
                  lines.map((line, index) => (
                    <Text nowrap margin style={{ color: colors[index % 19] }} key={index}>
                      {line.file_1[0]}->{line.file_1[1]} looks like {line.file_2[0]}->{line.file_2[1]}
                    </Text>
                  ))}
              </WhiteBox>
            </Flex>
          </Flex>
        )}

        <Flex vertical flexDirection="row" width="100%" flex="1" mt="20px">
          <Flex flexDirection="column" flex="1" mr="25px">
            <WhiteBox code width="100%" flex="1">
              <Text>Submission Code</Text>
            </WhiteBox>
            <WhiteBox code vertical flex="1">
              <Textarea
                contenteditable="true"
                id="submissionField"
                onChange={(c) => {
                  console.log(c.target.value);
                  console.log(c.target.value.split("\n"));
                }}
              ></Textarea>
            </WhiteBox>
          </Flex>
          <Flex flexDirection="column" flex="1">
            <WhiteBox code width="100%" flex="1">
              <Text>Comparison Code </Text>
            </WhiteBox>
            <WhiteBox code vertical flex="1">
              {comparison.length === 0 && <Textarea contenteditable="true" id="comparisonField"></Textarea>}

              {comparison.length > 0 && (
                <Flex flexDirection="column" overflow="auto">
                  {comparison.map((line, index) => (
                    <ComparisonLine key={"line" + index} color={lineColors[index]}>
                      {line == "" ? " " : line}
                    </ComparisonLine>
                  ))}
                </Flex>
              )}
            </WhiteBox>
          </Flex>
        </Flex>
      </Main>
      <WhiteBox code footer width="100%" flex="1">
        <Text>Who built this?</Text>
        <LinkFooter>@willdepue</LinkFooter>
        <Text>Why?</Text>
        <LinkFooter>Article on why I built this.</LinkFooter>
        <Text>How can I follow your work?</Text>
        <LinkFooter>Text WILL to 000 000 0000 for release updates.</LinkFooter>
      </WhiteBox>
    </>
  );
}

const Main = styled.div`
  padding: 50px;
  padding-top: 30px;
`;

const WhiteBox = styled(Box)`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 15px 10px 18px;
  gap: 8px;

  height: 42px;

  background: #ffffff;
  border: 1px solid #d9d9d9;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  ${({ black }) =>
    black &&
    css`
      background: #000000;
      color: #ffffff;
    `}

  ${({ code }) =>
    code &&
    css`
      text-align: left;
      justify-content: flex-start;
    `}

    ${({ vertical }) =>
    vertical &&
    css`
      align-items: stretch;
      height: 80vh;
    `}

    ${({ grey }) =>
    grey &&
    css`
      background: #eeeeee;
    `}

    ${({ footer }) =>
    footer &&
    css`
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
`;

const Textarea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  font-size: 13px;
  font-family: monospace;
  margin: 1px;

  ${({ grey }) =>
    grey &&
    css`
      background: #eeeeee;
    `}
`;

const Text = styled.p`
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}

  ${({ nowrap }) =>
    nowrap &&
    css`
      white-space: nowrap;
    `}

    ${({ margin }) =>
    margin &&
    css`
      margin-right: 10px;
    `}
`;

const ComparisonLine = styled.pre`
  color: ${({ color }) => color};
  font-size: 13px;
  font-family: monospace;
  margin: 0px;
`;

const Link = styled.a`
  text-decoration: none;
`;

const LinkFooter = styled.a`
  text-decoration: underline;
  font-weight: bold;
  margin-right: 15px;
`;