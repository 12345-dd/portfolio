import {
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";

import AboutContent from "./AboutContent";
import FeatureCards from "./FeatureCards";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        py: {
          xs: 10,
          md: 15,
        },
      }}
    >
      <Container maxWidth="xl">
        <Typography
          align="center"
          variant="h2"
          fontWeight={800}
          gutterBottom
        >
          About Me
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{
            mb: 8,
            maxWidth: 650,
            mx: "auto",
          }}
        >
          Get to know more about my journey, skills, and what
          drives me to build modern web applications.
        </Typography>

        <Grid
          container
          spacing={8}
          sx={{alignItems: "center"}}
        >
          <Grid
            size={{
              xs: 12,
              md: 5,
            }}
          >
            <AboutContent />
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 7,
            }}
          >
            <FeatureCards />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;