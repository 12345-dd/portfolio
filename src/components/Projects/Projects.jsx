import { Container, Box, Typography } from "@mui/material";

import projects from "../../data/projects";

import ProjectGrid from "./ProjectGrid";

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: {
          xs: 10,
          md: 14,
        },
      }}
    >
      <Container maxWidth="xl">

        <Typography
          variant="h2"
          fontWeight={800}
          align="center"
        >
          Featured{" "}
          <Box
            component="span"
            sx={{
                background:
                    "linear-gradient(90deg,#4F46E5,#2563EB,#06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}
          >
            Projects
          </Box>
        </Typography>

        <Typography
          color="text.secondary"
          align="center"
          sx={{
            mt: 2,
            maxWidth: 700,
            mx: "auto",
            lineHeight: 1.8,
          }}
        >
          A collection of full-stack and frontend applications
          showcasing modern UI, scalable architecture,
          AI integration, and responsive design.
        </Typography>

        <ProjectGrid projects={projects} />

      </Container>
    </Box>
  );
};

export default Projects;