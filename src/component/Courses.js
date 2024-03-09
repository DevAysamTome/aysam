import React from "react";
import Slideshow from "./Sllides";
import {
  Divider,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Courses = ({ styles }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack
      spacing={10}
      direction="column"
      alignItems={"center"}
      height={"100%"}
      id="courses"
      style={styles.courses}
      p={2}
    >
      <Stack
        alignItems={"center"}
        width={"100%"}
        direction={isMobile ? "column" : "row"}
      >
        <Typography sx={{ fontSize: 52, mr: 3, color: "#0fa3b1" ,fontWeight:800}} variant="">
          Courses
        </Typography>
        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            flexGrow: 1,
            height: "5px",
            backgroundColor: "#0fa3b1",
            mt: 5,
            boxShadow: "0px 0px 5px rgba(15,163,177,1) "

          }}
        />
      </Stack>

      <Slideshow />
    </Stack>
  );
};

export default Courses;
