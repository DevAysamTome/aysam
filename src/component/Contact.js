import { Box, Button, Divider, Stack, TextField, Typography, outlinedInputClasses, useMediaQuery, useTheme ,createTheme, ThemeProvider} from "@mui/material";
import React, { useState } from "react";

function Contact({ styles }) {
  const theme = useTheme();
  const outerTheme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#E0E3E7',
            '--TextField-brandBorderHoverColor': '#B2BAC2',
            '--TextField-brandBorderFocusedColor': '#6F7E8C',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            '&::before, &::after': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            '&::before': {
              borderBottom: '2px solid var(--TextField-brandBorderColor)',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused:after': {
              borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });
  return (
    <>
      <Stack
        id="contact"
        spacing={10}
        sx={{ marginTop: "30px" }}
        p={4}
        direction={"column"}
        alignItems={"center"}
        style={styles.contact}
      >
        <Stack alignItems={"center"} width={"100%"} direction={isMobile ? "column" : "row"}>
          <Typography
            variant=""
            align="left"
            sx={{ fontSize: 52, mr: 3, color: "#0fa3b1", fontWeight:800 }}
          >
            Contact Me
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
        <Typography variant="subtitle1" component="article">
          Have a question, suggestion, or just want to say hello? We'd love to
          hear from you! Use the form below to get in touch, and we'll get back
          to you as soon as possible.
        </Typography>
        <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
       
      }}
      
    >
      <Box sx={{ maxWidth: 600, mx: "auto", ...styles.contact}}>
       
        <form  onSubmit={handleSubmit}>
        <ThemeProvider theme={customTheme(outerTheme)}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
            variant="standard"
            sx={{label:{color:theme.palette.mode === "light" ? "#6a6b70" : "#fff"}}}
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
            variant="standard"
            sx={{label:{color:theme.palette.mode === "light" ? "#6a6b70" : "#fff"}}}

          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
            variant="standard"
            sx={{label:{color:theme.palette.mode === "light" ? "#6a6b70" : "#fff"}}}

          />
          <Button variant="text" type="submit" className="nav-link" color="inherit" sx={{ mt: 2 }}>
            Submit
          </Button>
          </ThemeProvider>
        </form>
      </Box>
    </Box>
      </Stack>
    </>
  );
}

export default Contact;
