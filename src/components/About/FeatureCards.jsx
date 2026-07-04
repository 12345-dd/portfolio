import Grid from "@mui/material/Grid";
import aboutFeatures from "../../data/aboutFeatures";
import FeatureCard from "./FeatureCard";

const FeatureCards = () => {
  return (
    <Grid container spacing={3}>
      {aboutFeatures.map((feature) => (
        <Grid
          size={{
            xs: 12,
            sm: 6,
          }}
          key={feature.title}
        >
          <FeatureCard feature={feature} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FeatureCards;