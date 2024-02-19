import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import wallpaper from "../Photos/wallpaperflare.com_wallpaper.jpg";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);
  const [login, setLogin] = useState(false);
  const [erro, setErro] = useState(false);
  const navigate = useNavigate();

  function Autenticar(evento) {
    // o evento pode ser abreviado para e
    evento.preventDefault();

    //requisiçoes assincronas, o js trabalha essas requisições como promessas (pois ele libera o código enquanto as coisas estão acontecendo) - promisse ES7/ javascript
    fetch(process.env.REACT_APP_BACKEND + "users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: senha,
      }),
      /* O fetch faz uma requisição para a url escrita, e fala para o servidor as informações que vão mandar. 
            Primeiro informa o metodo de envio, nesse caso é o POST (forma de envio de dados "camuflados"), 
            porém há mais outros 4 metodos de envio de dados.
            Depois especifica-se o tipo de requisição no headers (nesse caso em JSON), e no body vai as informações captadas pelos inputs em JSON*/
    })
      .then((resposta) =>
        resposta.json()
      ) /*then - então se foi feito tudo certo pega a respotas e transforma em JSON*/
      .then((json) => {
        setLogin(true);
        if (json.token) {
          localStorage.removeItem("token");
          localStorage.setItem("token", json.token);
          setLogin(true);
        } else {
          localStorage.removeItem("usuario");
          setErro(true);
        }
      }) /* então pega a respota e faz as verificações, devolvendo um token de autorização que fica salvo no local storage*/
      .catch((erro) => {
        setErro(true);
      }); /* catch - erro*/
  }
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  useEffect(() => {
    async function espera() {
      await delay(1000);
      if (login) {
        localStorage.setItem("user", JSON.stringify({ email: email }));
        setEmail("");
        setSenha("");
        navigate("/"); //mandando para raíz do app
      } else {
      }
    }
    espera();
  }, [login]);

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
          <Box>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(252, 252, 252, .8)",
                padding: "50px ",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography component="h1" variant="h4">
                Entrar
              </Typography>
              {login && (
                <Alert severity="success" sx={{ mb: 2, mt: 2 }}>
                  Login realizado com sucesso
                </Alert>
              )}
              {erro && (
                <Alert severity="error">
                  Revise seus dados e tente novamente
                </Alert>
              )}
              <Box component="form" onSubmit={Autenticar}>
                <TextField
                  type="email"
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  {...(erro && "error")}
                />

                <TextField
                  InputAdornment
                  type="password"
                  label="Senha"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      name="lembrar"
                      value={lembrar}
                      onChange={(e) => setLembrar(!lembrar)}
                    />
                  }
                  /* a ! é usada para negar o valor, 
                    no caso inverter ele, aqui por padrão o valor era falso entao ao clicar essa
                    funçao age invertendo isso para true, e vice-versa*/
                  label="Lembrar-me"
                />

                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2, mb: 2 }}
                  type="submit"
                >
                  Login
                </Button>

                <Grid container>
                  <Grid item xs>
                    Esqueci minha senha
                  </Grid>
                  <Grid
                    item
                    onClick={() => {
                      navigate("/cadastro");
                    }}
                  >
                    Cadastrar
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
