import { motion } from "framer-motion";

import {
  Box,
  Chip,
  Typography,
  useTheme,
} from "@mui/material";

const SkillsHeader = () => {
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
            duration: .7,
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              mb: 8,
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
              Technologies{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg,#4F46E5,#2563EB,#06B6D4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                I Work With
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
              Building responsive, scalable and modern web applications
              using the MERN stack together with the latest frontend,
              backend and deployment technologies.
            </p>
          </Box>
        </motion.div>

  );
};

export default SkillsHeader;