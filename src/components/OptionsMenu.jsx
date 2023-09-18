import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Avatar } from "@mui/material";

export default function OptionsMenu(props) {
  return (
    <Box
      component={"div"}
      sx={{
        position: "absolute",
        top: 63,
        left: 0,
        height: 900,
        width: 300,
        backgroundColor: "#8CB8FF",
      }}
    >
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#8CB8FF",
          color: "black",
          gap: 80,
        }}
      >
        <Box mt="2rem">
          <Button sx={{ display: "block" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              Cadastrar carro
            </Typography>
          </Button>
          <Button sx={{ display: "block" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              Carros
            </Typography>
          </Button>
        </Box>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "white",
            padding: 1,
            borderRadius: 2,
          }}
        >
          <Button>
            <Avatar src="/broken-image.jpg" sx={{ width: 56, height: 56 }} />
          </Button>
          <Box>
            <Button sx={{ display: "block" }} onClick={props.onclickEntrar}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "black" }}
              >
                Entrar
              </Typography>
            </Button>
            <Button sx={{ display: "block" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "black" }}
                onClick={props.onClickCadastrar}
              >
                Cadastrar
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
