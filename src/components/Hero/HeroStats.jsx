import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

import heroStats from "../../data/heroStats";

const HeroStats = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        mt: 6,

        display: "grid",

        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(3,1fr)",
        },

        gap: 3,
      }}
    >
      {heroStats.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8 + index * 0.15,
          }}
        >
          <Card
            elevation={0}
            sx={{
              height: "100%",

              borderRadius: "20px",

              backdropFilter: "blur(15px)",

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

              transition: ".35s",

              "&:hover": {
                transform: "translateY(-8px)",

                borderColor: "primary.main",

                boxShadow:
                  "0 20px 40px rgba(79,70,229,.18)",
              },
            }}
          >
            <CardContent
              sx={{
                py: 4,

                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "2rem",
                    md: "2.5rem",
                  },

                  fontWeight: 800,

                  color: "primary.main",
                }}
              >
                {item.value}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 1,

                  fontWeight: 600,
                }}
              >
                {item.label}
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
  );
};

export default HeroStats;