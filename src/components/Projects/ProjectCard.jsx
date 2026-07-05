import { useState } from "react";
import { motion } from "framer-motion";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import ProjectDialog from "./ProjectDialog";
import ProjectButtons from "./ProjectButtons";
import ProjectTech from "./ProjectTech";

const MotionCard = motion.create(Card);

const ProjectCard = ({ project }) => {
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  return (
    <>
      <MotionCard
        whileHover={{
          y: -10,
        }}
        transition={{
          duration: 0.3,
        }}
        onClick={() => setOpen(true)}
        sx={{
          width: "100%",
          cursor: "pointer",

          borderRadius: "18px",

          overflow: "hidden",

          display: "flex",
          flexDirection: "column",

          background:
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,.05)"
              : "#fff",

          border: `1px solid ${
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,.08)"
              : "rgba(15,23,42,.08)"
          }`,

          boxShadow:
            theme.palette.mode === "dark"
              ? "0 15px 40px rgba(0,0,0,.30)"
              : "0 15px 40px rgba(15,23,42,.08)",

          transition: ".35s",

          "&:hover": {
            borderColor: "primary.main",
            boxShadow:
              "0 20px 50px rgba(37,99,235,.18)",
          },
        }}
      >
        {/* Image */}

        <Box
          sx={{
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: "100%",
              aspectRatio: "16 / 9",
              objectFit: "cover",

              transition: ".5s",

              "&:hover": {
                transform: "scale(1.08)",
              },
            }}
          />

          <Chip
            label={project.category}
            color="primary"
            size="small"
            sx={{
              position: "absolute",
              top: 16,
              left: 16,

              fontWeight: 600,

              backdropFilter: "blur(10px)",
            }}
          />
        </Box>

        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            p: 3,
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
          >
            {project.title}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 1.5,
              lineHeight: 1.8,
              flexGrow: 1,
            }}
          >
            {project.description}
          </Typography>

          <Box
            sx={{
                mt: 2,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                gap: 1.5,
                width: "100%",
            }}
          >
            <ProjectTech technologies={project.technologies} />
          </Box>

          <Box
            sx={{
              mt: 3,
            }}
          >
            <ProjectButtons project={project} />
          </Box>
        </CardContent>
      </MotionCard>

      <ProjectDialog
        open={open}
        handleClose={() => setOpen(false)}
        project={project}
      />
    </>
  );
};

export default ProjectCard;