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
import { useParams } from "react-router-dom";

function EditaFilme() {
  const { id } = useParams(); //desestruturação de objeto, dentro do parametros tem-se varias informações, porém de todo esse objeto só se usa o id

  console.log(id);
  const [update, setUpdate] = useState(false);
  const [erro, setErro] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [ano, setAno] = useState("");
  const [duracao, setDuracao] = useState("");
  const [imagem, setImagem] = useState("");

  /*const para receber os valores do autocomplete, input de categoria*/
  const options = [
    "Terror",
    "Suspense",
    "Ação",
    "Comédia",
    "Drama",
    "Documentário",
  ];
  const [value, setValue] = useState();
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND + "filmes/" + id, {
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

  function Editar(evento) {
    evento.preventDefault(); 
    fetch(process.env.REACT_APP_BACKEND + "filmes", {
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
      }),
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        if (json._id) {
          setUpdate(true);
          setErro(false);
        } else {
          setErro(true);
          setUpdate(false);
        }
      })
      .catch((erro) => {
        setErro("Erro ao processar sua requisição");
      });
  }

  return (
    <div>
      <Container component="section" maxWidth="sm">
        <Box
          sx={{
            mt: 20,
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Typography component="h1" variant="h4">
            Atualizar Filme
          </Typography>
          {erro && (
          <Alert severity="error" sx={{ mb: 2, mt: 2 }}>
            Revise seus dados e tente novamente
          </Alert>
          )}
          {update && (
            <Alert severity="success" sx={{ mb: 2, mt: 2 }}>
              Atualizado com sucesso
            </Alert>
          )}
          <Box component="form" onSubmit={Editar}>
            <TextField
              type="text"
              label="Título"
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
              type="text"
              label="Duração"
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
              Editar
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default EditaFilme;
