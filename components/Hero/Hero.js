import React, { useState } from "react";
import { Dialog, styled, Stack } from "@mui/material";
import Contact from "./Contact";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const StyledDialog = styled(Dialog)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br />
          My personal portfolio
        </SectionTitle>
        <SectionText>
          I will give you the solution you require for your web dev needs
        </SectionText>
        <Button onClick={() => setOpen(!open)}>Let's talk</Button>
        <StyledDialog open={open} onClose={handleClose}>
          <Stack sx={{ p: 5 }}>
            <Contact handleClose={handleClose} />
          </Stack>
        </StyledDialog>
      </LeftSection>
    </Section>
  );
};

export default Hero;
