import {
  Drawer,
  Box,
  IconButton,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme,
  Switch,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
 

import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

import { Link } from "react-scroll";

import personalInfo from "../../data/personalInfo";
import navLinks from "../../data/navLinks";

const MobileDrawer = ({
  open,
  onClose,
  mode,
  setMode,
}) => {
  const theme = useTheme();

  const navIcons = {
    home: <HomeRoundedIcon />,
    about: <PersonRoundedIcon />,
    skills: <CodeRoundedIcon />,
    projects: <RocketLaunchRoundedIcon />,
    experience: <BusinessCenterRoundedIcon />,
    education: <SchoolRoundedIcon />,
    research: <ArticleRoundedIcon />,
    contact: <MailRoundedIcon />,
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        sx: {
          width: 320,

          borderTopLeftRadius: 28,

          borderBottomLeftRadius: 28,

          bgcolor: "background.paper",

          color: "text.primary",

          overflowX: "hidden",
        },
      }}
    >
      {/* Header */}

      <Box
        sx={{
          p: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",

            justifyContent: "space-between",

            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,

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
          </Box>

          <IconButton
            onClick={onClose}
            sx={{
              borderRadius: 3,

              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,.06)"
                  : "rgba(0,0,0,.05)",
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>
      </Box>

      <Divider />

      {/* Navigation */}

      <List
        sx={{
          px: 2,

          py: 2,
        }}
      >
        {navLinks.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            smooth
            duration={600}
            offset={-80}
            spy
            onClick={onClose}
          >
            <ListItemButton
              sx={{
                borderRadius: 3,

                mb: 1,

                py: 1.5,

                transition: ".3s",

                "&.active": {
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? "rgba(79,70,229,.18)"
                      : "rgba(79,70,229,.12)",

                  color: "primary.main",

                  borderLeft: "4px solid",

                  borderColor: "primary.main",

                  "& .MuiListItemText-primary": {
                    fontWeight: 700,
                  },
                },

                "&:hover": {
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? "rgba(255,255,255,.05)"
                      : "rgba(99,102,241,.06)",

                  transform: "translateX(8px)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "inherit",

                  minWidth: 42,
                }}
              >
                {navIcons[item.id]}
              </ListItemIcon>

              <ListItemText
                primary={item.label}
              />
            </ListItemButton>
          </Link>
        ))}
      </List>

      <Box
        sx={{
          px: 2,
        }}
      >
        <Button
          component="a"
          href={personalInfo.resume}
          download
          fullWidth
          startIcon={<DownloadRoundedIcon />}
          variant="contained"
          sx={{
            py: 1.6,

            borderRadius: "50px",

            textTransform: "none",

            fontWeight: 700,

            fontSize: "1rem",

            background:
              "linear-gradient(90deg,#4F46E5,#06B6D4)",

            boxShadow:
              "0 12px 30px rgba(79,70,229,.30)",

            transition: ".3s",

            "&:hover": {
              transform: "translateY(-3px)",

              boxShadow:
                "0 18px 35px rgba(79,70,229,.35)",
            },
          }}
        >
          Download Resume
        </Button>
      </Box>
            {/* Theme */}

      <Box
        sx={{
          px: 2,
          mt: 3,
        }}
      >
        <Box
          sx={{
            p: 2,

            mb: 2,

            display: "flex",

            alignItems: "center",

            justifyContent: "space-between",

            borderRadius: "20px",

            bgcolor:
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,.05)"
                : "rgba(99,102,241,.06)",

            border: `1px solid ${
              theme.palette.mode === "dark"
                ? "rgba(255,255,255,.08)"
                : "rgba(99,102,241,.15)"
            }`,
          }}
        >
          <Box
            sx={{
              display: "flex",

              alignItems: "center",

              gap: 1.5,
            }}
          >
            {mode === "dark" ? (
              <DarkModeRoundedIcon color="primary" />
            ) : (
              <LightModeRoundedIcon color="warning" />
            )}

            <Box>
              <Typography
                fontWeight={700}
              >
                {mode === "dark"
                  ? "Dark Mode"
                  : "Light Mode"}
              </Typography>
            </Box>
          </Box>

          <Switch
            checked={mode === "dark"}
            onChange={() =>
              setMode(
                mode === "dark"
                  ? "light"
                  : "dark"
              )
            }
          />
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;