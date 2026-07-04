import { Box, useTheme } from "@mui/material";

const BackgroundGlow = () => {
  const theme = useTheme()
  
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: {
            xs: 220,
            md: 320,
          },
          height: {
            xs: 220,
            md: 320,
          },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(37,99,235,.18) 0%, transparent 70%)",
          top: 100,
          left: -80,
          filter: "blur(40px)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          width: {
            xs: 260,
            md: 380,
          },
          height: {
            xs: 260,
            md: 380,
          },
          borderRadius: "50%",
background: (theme) =>
  theme.palette.mode === "dark"
    ? "radial-gradient(circle, rgba(37,99,235,.18) 0%, transparent 70%)"
    : "radial-gradient(circle, rgba(99,102,241,.12) 0%, transparent 70%)",
          bottom: 50,
          right: -80,
          filter: "blur(60px)",
        }}
      />
    </Box>
  );
};

export default BackgroundGlow;