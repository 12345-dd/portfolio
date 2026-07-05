import { Box, Container } from "@mui/material";

import ResearchHeader from "./ResearchHeader";
import ResearchCard from "./ResearchCard";

const Research = () => {
  return (
    <Box
      id="research"
      sx={{
        py: {
          xs: 10,
          md: 14,
        },
      }}
    >
      <Container maxWidth="lg">
        <ResearchHeader />

        <ResearchCard />
      </Container>
    </Box>
  );
};

export default Research;