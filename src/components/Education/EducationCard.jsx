import { motion } from "framer-motion";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";

import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";

const EducationCard = ({ education, index }) => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
      }}
    >
      <Card
        elevation={0}
        sx={{
          height: "100%",

          borderRadius: "28px",

          overflow: "hidden",

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
              ? "0 20px 50px rgba(0,0,0,.30)"
              : "0 20px 45px rgba(15,23,42,.08)",

          transition: ".35s",

          "&:hover": {
            transform: "translateY(-8px)",

            borderColor: "primary.main",

            boxShadow:
              "0 25px 60px rgba(37,99,235,.18)",
          },
        }}
      >
        <CardContent
          sx={{
            p: 4,
          }}
        >
          {/* Avatar */}

          <Avatar
            sx={{
              width: 80,
              height: 80,

              mb: 3,

              background:
                "linear-gradient(135deg,#4F46E5,#06B6D4)",

              boxShadow:
                "0 12px 30px rgba(79,70,229,.35)",
            }}
          >
            <SchoolRoundedIcon
              sx={{
                fontSize: 38,
              }}
            />
          </Avatar>

          {/* Degree */}

          <Typography
            variant="h5"
            fontWeight={800}
            sx={{
              mb: 1,
              lineHeight: 1.3,
            }}
          >
            {education.degree}
          </Typography>

          {/* Institute */}

          <Typography
            color="primary.main"
            sx={{
              fontWeight: 700,
              mb: 3,
            }}
          >
            {education.institute}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Duration */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 2,
            }}
          >
            <CalendarMonthRoundedIcon
              color="primary"
            />

            <Typography color="text.secondary">
              {education.duration}
            </Typography>
          </Box>

          {/* CGPA */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              mb: 3,
            }}
          >
            <WorkspacePremiumRoundedIcon
              color="primary"
            />

            <Typography color="text.secondary">
              {education.cgpa}
            </Typography>
          </Box>

          {/* Description */}

          <Typography
            color="text.secondary"
            sx={{
              lineHeight: 1.9,
              mb: 4,
            }}
          >
            {education.description}
          </Typography>

          {/* Status */}

          <Chip
            label={education.status}
            color={
              education.status === "Current"
                ? "success"
                : "primary"
            }
            sx={{
              borderRadius: "30px",
              fontWeight: 700,
              px: 1,
            }}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EducationCard;