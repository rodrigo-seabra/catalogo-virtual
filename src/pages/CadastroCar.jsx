import * as React from "react";
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import wallpaper from "../Photos/wallpaperflare.com_wallpaper.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";

function CadastroCar() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [ano, setAno] = useState("");
  const [duracao, setDuracao] = useState("");
  const [imagem, setImagem] = useState(null);
  const [cadastrado, setCadastrado] = useState(false);
  const [erro, setErro] = useState(false);

  /*const para receber os valores do autocomplete, input de categoria*/
  const options = ["Hatch", "Sedã", "SUV", "Picapes", "Crossover", "Esportivo"];
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log(token);
    if (cadastrado) {
      setDescricao("");
      setAno("");
      setValue("");
      setImagem("");
      setDuracao("");
      setTitulo("");
    }
  }, [cadastrado]);

  function Cadastrar(evento) {
    evento.preventDefault();

    const formData = new FormData();
    formData.append("modelo", titulo);
    formData.append("descricao", descricao);
    formData.append("categoria", inputValue);
    formData.append("ano", ano);
    formData.append("marca", duracao);
    formData.append("image", imagem);

    fetch(process.env.REACT_APP_BACKEND + "product/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    })
      .then((resposta) => {
        if (resposta.ok) {
          setCadastrado(true);
          setErro(false);
        } else {
          setErro(true);
          setCadastrado(false);
        }
      })
      .catch((erro) => {
        console.log(erro);
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
          padding: 0,
          minWidth: "100%",
          minHeight: "100%",
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <Container
          component="section"
          maxWidth="xs"
          sx={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "rgba(252, 252, 252, .8)",
            }}
          >
            <Typography component="h1" variant="h4">
              Cadastrar Carro
            </Typography>
            {erro && (
              <Alert severity="error" sx={{ mb: 2, mt: 2 }}>
                Revise seus dados e tente novamente
              </Alert>
            )}
            {cadastrado && (
              <Alert severity="success" sx={{ mb: 2, mt: 2 }}>
                Cadastro realizado com sucesso
              </Alert>
            )}
            <Box component="form" onSubmit={Cadastrar}>
              <TextField
                type="text"
                label="Nome do Carro"
                variant="outlined"
                margin="normal"
                fullWidth
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
              <TextField
                type="text"
                label="Descrição"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setDescricao(e.target.value)}
                value={descricao}
              />
              <TextField
                type="text"
                label="Ano"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setAno(e.target.value)}
                value={ano}
              />

              <TextField
                type="text"
                label="Quilometragem"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setDuracao(e.target.value)}
                value={duracao}
              />

              <TextField
                type="file"
                label="Imagem"
                variant="outlined"
                margin="normal"
                id="imageInput"
                fullWidth
                onChange={(e) => setImagem(e.target.files[0])}
              />

              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ mt: 2, mb: 2, fontFamily: "Russo One" }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Categoria" />
                )}
              />

              <Button
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                type="submit"
                fullWidth
              >
                Cadastrar
              </Button>
            </Box>
          </Box>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default CadastroCar;
