import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import { Link } from "react-scroll";

import heroInfo from "../../data/heroInfo";

const HeroButtons = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.6,
      }}
    >
      <Box
        sx={{
          display: "flex",

          flexWrap: "wrap",

          gap: 2,

          mt: 5,
        }}
      >
        {/* View Projects */}

        <Link
          to="projects"
          smooth
          duration={600}
          offset={-80}
        >
          <Button
            variant="contained"
            endIcon={<ArrowForwardRoundedIcon />}
            sx={{
              px: 4,

              py: 1.5,

              borderRadius: "50px",

              fontWeight: 700,

              textTransform: "none",

              background:
                "linear-gradient(90deg,#4F46E5,#06B6D4)",

              boxShadow:
                "0 12px 30px rgba(79,70,229,.35)",

              transition: ".3s",

              "&:hover": {
                transform: "translateY(-3px)",

                boxShadow:
                  "0 18px 35px rgba(79,70,229,.45)",

                background:
                  "linear-gradient(90deg,#4338CA,#0891B2)",
              },
            }}
          >
            {heroInfo.primaryButton}
          </Button>
        </Link>

        {/* Download Resume */}

        <Button
          component="a"
          href={heroInfo.resume}
          download
          variant="outlined"
          startIcon={<DownloadRoundedIcon />}
          sx={{
            px: 4,

            py: 1.5,

            borderRadius: "50px",

            fontWeight: 700,

            textTransform: "none",

            borderWidth: 2,

            transition: ".3s",

            "&:hover": {
              borderWidth: 2,

              transform: "translateY(-3px)",
            },
          }}
        >
          {heroInfo.secondaryButton}
        </Button>
      </Box>
    </motion.div>
  );
};

export default HeroButtons;