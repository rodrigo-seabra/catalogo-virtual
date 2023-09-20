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
import Header from "../components/Header"
import { useParams } from "react-router-dom";


function EditaCar() {
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
          setErro("Produto não encontrado");
        }
      })
      .catch((erro) => {
        setErro("Erro ao processar sua requisição");
      });
  }, []);

  function Editar(evento) {
    evento.preventDefault();
    fetch(process.env.REACT_APP_BACKEND + "produtos", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        titulo: titulo,
        descricao: descricao,
        categoria: inputValue,
        ano: ano,
        duracao: duracao,
        imagem: imagem,
        usuario: localStorage.getItem('usuario'),
      }),
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        if (json._id) {
          setCadastrado(true);
          setErro(false);
        } else {
          setErro(true);
          setCadastrado(false);
        }
      })
      .catch((erro) => {
        setErro(true);
      });
  }

  return (
    <>
    <Header/>
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
              Atualizar Carro
            </Typography>
            {erro && (
              <Alert severity="error" sx={{ mb: 2, mt: 2 }}>
                Revise seus dados e tente novamente
              </Alert>
            )}
            {cadastrado && (
              <Alert severity="success" sx={{ mb: 2, mt: 2 }}>
                Atualizado scom sucesso
              </Alert>
            )}
            <Box component="form" onSubmit={Editar}>
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
                type="data"
                label="Ano"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setAno(e.target.value)}
                value={ano}
              />

              <TextField
                type="number"
                label="Quilometragem"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setDuracao(e.target.value)}
                value={duracao}
              />

              <TextField
                type="text"
                label="Imagem"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setImagem(e.target.value)}
                value={imagem}
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
                Atualizar
              </Button>
            </Box>
          </Box>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default EditaCar;

