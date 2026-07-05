import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
  Box,
  Chip,
  Stack,
  Divider,
  useTheme,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import { motion } from "framer-motion";

import ProjectButtons from "./ProjectButtons";

const MotionBox = motion.create(Box);

const ProjectDialog = ({
  open,
  handleClose,
  project,
}) => {
  const theme = useTheme();

  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "18px",

          overflow: "hidden",

          background:
            theme.palette.mode === "dark"
              ? "rgba(17,24,39,.96)"
              : "#fff",

          backdropFilter: "blur(20px)",
        },
      }}
    >
      <MotionBox
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .35,
        }}
      >
        {/* Header */}

        <DialogTitle
          sx={{
            p: 0,
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />

          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,

              bgcolor: "rgba(0,0,0,.55)",

              color: "#fff",

              "&:hover": {
                bgcolor: "rgba(0,0,0,.75)",
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </DialogTitle>

        {/* Body */}

        <DialogContent
          sx={{
            p: 4,
          }}
        >
          <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 2,
                mt:2
            }}
          >
            <Typography
              variant="h4"
              fontWeight={800}
            >
              {project.title}
            </Typography>

            <Chip
              label={project.category}
              color="primary"
            />
          </Box>

          <Typography
            color="text.secondary"
            sx={{
              mt: 3,
              lineHeight: 1.9,
              fontSize: "1rem",
            }}
          >
            {project.description}
          </Typography>

          <Divider
            sx={{
              my: 2,
            }}
          />

          {/* Features */}

          <Typography
            variant="h6"
            fontWeight={700}
            sx={{mb:2}}
          >
            Key Features
          </Typography>

          <Stack spacing={1.5}>
            {project.features.map((feature) => (
              <Stack
                key={feature}
                direction="row"
                spacing={1.5}
                alignItems="center"
              >
                <CheckCircleRoundedIcon
                  color="primary"
                  fontSize="small"
                />

                <Typography>
                  {feature}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Divider
            sx={{
              my: 2,
            }}
          />

          {/* Tech */}

          <Typography
            variant="h6"
            fontWeight={700}
            sx={{mb:2}}
          >
            Technologies Used
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1
            }}
            // direction="row"
            // spacing={1}
            // useFlexGap
            // flexWrap="wrap"
          >
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                color="primary"
                variant="outlined"
                sx={{
                  borderRadius: "25px",
                  fontWeight: 600,
                }}
              />
            ))}
          </Box>

          <Divider
            sx={{
              my: 2,
            }}
          />

          {/* Buttons */}

          <ProjectButtons project={project} />
        </DialogContent>
      </MotionBox>
    </Dialog>
  );
};

export default ProjectDialog;