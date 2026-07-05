import { Box, Container } from "@mui/material";

import EducationHeader from "./EducationHeader";
import EducationGrid from "./EducationGrid";

const Education = () => {
  return (
    <Box
      id="education"
      sx={{
        py: {
          xs: 10,
          md: 14,
        },
      }}
    >
      <Container maxWidth="lg">
        <EducationHeader />

        <EducationGrid />
      </Container>
    </Box>
  );
};

export default Education;