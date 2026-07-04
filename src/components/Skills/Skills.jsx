import { Box, Container } from "@mui/material";

import SkillsHeader from "./SkillsHeader";
import SkillGrid from "./SkillGrid";

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: {
          xs: 10,
          md: 14,
        },
      }}
    >
      <Container maxWidth="lg">
        <SkillsHeader />

        <SkillGrid />
      </Container>
    </Box>
  );
};

export default Skills;