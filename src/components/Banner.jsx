import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";

import img from "../Photos/banner.png";

function Banner() {
  return (
    <Card
      sx={{
        border: "none",
        boxShadow: "none",
        mt: 8,
      }}
    >
      <CardMedia
        component="img"
        alt="Imagem"
        height="600"
        image={img}
        title="Título da Imagem"
      />
    </Card>
  );
}

export default Banner;
