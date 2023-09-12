import { useEffect, useState } from "react";
import Filme from "./components/Filme";
import { Container } from "@mui/material";

function App(props) {
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


  function Excluir(){
    fetch(process.env.REACT_APP_BACKEND + "filmes", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id
      }),
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        if (json._id) {
          setCadastrado(true);
          setErro(false);
        } else {
          setCadastrado(true);
          setErro(true);
        }
      })
      .catch((erro) => {
        setErro(true);
      });
  }


  return (
    <>
      <h1>Filmes</h1>
      <Container
        sx={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {
          filmes &&
            filmes.map((filme, index) => (
              <Filme
                img={filme.imagem}
                titulo={filme.titulo}
                descricao={filme.descricao}
                duracao={filme.duracao}
                ano={filme.ano}
                categoria={filme.categoria}
                excluir={(e) => Excluir (e, filme._id)}
              />
            )) /**Pega todos filmes e mapeia eles e exibe um por um */
        }
      </Container>
    </>
  );
}

export default App;
