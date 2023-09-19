import React from "react";
import ShopCar from "@mui/icons-material/ShoppingCartCheckout";
import Header from "../components/Header";
import { Box, Container, Typography, Button, CardMedia } from "@mui/material";
import Footer from "../components/Footer";

import img from "../Photos/carroCard.png";

function VejaMais() {
  return (
    <>
      <Header />
      <Container
        component="main"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "12rem",
          mb: "4rem",
        }}
      >
        <Box>
          <Typography component="h2" variant="h3">
            Carro XYZ
          </Typography>
          <Box component={"div"}>
            <CardMedia
              component="img"
              height="390"
              width="340"
              image={img}
              alt="green iguana"
            />
          </Box>
        </Box>
        <Container
          component={"section"}
          maxWidth="xs"
          sx={{
            margin: 0,
            height: "500px",
            backgroundColor: "rgba(0, 0, 0, 0.76)",
            borderRadius: "0.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            color: "white",
          }}
        >
          <Box>
            <Typography component="h2" variant="h3">
              Carro XYZ
            </Typography>
          </Box>

          <Box textAlign={"center"}>
            <Typography>48x de </Typography>

            <Typography component="h2" variant="h2" fontWeight={"bold"}>
              499,99
            </Typography>
            <Typography>ou R$40000,00</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box>
              <Button variant="outlined" color="success" size="large">
                COMPRAR JÁ
              </Button>
            </Box>
            <Box>
              <Button color="success" size="large">
                <ShopCar />
              </Button>
            </Box>
          </Box>
        </Container>
      </Container>
      <Container
        component={"section"}
        maxWidth="md"
        sx={{
          height: "400px",
          backgroundColor: "rgba(0, 0, 0, 0.76)",
          borderRadius: "0.5rem",
          color: "white",
          marginBottom: "8rem",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          mt:"12rem"
        }}
      >
        <Box textAlign={'center'}  >
          <Typography component="h2" variant="h3">
            Descrição
          </Typography>
        </Box>
        <Box textAlign={"center"} mt={4}>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>
      </Container>
      

      <Footer />
    </>
  );
}

export default VejaMais;
