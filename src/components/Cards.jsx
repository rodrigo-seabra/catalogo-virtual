import {
  Typography,
  Button,
  Grid,
  CardActionArea,
  Card,
  CardMedia,
  Link,
  CardContent,
} from "@mui/material";

function Cards(props) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        backgroundColor: "rgba(0, 0, 0, 0.76)",
        color: "white",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={props.img}
          alt={props.titulo}
        />
        <CardContent>
          <Typography component="div" variant="h5">
            {props.titulo}
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              <Grid item>Categoria:</Grid>
              {props.categoria}
            </Grid>

            <Grid item xs={4}>
              <Grid item>Categoria:</Grid>

              {props.ano}
            </Grid>
            <Grid item>
              <Grid item>KM:</Grid>
              {props.duracao}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4}>
              <Button
                sx={{ color: "white" }}
                variant="text"
                onClick={props.excluir}
              >
                Excluir
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="text" sx={{ color: "white" }}>
                <Link
                  href={"edita-car/" + props.id}
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  Editar
                </Link>
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="text">
                <Link
                  href={"veja-mais/" + props.id}
                  sx={{ color: "white", textDecoration: "none" }}
                >
                  Deatalhes
                </Link>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cards;
