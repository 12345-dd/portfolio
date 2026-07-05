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

import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

import research from "../../data/research";

const ResearchCard = () => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <Card
        elevation={0}
        sx={{
          borderRadius: "32px",

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
              ? "0 25px 60px rgba(0,0,0,.35)"
              : "0 20px 50px rgba(15,23,42,.08)",

          transition: ".35s",

          "&:hover": {
            transform: "translateY(-8px)",

            borderColor: "primary.main",

            boxShadow:
              "0 25px 70px rgba(37,99,235,.18)",
          },
        }}
      >
        <CardContent
          sx={{
            p: {
              xs: 3,
              md: 5,
            },
          }}
        >
          {/* Top */}

          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              gap: 4,
              alignItems: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <Avatar
              sx={{
                width: 95,
                height: 95,

                background:
                  "linear-gradient(135deg,#4F46E5,#06B6D4)",

                boxShadow:
                  "0 12px 35px rgba(79,70,229,.35)",
              }}
            >
              <EmojiEventsRoundedIcon
                sx={{
                  fontSize: 48,
                }}
              />
            </Avatar>

            <Box
              sx={{
                flex: 1,
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
            >
              <Typography
                variant="h4"
                fontWeight={800}
                sx={{
                  mb: 1,
                }}
              >
                {research.type}
              </Typography>

              <Typography
                variant="h6"
                color="primary.main"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                {research.title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  justifyContent: {
                    xs: "center",
                    md: "flex-start",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <MenuBookRoundedIcon color="primary" />

                  <Typography color="text.secondary">
                    {research.conference}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <CalendarMonthRoundedIcon color="primary" />

                  <Typography color="text.secondary">
                    {research.date}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <EventAvailableRoundedIcon color="primary" />

                  <Typography color="text.secondary">
                    {research.status}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Divider
            sx={{
              my: 2,
            }}
          />

          {/* Description */}

          <Typography
            color="text.secondary"
            sx={{
              lineHeight: 2,
              fontSize: "1rem",
            }}
          >
            {research.description}
          </Typography>

          {/* Tags */}

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              mt: 4,
            }}
          >
            {research.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                sx={{
                  borderRadius: "30px",

                  px: 1,

                  fontWeight: 600,

                  bgcolor:
                    theme.palette.mode === "dark"
                      ? "rgba(79,70,229,.12)"
                      : "rgba(79,70,229,.08)",

                  border:
                    "1px solid rgba(79,70,229,.18)",

                  transition: ".3s",

                  "&:hover": {
                    bgcolor: "primary.main",

                    color: "#fff",

                    transform:
                      "translateY(-3px)",
                  },
                }}
              />
            ))}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ResearchCard;