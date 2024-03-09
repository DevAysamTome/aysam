import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  Grid,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";

export default function Projects(props, styles) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  var items = [
    {
      name: "e-Commerce",
      description: "React + Node + Express + Mysql + MUI",
      url: "https://i.ibb.co/jJzPv0T/ecommercec.jpg",
      link: "https://aysam-99-ecommerce-app-bb49f91d3703.herokuapp.com/",
    },
    {
      name: "Chat App",
      description: "React + Node + Express + MongoDB + MUI",
      url: "https://i.ibb.co/QfsLBGw/chatapp.jpg",
      link: "https://devaysamtome.github.io/Chat-App/",
    },
    {
      name: "CRUD",
      description: "React + Node + Express + MySQL + MUI",
      url: "https://i.ibb.co/71gDzJ5/crud.jpg",
      link: "https://crud-app-454de73d24a4.herokuapp.com/",
    },
    {
      name: "Weather API",
      description: "Weather API",
      url: "https://i.ibb.co/c31M3MH/Minimal-Weather-Facebook-Post-1.jpg",
      link: "https://devaysamtome.github.io/weather-api/",
    },
    {
      name: "Portfolio",
      description: "Personal Portfolio Website",
      url: "https://i.ibb.co/pfxZjPM/Untitled-design-5.jpg",
      link: "https://devaysamtome.github.io/portfolio/",
    },
    {
      name: "Website For Car",
      description: "HTML + PHP + MySQL",
      url: "https://i.ibb.co/mtcYzbX/Untitled-design-4.jpg",
      link: "https://github.com/DevAysamTome/Al-Mukhtar",
    },
    // Add more items if needed
  ];

  // Function to chunk the items array into groups of three
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Chunk the items array into sets of three
  const chunkedItems = chunkArray(items, isMobile ? 1 : 3);

  return (
    <>
      <Stack spacing={10} direction="column" height={"100%"} style={styles.projects} id="projects" p={2}>
        <Stack  alignItems={"center"} width={"100%"} direction={isMobile ? 'column' : 'row'} >
          <Typography variant="" sx={{ fontSize: 52 , mr:3 ,color:"#0fa3b1" , fontWeight:800}}>
           Projects
          </Typography>
          <Divider
              orientation="horizontal"
              flexItem
              sx={{
                flexGrow: 1,
                height: "5px",
                backgroundColor: "#0fa3b1",
                mt:5, 
                mb:isMobile? 2 : 0,
                boxShadow: "0px 0px 5px rgba(15,163,177,1) "

              }}
            />
        </Stack>
        <Carousel style={styles.projects}>
          {chunkedItems.map((chunk, index) => (
            <ItemSet key={index} items={chunk} />
          ))}
        </Carousel>
      </Stack>
    </>
  );
}

function ItemSet(props) {
  return (
    <Grid container spacing={4} justifyContent="center">
      {props.items.map((item, i) => (
        <Grid item key={i}>
          <Item item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

function Item(props, styles) {
  const theme = useTheme();
  const boxHover = {
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  };
  return (
    <Paper
      sx={{
        width: 400,
        textAlign: "center",
        borderRadius:3,
        boxShadow: "0px 0px 5px rgba(0,0,0,0.25)",
        ...boxHover,
      }}
    >
      <img
        src={props.item.url}
        alt={props.item.name}
        style={{ width: "100%", height:"100%",borderRadius:3, }}
      />
      <Typography sx={{ fontSize: 24, color: "inherit" }} variant="">
        {props.item.name}
      </Typography>
      <p>{props.item.description}</p>
      <Button
        href={props.item.link}
        className="nav-link"
        variant="text"
        color="primary"
        sx={{ fontSize: 16 }}
      >
        Check it out!
      </Button>
    </Paper>
  );
}
