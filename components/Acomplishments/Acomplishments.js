import React, { useState } from "react";
// import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 10, text: "Succesfull Projects " },
  { number: 57, text: "Students" },
  { number: 3, text: "Programming languages" },
  { number: 12, text: "Github repos" },
];

const Acomplishments = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <Section>
        <SectionTitle>Personal acomplishments</SectionTitle>
        <Boxes>
          {data.map((card, index) => (
            <Box key={index}>
              <BoxNum>
                {/* {counterOn && (
                  <CountUp start={0} end={card.number} duration={5} delay={0} />
                )} */}
                +
              </BoxNum>
              <BoxText>{card.text}</BoxText>
            </Box>
          ))}
        </Boxes>
      </Section>
    </ScrollTrigger>
  );
};

export default Acomplishments;
