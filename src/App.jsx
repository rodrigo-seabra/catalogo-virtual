import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import "./global.css";
import Header from "./components/Header";
import Style from "./style/app.module.css";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App(props) {
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
      .then((resposta) => resposta.json()) 
      .then((json) => {
        setProduto(json);
        const novalista = produto.filter((produtos) => produtos.categoria === 'Esportivo');
        setProduto(novalista);
      })
      .catch((erro) => {
        setErro(true);
      });
  }, []); 


  function Excluir(e, id) {
    e.preventDefault();

    fetch(process.env.REACT_APP_BACKEND + "produtos", {
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
      <Header mb="2rem" />
      <Banner />
      <Container
        sx={{
          width: "100%",
          height: "100%",
        }}
        className={Style.impossivel}
      >
        <h2
        >
          Principais Carros
        </h2>
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
            )) 
        }
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
      <Footer mt="8rem" />
    </>
  );
}

export default App;
