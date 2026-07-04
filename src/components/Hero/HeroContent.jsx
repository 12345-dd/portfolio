import { Box, Chip, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

import heroInfo from "../../data/heroInfo";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import TechStack from "./TechStack";

const HeroContent = () => {
  const theme = useTheme()
  
  return (
    <Box sx={{width: "100%"}}>

      {/* Availability Badge */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
      >
        <Chip
          icon={
            <FiberManualRecordRoundedIcon
              sx={{
                fontSize: 12,
                color: "#22C55E !important",
              }}
            />
          }
          label={heroInfo.badge}
          sx={{
            mb: 4,

            px: 1,

            borderRadius: "50px",

            fontWeight: 600,

            bgcolor: "rgba(34,197,94,.10)",

            color: "#22C55E",

            border: "1px solid rgba(34,197,94,.25)",
          }}
        />
      </motion.div>

      {/* Greeting */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .2 }}
      >
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{
            mb: 1,
            fontWeight: 500,
          }}
        >
          {heroInfo.greeting}
        </Typography>
      </motion.div>

      {/* Name */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .3 }}
      >
        <Typography
          sx={{
            fontWeight: 900,

            lineHeight: 1.1,

            fontSize: {
              xs: "3rem",
              md: "5rem",
            },

            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(90deg,#F8FAFC,#60A5FA,#8B5CF6)"
                : "linear-gradient(90deg,#0F172A,#2563EB,#7C3AED)",

            WebkitBackgroundClip: "text",

            WebkitTextFillColor: "transparent",
          }}
        >
          {heroInfo.name}
        </Typography>
      </motion.div>

      {/* Title */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: .4 }}
      >
        <Typography
          variant="h4"
          color="primary"
          sx={{
            mt: 2,

            fontWeight: 700,

            fontSize: {
              xs: "1.5rem",
              md: "2rem",
            },
          }}
        >
          {heroInfo.title}
        </Typography>
      </motion.div>

      {/* Description */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .5 }}
      >
        <Typography
          sx={{
            mt: 3,

            maxWidth: 650,

            lineHeight: 1.9,

            color: "text.secondary",

            fontSize: "1.05rem",
          }}
        >
          {heroInfo.description}
        </Typography>
      </motion.div>

      <HeroButtons />

      <HeroStats />

      <TechStack />

    </Box>
  );
};

export default HeroContent;