import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";

import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import { Stack } from "@mui/material";

function Home() {
  const [isDark, setIsDark] = useState(true);

  const theme = {
    light: {
      backgroundColor: "#fff",
      color: "#000",
    },
    dark: {
      backgroundColor: "#000",
      color: "#fff",
    },
  };

  const [styles, setStyles] = useState({
    home: theme.dark,
    navbar: theme.dark,
    hero: theme.dark,
    about: theme.dark,
    projects: theme.dark,
    courses: theme.dark,
    contact: theme.dark,
    footer: theme.dark,
  });

  const handleTheme = () => {
    setIsDark(!isDark);
    setStyles((prevStyles) => ({
      ...prevStyles,
      home:
        prevStyles.home.backgroundColor === theme.light.backgroundColor
          ? theme.dark
          : theme.light,
      navbar:
        prevStyles.home.backgroundColor === theme.light.backgroundColor
          ? theme.dark
          : theme.light,
      hero:
        prevStyles.home.backgroundColor === theme.light.backgroundColor
          ? theme.dark
          : theme.light,
      about:
        prevStyles.home.backgroundColor === theme.light.backgroundColor
          ? theme.dark
          : theme.light,
      projects:
        prevStyles.home.backgroundColor === theme.light.backgroundColor
          ? theme.dark
          : theme.light,
      courses:
        prevStyles.home.backgroundColor === theme.light.backgroundColor
          ? theme.dark
          : theme.light,
      contact:
        prevStyles.home.backgroundColor === theme.light.backgroundColor
          ? theme.dark
          : theme.light,
      footer:
        prevStyles.home.backgroundColor === theme.light.backgroundColor
          ? theme.dark
          : theme.light,

      // ...repeat for other components
    }));
  };

  return (
    <Stack style={styles.home} direction={"column"} >
      <Navbar styles={styles} handleTheme={handleTheme} />
      <Hero styles={styles} />
      <About styles={styles} />
      <Projects styles={styles} />
      <Courses styles={styles} />
      <Contact styles={styles} />
      <Footer styles={styles} />
    </Stack>
  );
}

export default Home;
