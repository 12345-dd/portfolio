import { Box, Chip, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

import techStack from "../../data/techStack";

const TechStack = () => {
  const theme = useTheme()
  
  return (
    <Box
      sx={{
        mt: 6,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 3,
        }}
      >
        Technologies I Work With
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1.2 + index * 0.05,
            }}
          >
            <Chip
              label={tech}
              sx={{
                px: 1.5,
                py: 2.6,

                fontSize: ".95rem",
                fontWeight: 600,

                borderRadius: "50px",

                background:
                  theme.palette.mode === "dark" 
                    ? "rgba(79,70,229,.12)"
                    : "rgba(79,70,229,.08)",

                border:
                  theme.palette.mode === "dark" 
                    ? "rgba(79,70,229,.25)"
                    : "rgba(79,70,229,.18)",

                transition: ".3s",

                cursor: "default",

                "&:hover": {
                  color: "#fff",

                  borderColor: "primary.main",

                  background:
                    "linear-gradient(90deg,#4F46E5,#06B6D4)",

                  transform: "translateY(-4px)",

                  boxShadow:
                    "0 12px 25px rgba(79,70,229,.25)",
                },
              }}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default TechStack;