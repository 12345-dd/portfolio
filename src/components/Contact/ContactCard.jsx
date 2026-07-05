import { motion } from "framer-motion";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Link,
  Typography,
  useTheme,
} from "@mui/material";

import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

const ContactCard = ({ item, index }) => {
  const theme = useTheme();

  const Icon = item.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
    >
      <Card
        elevation={0}
        sx={{
          height: "100%",

          borderRadius: "26px",

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
              ? "0 20px 45px rgba(0,0,0,.28)"
              : "0 18px 40px rgba(15,23,42,.08)",

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
            p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",

              justifyContent: "space-between",

              alignItems: "flex-start",
            }}
          >
            <Avatar
              sx={{
                width: 60,

                height: 60,

                background:
                  "linear-gradient(135deg,#4F46E5,#06B6D4)",

                boxShadow:
                  "0 10px 25px rgba(79,70,229,.30)",
              }}
            >
              <Icon
                sx={{
                  fontSize: 28,
                }}
              />
            </Avatar>

            {item.link && (
              <IconButton
                component={Link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "primary.main",

                  transition: ".3s",

                  "&:hover": {
                    transform: "rotate(-15deg)",
                  },
                }}
              >
                <ArrowOutwardRoundedIcon />
              </IconButton>
            )}
          </Box>

          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              mt: 3,
              mb: 1,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              lineHeight: 1.7,
            }}
          >
            {item.subtitle}
          </Typography>

          <Typography
            sx={{
              fontWeight: 600,

              wordBreak: "break-word",

              color:
                theme.palette.mode === "dark"
                  ? "#E2E8F0"
                  : "#334155",
            }}
          >
            {item.value}
          </Typography>

          {item.buttonText && (
            <Box
              sx={{
                mt: 3,
              }}
            >
              <Link
                href={item.link}
                target="_blank"
                underline="none"
                color="primary"
                sx={{
                  display: "inline-flex",

                  alignItems: "center",

                  gap: 0.5,

                  fontWeight: 700,

                  transition: ".3s",

                  "&:hover": {
                    gap: 1.2,
                  },
                }}
              >
                {item.buttonText}

                <ArrowOutwardRoundedIcon
                  sx={{
                    fontSize: 18,
                  }}
                />
              </Link>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactCard;