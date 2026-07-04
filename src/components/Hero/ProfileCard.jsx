import { motion } from "framer-motion";

import {
  Box,
  Card,
  Typography,
  Chip,
  Avatar,
  Stack,
  IconButton,
  useTheme,
} from "@mui/material";

import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import profilePhoto from "../../assets/images/mayur.jpeg";
import personalInfo from "../../data/personalInfo";
import socialLinks from "../../data/socialLinks";
import techStack from "../../data/techStack"

const infoCards = [
  {
    icon: <LocationOnRoundedIcon color="primary" />,
    title: "Location",
    value: "Surat, Gujarat",
  },
  {
    icon: <SchoolRoundedIcon color="primary" />,
    title: "Education",
    value: "M.Tech CE",
  },
  {
    icon: <WorkRoundedIcon color="primary" />,
    title: "Experience",
    value: "MERN Internship",
  },
  {
    icon: <RocketLaunchRoundedIcon color="primary" />,
    title: "Projects",
    value: "5",
  },
];

const ProfileCard = () => {
  const theme = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        y: -8,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 490,
          mx: "auto",
          p: 4,
          borderRadius: "30px",

          background:
            "linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.03))",

          backdropFilter: "blur(20px)",

          border: "1px solid rgba(255,255,255,.08)",

          boxShadow:
            "0 30px 70px rgba(0,0,0,.35)",

          overflow: "visible",

          position: "relative",
        }}
      >
        {/* Glow */}

        <Box
          sx={{
            position: "absolute",
            inset: -2,
            borderRadius: "32px",
            background:
              "linear-gradient(135deg,#4F46E5,#06B6D4)",
            opacity: .15,
            filter: "blur(35px)",
            zIndex: -1,
          }}
        />

        {/* Status */}

        <Chip
          icon={
            <CircleRoundedIcon
              sx={{
                fontSize: 12,
                color: "#22C55E !important",
              }}
            />
          }
          label="Open to Work"
          sx={{
            mx: "auto",
            display: "flex",
            width: "fit-content",

            bgcolor: "rgba(34,197,94,.10)",

            color: "#22C55E",

            border:
              "1px solid rgba(34,197,94,.25)",

            fontWeight: 700,
          }}
        />

        {/* Photo */}

        <Box
          sx={{
            mt: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            src={profilePhoto}
            sx={{
              width: 190,
              height: 190,

              border: "5px solid",

              borderColor: "primary.main",

              boxShadow:
                "0 0 40px rgba(79,70,229,.35)",
            }}
          />
        </Box>

        {/* Name */}

        <Typography
          align="center"
          sx={{
            mt: 3,
            fontSize: "2rem",
            fontWeight: 800,
          }}
        >
          {personalInfo.name}
        </Typography>

        <Typography
          align="center"
          color="primary"
          sx={{
            mt: 1,
            fontWeight: 700,
          }}
        >
          {personalInfo.role}
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{
            mt: 2,
            lineHeight: 1.8,
          }}
        >
          Passionate about building scalable,
          responsive and modern MERN
          applications with clean UI and
          efficient backend architecture.
        </Typography>

        {/* Info */}

        <Box
          sx={{
            mt: 4,

            display: "grid",

            gridTemplateColumns:
              "repeat(2,1fr)",

            gap: 2,
          }}
        >
          {infoCards.map((item) => (
            <Box
              key={item.title}
              sx={{
                textAlign: "center",

                p: 2,

                borderRadius: 3,

                background:
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,.05)"
                    : "rgba(99,102,241,.06)",

                border:
                  `1px solid ${
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,.08)"
                      : "rgba(99,102,241,.18)"
                  }`,

                transition: ".3s",

                "&:hover": {
                  transform:
                    "translateY(-5px)",

                  borderColor:
                    "primary.main",
                },
              }}
            >
              {item.icon}

              <Typography
                variant="h6"
                color="text.secondary"
                mt={1}
              >
                {item.title}
              </Typography>

              <Typography
                fontWeight={700}
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Tech */}

        <Box
          sx={{
            mt: 4,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
            width: "100%",
          }}
        >
          {techStack.slice(0,6).map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                borderRadius: "20px",
                fontWeight: 600,
                px: 0.5,
              }}
            />
          ))}
        </Box>

        {/* Social */}

        <Stack
          direction="row"
          spacing={5}
          sx={{marginTop: 4, justifyContent:"center"}}
        >
          <IconButton
            component="a"
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            sx={{
              width: 50,
              height: 50,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              transition: ".3s",
              "&:hover": {
                bgcolor: "primary.main",
                color: "#fff",
                transform: "translateY(-4px)",
                boxShadow: "0 10px 25px rgba(37,99,235,.35)",
              },
            }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            component="a"
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            sx={{
              width: 50,
              height: 50,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              transition: ".3s",
              "&:hover": {
                bgcolor: "#0077B5",
                color: "#fff",
                transform: "translateY(-4px)",
                boxShadow: "0 10px 25px rgba(0,119,181,.35)",
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            component="a"
            href={socialLinks.email}
            color="primary"
            sx={{
              width: 50,
              height: 50,
              bgcolor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              transition: ".3s",
              "&:hover": {
                bgcolor: "#EA4335",
                color: "#fff",
                transform: "translateY(-4px)",
                boxShadow: "0 10px 25px rgba(234,67,53,.35)",
              },
            }}
          >
            <EmailRoundedIcon />
          </IconButton>
        </Stack>
      </Card>
    </motion.div>
  );
};

export default ProfileCard;