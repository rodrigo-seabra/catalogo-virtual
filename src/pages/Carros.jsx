import React from "react";
import Header from "../components/Header";
import { Container } from "@mui/material";
import Cards from "../components/Cards";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";


function Carros() {
  const [produto, setProduto] = useState();
  const [erro, setErro] = useState(false);
  const user = localStorage.getItem("usuario");

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND + "produtos/" + user, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resposta) => resposta.json()) //se a resposta vier certa, transformo para json
      .then((json) => {
        setProduto(json);
      }) // se json estiver certo coloco ele dentro da variavel filems
      .catch((erro) => {
        setErro(true);
      });
  }, []); // [] significa que no monento da montagem da tela essa função será executada

  function Excluir(e, id) {
    e.preventDefault();

    fetch(process.env.REACT_APP_BACKEND + "produtos/" + user, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        usuario: user,
      }),
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        const novalista = produto.filter((produtos) => produtos._id !== id);
        setProduto(novalista);
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
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          mt: "6rem",
        }}
      >
        {
          produto &&
            produto.map((produto, index) => (
              <Cards
                img={produto.imagem}
                titulo={produto.titulo}
                descricao={produto.descricao}
                duracao={produto.duracao}
                ano={produto.ano}
                categoria={produto.categoria}
                excluir={(e) => Excluir(e, produto._id)}
                id={produto._id}
              />
            )) /**Pega todos filmes e mapeia eles e exibe um por um */
        }
      </Container>
      <Footer mt="5rem" />
    </>
  );
}

export default Carros;
