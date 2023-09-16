import { Copyright, Title } from "@mui/icons-material";
import { Box, Container, Typography, Link } from "@mui/material";
import React from "react";

function Footer() {
  function Copy() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/rodrigo-seabra">
          Rodrigo Seabra
        </Link>
        {new Date().getFullYear()}
      </Typography>
    );
  }

  return (
    <Box
      component={"footer"}
      sx={{ backgroundColor: "rgba(3, 98, 252, 0.36)", mt: 8, padding: 0.8 }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography>CARS SYSTEMS</Typography>
        <Copy />
      </Container>
    </Box>
  );
}

export default Footer;
