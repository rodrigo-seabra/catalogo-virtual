import {
  Link,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
  Button,
} from "@mui/material";

function Filme(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="490"
          image={props.img}
          alt={props.titulo}
        />
        <CardContent>
          <Typography component="div" variant="h5">
            {props.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.descricao}
          </Typography>
          <Grid container>
            <Grid item xs={4}>
              {props.categoria}
            </Grid>
            <Grid item xs={4}>
              {props.ano}
            </Grid>
            <Grid item>{props.duracao}</Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <Button variant="text" onClick={props.excluir}>
                Excluir
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="text">
                <Link href={"edicao/" + props.id}>Editar</Link>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Filme;
