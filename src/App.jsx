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
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Research from "./components/Research/Research";

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

      <Experience />

      <Education />

      <Research />

    </ThemeProvider>
  );
}

export default App;
