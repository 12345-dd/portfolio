import { useEffect, useState } from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { motion } from "framer-motion";

import DesktopMenu from "./DesktopMenu";
import MobileDrawer from "./MobileDrawer";

const Navbar = ({ mode, setMode}) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "transparent",
          boxShadow: "none",
          transition: "0.4s",
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
            }}
          >
            <Toolbar
            disableGutters
            sx={{
                justifyContent: "center",
                pt: 2.5,
                px: 2,
            }}
            >
                <Box
                    sx={{
                    width: "100%",
                    maxWidth: "1250px",

                    px: {
                        xs: 2,
                        md: 4,
                    },

                    py: 1.5,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",

                    borderRadius: "22px",

                    background: scrolled
                        ? "rgba(15,23,42,0.75)"
                        : "rgba(15,23,42,0.35)",

                    backdropFilter: "blur(18px)",

                    WebkitBackdropFilter: "blur(18px)",

                    border: "1px solid rgba(255,255,255,0.08)",

                    boxShadow: scrolled
                        ? "0 15px 45px rgba(0,0,0,.35)"
                        : "0 10px 30px rgba(0,0,0,.15)",

                    transition: "all .35s ease",
                    }}
                >
                  <DesktopMenu
                    mode={mode}
                    setMode={setMode}
                    openDrawer={() => setDrawerOpen(true)}
                  />
                </Box>
            </Toolbar>
          </motion.div>
        </Container>
      </AppBar>

      <MobileDrawer
        mode={mode}
        setMode={setMode}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
};

export default Navbar;