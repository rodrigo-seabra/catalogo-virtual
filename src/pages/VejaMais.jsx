import React from "react";
import Header from "../components/Header";
import { Box, Container, Typography, Button, CardMedia, Link } from "@mui/material";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function VejaMais(props) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [ano, setAno] = useState("");
  const [duracao, setDuracao] = useState("");
  const [imagem, setImagem] = useState("");
  const [cadastrado, setCadastrado] = useState(false);
  const [erro, setErro] = useState(false);
  const { id } = useParams();
  const options = [
    "Hatch",
    "Sedã",
    "SUV",
    "Picapes",
    "Crossover",
    "Esportivo",
  ];
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("usuario");
    fetch(process.env.REACT_APP_BACKEND + "produtos/" + user + '/' + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        if (!json.status) {
          setTitulo(json.titulo);
          setDescricao(json.descricao);
          setAno(json.ano);
          setDuracao(json.duracao);
          setInputValue(json.categoria);
          setImagem(json.imagem);
        } else {
          setErro("Filme não encontrado");
        }
      })
      .catch((erro) => {
        setErro("Erro ao processar sua requisição");
      });
  }, []);
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
            {titulo}
          </Typography>
          <Box component={"div"}>
            <CardMedia
              component="img"
              height="390"
              width="340"
              image={imagem}
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
              {titulo}
            </Typography>
          </Box>

          <Box textAlign={"center"}>
            <Typography>Ano: </Typography>

            <Typography component="h2" variant="h2" fontWeight={"bold"}>
              {ano}
            </Typography>
            <Typography>KM: {duracao}</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Box>
              <Button variant="outlined" color="success" size="large" id={id}>
              <Link href={"http://localhost:3000/edita-car/" + id} sx={{textDecoration:"none", color:"green"}} >Editar</Link>
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
            {descricao}
          </Typography>
        </Box>
      </Container>
      

      <Footer />
    </>
  );
}

export default VejaMais;
