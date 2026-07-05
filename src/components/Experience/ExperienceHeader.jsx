import { motion } from "framer-motion";

import {
  Typography,
  Box,
  useTheme,
} from "@mui/material";

const ExperienceHeader = () => {
  const theme = useTheme();

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
        duration: .8,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          mb: 7,
        }}
      >
        <h2
            style={{
                margin: 0,
                fontSize: "clamp(2.6rem,5vw,4rem)",
                fontWeight: 800,
                lineHeight: 1.15,
            }}
        >
          Professional{" "}

          <span
            style={{
                background:
                    "linear-gradient(90deg,#4F46E5,#2563EB,#06B6D4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}
          >
            Experience
          </span>
        </h2>

        <p
            style={{
                maxWidth: 720,
                margin: "24px auto 0",
                lineHeight: 1.9,
                fontSize: "1.1rem",
                color: "gray",
            }}
        >
          My internship experience helped me transform
          academic knowledge into practical skills by
          building scalable web applications using the
          MERN stack and collaborating in a professional
          development environment.
        </p>
      </Box>
    </motion.div>
  );
};

export default ExperienceHeader;