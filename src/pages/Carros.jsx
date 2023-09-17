import React from "react";
import Header from "../components/Header";
import { Container } from "@mui/material";
import Cards from "../components/Cards";
import { Box, Typography } from "@mui/material";

import Footer from "../components/Footer";

function Carros() {
  return (
    <>
      <Header />
      <Container
        component="section"
        sx={{
          minHeight: "100%",
        }}
      >
        <Typography variant="h1" component="h1" sx={{ fontFamily: "Roboto" }}>
          Carros
        </Typography>
        <Box
          component={"div"}
          sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
        >
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Box>
        <Box
          component={"div"}
          sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
        >
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </Box>
      </Container>
      <Footer mt="5rem" />
    </>
  );
}

export default Carros;
