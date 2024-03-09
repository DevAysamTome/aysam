import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import HeroImg from "../images/hero.jpg";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";


function TypewriterTypography(props) {
  const theme = useTheme();

  const { text } = props;
  const [displayText, setDisplayText] = React.useState("");
  const index = React.useRef(0);

  React.useEffect(() => {
    const typeInterval = setInterval(() => {
      if (index.current < text.length) {
        setDisplayText((prevText) => text);
        index.current++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [text]);

  if (Array.isArray(text)) {
    console.error(
      "The `text` prop should not be an array. Please pass a string instead."
    );
    return null;
  }

  return (
    <Typography
      variant=""
      component="div"
      sx={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textTransform: "capitalize",
        color:theme.palette.mode === "dark" ? "#fff" : "#0fa3b1",
        fontSize:28,
        fontWeight:600
      }}
    >
      <div className="typewriter__text">{displayText}</div>
    </Typography>
  );
}

function Hero({ styles }) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const boxHover = {
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  };
  const buttonHover = {
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      borderColor: "primary.main",
      transform: "translateY(-2px)",
      boxShadow: "0 0px 6px rgba(0, 0, 0, 0.1)",
    },
  };
  
  return (
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={4}
      height={500}
      style={styles.hero}
      p={4}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Stack direction={"column"} spacing={2}>
        <TypewriterTypography text="Hello , i'm Aysam" />
        <Box sx={boxHover} >
          <Typography variant="inherit" sx={{fontSize:34 , fontWeight:800}}>
            Web Developer | Full Stack Developer | Frontend Developer
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: 4,
            fontWeight: "bold",
            textTransform: "uppercase",
            bgcolor: "inherit",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            href="https://drive.usercontent.google.com/download?id=14FF9wRpOU7HL4Xjd19oaBliFYk-kYCd1&export=download&authuser=0&confirm=t&uuid=30201769-8cb8-4872-8273-3e924abbc472&at=APZUnTWbffCkGkxn3JHM3gsQ8uHZ:1709941925941"
            sx={{ ...buttonHover }}
            endIcon={<CloudDownloadIcon />}
          >
            Download Resume
          </Button>
        </Box>
      </Stack>
      <Stack direction={"column"} spacing={3}>
        <Box
          sx={{
            width: '100%',
            height: 200,
            borderRadius: "50%",
            backgroundColor: "primary.main",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        >
          <Card
            src={HeroImg}
            sx={{
              width: isMobile ? 300 : 500,
              height: isMobile ? 300 : 500,
              boxShadow: " 0px 0px 5px 0px rgba(0,0,0,0.75)",
              marginTop:10
            }}
          >
            <img src={HeroImg} width={'100%'}/>
          </Card>
        </Box>
      </Stack>
      {isMobile ? (
        <Divider
          sx={{
            width:250,
            boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.25)",
          }}
        />
      ) : null}
      
    </Stack>
  );
}

export default Hero;
