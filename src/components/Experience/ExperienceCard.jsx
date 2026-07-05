import { motion } from "framer-motion";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Avatar,
  Divider,
  useTheme,
} from "@mui/material";

import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import experience from "../../data/experience";

const ExperienceCard = () => {
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
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
    >
      <Card
        elevation={0}
        sx={{
          borderRadius: "30px",

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
              "0 25px 60px rgba(37,99,235,.15)",
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
          {/* Header */}

          <Box
            sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    md: "row"
                },
                gap: 3,
                alignItems: {
                    xs: "center",
                    md: "flex-start"
                }
            }}
          >
            <Avatar
              sx={{
                width: 90,
                height: 90,

                background:
                  "linear-gradient(135deg,#4F46E5,#06B6D4)",

                boxShadow:
                  "0 12px 30px rgba(79,70,229,.35)",
              }}
            >
              <BusinessCenterRoundedIcon
                sx={{
                  fontSize: 42,
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
                sx={{m:2}}
              >
                {experience.role}
              </Typography>

              <Typography
                variant="h6"
                color="primary.main"
                sx={{
                  m: 2,
                  fontWeight: 700,
                }}
              >
                {experience.company}
              </Typography>

              <Box 
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        sm: "row"
                    },
                    gap: 2,
                    mt: 2,
                    justifyContent: {
                        xs: "center",
                        md: "flex-start"
                    }
                }}
              >
                <Box
                    sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "center"
                    }}
                >
                  <CalendarMonthRoundedIcon
                    color="primary"
                  />

                  <Typography
                    color="text.secondary"
                  >
                    {experience.duration}
                  </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        gap: 1,
                        alignItems: "center"
                    }}
                >
                  <LocationOnRoundedIcon
                    color="primary"
                  />

                  <Typography
                    color="text.secondary"
                  >
                    {experience.location}
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
            {experience.description}
          </Typography>

          {/* Responsibilities */}

          <Box
            sx={{
              mt: 2,
            }}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{mb:2}}
            >
              Key Responsibilities
            </Typography>

            <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3
                }}
            >
              {experience.responsibilities.map(
                (item) => (
                  <Box
                    key={item}
                    sx={{
                        display: "flex",
                        gap: 2,
                        alignItems: "flex-start"
                    }}
                  >
                    <CheckCircleRoundedIcon
                      color="primary"
                      sx={{
                        mt: ".25rem",
                      }}
                    />

                    <Typography
                      color="text.secondary"
                    >
                      {item}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
          </Box>

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
                flexDirection: "row",
                gap: 2,
                flexWrap: "wrap"
            }}
          >
            {experience.technologies.map(
              (tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  sx={{
                    borderRadius: "30px",

                    px: 1,

                    fontWeight: 600,

                    bgcolor:
                      theme.palette.mode ===
                      "dark"
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
              )
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;