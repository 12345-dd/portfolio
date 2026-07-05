import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

import { Link } from "react-scroll";

import navLinks from "../../data/navLinks";
import personalInfo from "../../data/personalInfo";
import heroInfo from "../../data/heroInfo";

const DesktopMenu = ({ openDrawer, mode, setMode }) => {
  const theme = useTheme();

  return (
    <>
      {/* ===================== Desktop ===================== */}

      <Box
        sx={{
          display: {
            xs: "none",
            lg: "flex",
          },
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}

        <Typography
          variant="h5"
          sx={{
            fontWeight: 900,
            letterSpacing: 2,
            cursor: "pointer",
            userSelect: "none",

            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(90deg,#F8FAFC,#60A5FA,#8B5CF6)"
                : "linear-gradient(90deg,#0F172A,#2563EB,#7C3AED)",

            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",

            transition: ".35s",

            "&:hover": {
              letterSpacing: 4,
            },
          }}
        >
          {personalInfo.brand}
        </Typography>

        {/* Navigation */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              spy
              duration={500}
              offset={-90}
              style={{
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "text.primary",
                  position: "relative",
                  transition: ".3s",

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -8,
                    width: "100%",
                    height: "2px",
                    borderRadius: "10px",
                    background:
                      "linear-gradient(90deg,#4F46E5,#06B6D4)",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: ".35s",
                  },

                  "&:hover": {
                    color: "#60A5FA",
                  },

                  "&:hover::after": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                {item.label}
              </Typography>
            </Link>
          ))}
        </Box>

        {/* Right Side */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton
            onClick={() =>
              setMode(mode === "dark" ? "light" : "dark")
            }
            sx={{
              width: 46,
              height: 46,

              borderRadius: "14px",

              bgcolor: "rgba(255,255,255,.06)",

              border: "1px solid rgba(255,255,255,.08)",

              transition: ".3s",

              "&:hover": {
                bgcolor: "primary.main",
                transform: "rotate(180deg)",
              },
            }}
          >
            {mode === "dark" ? (
              <LightModeRoundedIcon />
            ) : (
              <DarkModeRoundedIcon />
            )}
          </IconButton>

          <Button
            component="a"
            href={heroInfo.resume}
            download
            variant="contained"
            endIcon={<DownloadRoundedIcon />}
            sx={{
              px: 3,
              py: 1.2,
              borderRadius: "50px",
              fontWeight: 700,
              textTransform: "none",

              background:
                "linear-gradient(90deg,#4F46E5,#06B6D4)",

              boxShadow:
                "0 10px 25px rgba(79,70,229,.35)",

              transition: ".35s",

              "&:hover": {
                transform: "translateY(-3px)",

                background:
                  "linear-gradient(90deg,#4338CA,#0891B2)",

                boxShadow:
                  "0 18px 35px rgba(79,70,229,.45)",
              },
            }}
          >
            Download CV
          </Button>
        </Box>
      </Box>

      {/* ===================== Mobile & Tablet ===================== */}

      <Box
        sx={{
          display: {
            xs: "flex",
            lg: "none",
          },

          width: "100%",

          alignItems: "center",

          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 900,

            letterSpacing: 2,

            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(90deg,#F8FAFC,#60A5FA,#8B5CF6)"
                : "linear-gradient(90deg,#0F172A,#2563EB,#7C3AED)",

            WebkitBackgroundClip: "text",

            WebkitTextFillColor: "transparent",
          }}
        >
          {personalInfo.brand}
        </Typography>

        <IconButton
          onClick={openDrawer}
          sx={{
            color: "white",

            width: 46,

            height: 46,

            borderRadius: "14px",

            bgcolor: "rgba(255,255,255,.06)",

            border:
              "1px solid rgba(255,255,255,.08)",

            "&:hover": {
              bgcolor: "primary.main",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default DesktopMenu;