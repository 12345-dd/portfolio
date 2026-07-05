import Grid from "@mui/material/Grid";

import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects }) => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        mt: 4,
      }}
    >
      {projects.map((project) => (
        <Grid
          key={project.id}
          size={{
            xs: 12,
            sm: 6,
            lg: 4,
          }}
          sx={{
            display: "flex",
          }}
        >
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectGrid;