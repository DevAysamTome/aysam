import React from "react";
import {
  Box,
  Typography,
  Slide,
  Link,
  Stack,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import Fade from "@mui/material/Fade";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
const Footer = ({ styles }) => {
  const LinkedInTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));

  const GitHubTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.secondary.main,
      color: "#fff",
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));
  const InstagramTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.error.main,
      color: "#fff",
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));
  return (
    <>
      
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems={"center"}
        spacing={10}
        sx={{ mt: 10 }}
      >
        
        <Stack>
          <Typography variant="h5" align="center" sx={{ fontWeight: 800 }}>
            Aysam Tohme
          </Typography>
        </Stack>
        <Stack direction={"row"}>
          <LinkedInTooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Connect with me on Linkedin"
            aria-label="add a tippy"
          >
            <IconButton href="https://www.linkedin.com/in/aysamtohme/">
              <LinkedIn fontSize="large" color="primary" />
            </IconButton>
          </LinkedInTooltip>
          <GitHubTooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Connect with me on GitHub"
            aria-label="add a tippy"
          >
            <IconButton href="https://github.com/DevAysamTome/">
              <GitHub fontSize="large" color="secondary" />
            </IconButton>
          </GitHubTooltip>
          <InstagramTooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Connect with me on Instagram"
            aria-label="add a tippy"
          >
            <IconButton href="https://www.instagram.com/aysam.to3me/">
              <Instagram fontSize="large" color="error" />
            </IconButton>
          </InstagramTooltip>
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
