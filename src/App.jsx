import { useMemo, useState } from "react";

import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

import getTheme from "./theme/theme";

function App() {

  const [mode, setMode] = useState("dark");

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div>

        Portfolio Coming Soon

      </div>

    </ThemeProvider>
  );
}

export default App;
