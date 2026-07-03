import { useMemo, useState } from "react";

import {
  Box,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

import getTheme from "./theme/theme";
import Navbar from "./components/Navbar/Navbar";

function App() {

  const [mode, setMode] = useState("dark");

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar />

      <Box
        sx={{
          height: "200vh",
          pt: "120px",
          textAlign: "center"
        }}
      >
        Portfolio Coming Soon
      </Box>

    </ThemeProvider>
  );
}

export default App;
