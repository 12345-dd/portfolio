import {
  Stack,
  Button,
  Box,
} from "@mui/material";

import GitHubRoundedIcon from "@mui/icons-material/GitHub";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";

const ProjectButtons = ({ project }) => {
  return (
    <Box
        sx={{
            mt: 2,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: 2,
            width: "100%",
        }}
    >
      {project.frontendGithub && (
        <Button
          component="a"
          href={project.frontendGithub}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          variant="outlined"
          startIcon={<CodeRoundedIcon />}
          onClick={(e) => e.stopPropagation()}
          sx={{
            borderRadius: "30px",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Frontend
        </Button>
      )}

      {project.backendGithub && (
        <Button
          component="a"
          href={project.backendGithub}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          variant="outlined"
          startIcon={<StorageRoundedIcon />}
          onClick={(e) => e.stopPropagation()}
          sx={{
            borderRadius: "30px",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Backend
        </Button>
      )}

      {project.github && (
        <Button
          component="a"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          variant="outlined"
          startIcon={<GitHubRoundedIcon />}
          onClick={(e) => e.stopPropagation()}
          sx={{
            borderRadius: "30px",
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          GitHub
        </Button>
      )}

      {project.live && (
        <Button
          component="a"
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          variant="contained"
          endIcon={<LaunchRoundedIcon />}
          onClick={(e) => e.stopPropagation()}
          sx={{
            borderRadius: "30px",
            textTransform: "none",
            fontWeight: 700,
            px: 2.5,
            background:
              "linear-gradient(90deg,#4F46E5,#06B6D4)",

            "&:hover": {
              background:
                "linear-gradient(90deg,#4338CA,#0891B2)",
            },
          }}
        >
          Live Demo
        </Button>
      )}
    </Box>
  );
};

export default ProjectButtons;