import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, json, Navigate } from "react-router-dom";

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
    //requisiçoes assincronas, o js trabalha essas requisições como promessas (pois ele libera o código enquanto as coisas estão acontecendo) - promisse ES7/ javascript
    fetch(process.env.REACT_APP_BACKEND + "users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        senha: senha,
        nome: nome,
        telefone: tell,
        cpf: cpf,
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
        if (json.cpf) {
          setCadastro(true);
        } else {
          setErro(true);
        }
      }) /* então pega a respota e faz as verificações, devolvendo um token de autorização que fica salvo no local storage*/
      .catch((erro) => {
        setErro(true);
      }); /* catch - erro*/
  }

  useEffect(() => {
    if (cadastro) {
      setEmail("");
      setSenha("");
      setCpf("");
      setNome("");
      setTell("");
      setConfirmar("");
      navigate("/login"); //mandando para raíz do app
    } else {
    }
    //setCadastro( false )
  }, [cadastro]);

  return (
    <Container component="section" maxWidth="xl">
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
  );
}

export default Cadastro;
