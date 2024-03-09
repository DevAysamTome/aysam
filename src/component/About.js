import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import {
  Box,
  Chip,
  Divider,
  Fade,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function About({ styles }) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [info, setInfo] = useState({
    name: "Aysam Tohme",
    role: "Full Stack Web Developer",
    about:
      "I'm Aysam, a dedicated web developer specializing in full-stack and front-end development. With a focus on crafting seamless user experiences, I bring creative ideas to life through clean, efficient code. From designing elegant front-end interfaces to implementing robust back-end solutions, I excel at building dynamic, scalable applications that meet the unique needs of every project. With a passion for problem-solving and a commitment to delivering exceptional user experiences, I'm here to help turn your digital vision into reality. Let's collaborate and create something extraordinary together.",
  });

  const infoSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
    delay: 500,
  });

  const skillsSpring = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
    delay: 500,
  });

  return (
    <Stack
      direction="column"
      spacing={5}
      sx={{ marginTop: "50px" }}
      style={styles.about}
      alignItems={"left"}
      p={2}
      id="about"
    >
      <animated.div style={infoSpring}>
        <Stack direction="column" spacing={10} alignItems={"center"} p={2}>
          <Stack
            direction={isMobile ? "column" : "row"}
            width={"100%"}
            alignItems="left"
          >
            <Typography
              variant=""
              sx={{
                fontSize: 52,
                color: "#0fa3b1",
                alignItems: "center",
                mr: 4,
                fontWeight: 800,
              }}
              textAlign={isMobile ? "center" : "left"}
            >
              about{" "}
            </Typography>

            <Divider
              orientation="horizontal"
              flexItem
              sx={{
                flexGrow: 1,
                height: "5px",
                backgroundColor: "#0fa3b1",
                mt: 5,
                boxShadow: "0px 0px 5px rgba(15,163,177,1) ",
              }}
            />
          </Stack>

          <Stack
            direction={"row"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={10}
          >
            <Typography
              sx={{
                fontSize: 24,
                textTransform: "capitalize",
                alignItems: "left",
                
              }}
              width={isMobile ? "100%" : "80%"}
              textAlign={"left"}
              variant=""
            >
              {info.about}
            </Typography>
          </Stack>
        </Stack>
      </animated.div>
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        p={2}
        spacing={10}
      >
        <Box>
          <Typography variant="h4" color={'GrayText'} sx={{  fontWeight: 800 }}>
            Front End
          </Typography>
          <Typography variant="body2"  borderBottom={1} mt={2} sx={{ fontWeight: 600 }}>
            +5 Years Experiences
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" color={'GrayText'}  sx={{ fontWeight: 800 }}>
            Full Stack Developer
          </Typography>
          <Typography variant="body2" borderBottom={1} mt={2} sx={{ fontWeight: 800 }}>
            +3 Years Experiences
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" color={'GrayText'}  sx={{ fontWeight: 800 }}>
            Back End
          </Typography>
          <Typography variant="body2" borderBottom={1} mt={2} sx={{ fontWeight: 800 }}>
            +3 Years Experiences
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}

export default About;
