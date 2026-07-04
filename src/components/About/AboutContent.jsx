import { motion } from "framer-motion";
import {
  Typography,
  Box,
  Chip,
  Button,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const AboutContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Chip
        label="About Me"
        color="primary"
        sx={{
          mb: 3,
          fontWeight: 600,
        }}
      />

      <Typography
        variant="h3"
        fontWeight={800}
        gutterBottom
      >
        Passionate About Building
        <Box
          component="span"
          sx={{
            background: 
                "linear-gradient(90deg,#4F46E5,#2563EB,#06B6D4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {" "}Modern Web Apps
        </Box>
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          mt: 3,
          lineHeight: 2,
          fontSize: "1.05rem",
        }}
      >
        I'm a Full Stack MERN Developer passionate about building
        responsive, scalable, and user-friendly web applications.
        I enjoy transforming ideas into real-world products using
        React.js, Node.js, Express.js, MongoDB, and Material UI.
      </Typography>

      <Typography
        color="text.secondary"
        sx={{
          mt: 3,
          lineHeight: 2,
          fontSize: "1.05rem",
        }}
      >
        I had completed my M.Tech in Computer Engineering,
        I've developed multiple full-stack projects including
        AI-powered applications, dashboards, REST APIs,
        authentication systems, and responsive interfaces.
        I'm always eager to learn new technologies and contribute
        to impactful software solutions.
      </Typography>

      <Button
        variant="contained"
        endIcon={<ArrowForwardRoundedIcon />}
        sx={{
          mt: 5,
          px: 4,
          py: 1.5,
          borderRadius: "40px",
          background:
            "linear-gradient(90deg,#4F46E5,#06B6D4)",
        }}
      >
        Explore Projects
      </Button>
    </motion.div>
  );
};

export default AboutContent;