import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

import HeroContent from "./HeroContent";
import BackgroundGlow from "./BackgroundGlow";
import ProfileCard from "./ProfileCard";

const Hero = () => {
  return (
    <>
      <BackgroundGlow />

      <Container
        maxWidth="xl"
        id="home"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          mt:1,
          pt: {
            xs: 12,
            md: 18,
          },
          pb: 8,
        }}
      >
        <Grid
          container
          spacing={6}
        >
          <Grid
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <HeroContent />
          </Grid>

          <Grid
            size={{
              xs: 12,
              lg: 6,
            }}
          >
            <ProfileCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Hero;