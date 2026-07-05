import { Box, Container } from "@mui/material";

import ExperienceHeader from "./ExperienceHeader";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <Box
      id="experience"
      sx={{
        py: {
          xs: 10,
          md: 14,
        },
      }}
    >
      <Container maxWidth="lg">
        <ExperienceHeader />

        <ExperienceCard />
      </Container>
    </Box>
  );
};

export default Experience;