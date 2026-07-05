import { Grid } from "@mui/material";

import education from "../../data/education";
import EducationCard from "./EducationCard";

const EducationGrid = () => {
  return (
    <Grid
      container
      spacing={4}
      justifyContent="center"
    >
      {education.map((item, index) => (
        <Grid
          key={item.id}
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <EducationCard
            education={item}
            index={index}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default EducationGrid;