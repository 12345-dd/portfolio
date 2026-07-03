import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";

import MobileDrawer from "./MobileDrawer";

import MenuIcon from "@mui/icons-material/Menu";
import DownloadIcon from "@mui/icons-material/Download";

import navLinks from "../../data/navLinks";
import personalInfo from "../../data/personalInfo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: isScrolled
            ? "rgba(15,23,42,.75)"
            : "transparent",

          backdropFilter: isScrolled ? "blur(16px)" : "none",

          transition: "all .4s ease",

          boxShadow: isScrolled
            ? "0 10px 30px rgba(0,0,0,.25)"
            : "none",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1400px",
            width: "100%",
            mx: "auto",
            minHeight: "80px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              cursor: "pointer",
            }}
          >
            {personalInfo.shortName}
          </Typography>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              gap: 3,
            }}
          >
            {navLinks.map((item) => (
              <Button
                key={item.id}
                sx={{
                  color: "white",
                  fontWeight: 600,

                  "&:hover": {
                    color: "primary.main",
                    background: "transparent",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },

                borderRadius: "30px",

                px: 3,
              }}
            >
              Resume
            </Button>

            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },

                color: "text.primary",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <MobileDrawer 
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </motion.div>
  );
};

export default Navbar;