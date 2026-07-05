import { useMemo, useState } from "react";

import {
  Box,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

import getTheme from "./theme/theme";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {

  const [mode, setMode] = useState("dark");

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar mode={mode} setMode={setMode}/>

      <Hero />

      <About />

      <Skills />

      <Projects />

    </ThemeProvider>
  );
}

export default App;
