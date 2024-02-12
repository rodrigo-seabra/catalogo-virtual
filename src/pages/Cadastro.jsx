import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CardMedia,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import wallpaper from "../Photos/wallpaperflare.com_wallpaper.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [nome, setNome] = useState("");
  const [tell, setTell] = useState("");
  const [cpf, setCpf] = useState("");
  const [cadastro, setCadastro] = useState(false);
  const [erro, setErro] = useState(false);
  const navigate = useNavigate();

  function Cadastrar(evento) {
    evento.preventDefault();

    fetch(process.env.REACT_APP_BACKEND + "users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nome,
        email: email,
        phone: tell,
        password: senha,
        confirmpassword: confirmar,
        CPF: cpf,
      }),
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        if (json.cpf) {
          setCadastro(true);
          setErro(false);
        } else {
          setErro(true);
          setCadastro(false);
        }
      })
      .catch((erro) => {
        setErro(true);
      });
  }

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    async function espera() {
      await delay(1000);
      if (cadastro) {
        setEmail("");
        setSenha("");
        setCpf("");
        setNome("");
        setTell("");
        setConfirmar("");
        navigate("/login");
      }
    }
    espera();
  }, [cadastro]);

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
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <Typography component="h1" variant="h4">
              Cadastro
            </Typography>
            {erro && (
              <Alert severity="error" sx={{ mb: 2, mt: 2 }}>
                Revise seus dados e tente novamente
              </Alert>
            )}
            {cadastro && (
              <Alert severity="success" sx={{ mb: 2, mt: 2 }}>
                Cadastro realizado com sucesso
              </Alert>
            )}
            <Box component="form" onSubmit={Cadastrar}>
              <TextField
                type="text"
                label="Nome Completo"
                variant="outlined"
                margin="normal"
                fullWidth
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <TextField
                type="text"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setCpf(e.target.value)}
                value={cpf}
              />
              <TextField
                type="number"
                label="Telefone"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setTell(e.target.value)}
                value={tell}
              />

              <TextField
                type="email"
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <TextField
                type="password"
                label="Senha"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setSenha(e.target.value)}
                value={senha}
              />

              <TextField
                type="password"
                label="Confirmar senha"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setConfirmar(e.target.value)}
                value={confirmar}
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

export default Cadastro;
