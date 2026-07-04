import {
  Drawer,
  Box,
  IconButton,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Button,
  ListItemIcon,
  useTheme,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

import navLinks from "../../data/navLinks";
import personalInfo from "../../data/personalInfo";
import { Link } from "react-scroll";

const MobileDrawer = ({ open, onClose, mode, setMode }) => {
  const theme = useTheme()

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        sx: {
          width: 320,
          backgroundColor: "background.paper",
          color: "text.primary",
        },
      }}
    >

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color:
              theme.palette.mode === "dark"
                ? "linear-gradient(90deg,#F8FAFC,#60A5FA,#8B5CF6)"
                : "linear-gradient(90deg,#0F172A,#2563EB,#7C3AED)",
            fontWeight: 700,
          }}
        >
          {personalInfo.brand}
        </Typography>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <List>
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
                py: 1.5,
                px: 3,

                "&.active":{
                  background:
                    "linear-gradient(90deg,#4F46E5,#06B6D4)",
                  color:"#fff",

                  "& .MuiListItemText-primary":{
                    fontWeight: 700
                  },

                  
                },

                "&:hover": {
                    color: "#60A5FA",
                },

                "&:hover::after": {
                    transform: "scaleX(1)",
                }
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </Link>
        ))}
      </List>

      <List>
        <ListItemButton
          component="a"
          href={personalInfo.resume}
          download
          sx={{
            mx: 2,
            mt: 2,
            borderRadius: 2,
            background: "linear-gradient(90deg,#4F46E5,#06B6D4)",
            color: "#fff",

            "&:hover": {
              transform: "translateY(-2px)"
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: "#fff",
              minWidth: 36,
            }}
          >
            <DownloadRoundedIcon />
          </ListItemIcon>

          <ListItemText primary="Download CV" />
        </ListItemButton>
      </List>

      <Button
        fullWidth
        startIcon={
          mode === "dark"
            ? <LightModeRoundedIcon />
            : <DarkModeRoundedIcon />
        }
        sx={{
            variant:"outlined",
            mx:2,
            mt: 2,
            width: "calc(100% - 32px)",
            borderRadius: "2",
            justifyContent: "flex-start",
            textTransform: "none",
            fontWeight: 600
        }}
        onClick={() =>
            setMode(mode === "dark" ? "light" : "dark")
        }
      >
        {mode === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
    </Drawer>
  );
};

export default MobileDrawer;