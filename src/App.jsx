import { useEffect, useState } from "react";
import Filme from "./components/Filme";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import "./global.css";
import Header from "./components/Header";
import Style from "./style/app.module.css";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App(props) {
  const [menu, setMenu] = useState(false);

  function ShowMenu() {
    setMenu(true);
  }

  const [filmes, setFilmes] = useState();
  const [erro, setErro] = useState(false);

  //listagem de filmes
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND + "filmes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resposta) => resposta.json()) //se a resposta vier certa, transformo para json
      .then((json) => {
        setFilmes(json);
      }) // se json estiver certo coloco ele dentro da variavel filems
      .catch((erro) => {
        setErro(true);
      });
  }, []); // [] significa que no monento da montagem da tela essa função será executada

  function Excluir(e, id) {
    e.preventDefault();

    fetch(process.env.REACT_APP_BACKEND + "filmes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        const novalista = filmes.filter((filme) => filme._id !== id);
        setFilmes(novalista);
      })
      .catch((erro) => {
        setErro(true);
      });
  }

  return (
    <>
      <Header />
      <Container
        sx={{
          width: "100%",
          height: "100%",
          minWidth: 1440,
        }}
        className={Style.impossivel}
      >
        <Banner />
        <Container component="section">
          <Typography variant="h1" component="h1" sx={{ fontFamily: "Roboto" }}>
            Principais Carros
          </Typography>
          <Box
            component={"div"}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </Box>
        </Container>
        <Box
          component="div"
          sx={{
            textAlign: "center",
            mt: 2,
          }}
        >
          <Box
            sx={{
              overflow: "hidden",
            }}
          ></Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
