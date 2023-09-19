import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  CardActionArea,
  CardActions,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import img from "../Photos/carroCard.png";

function Cards(props) {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          width="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={props.onClickVejaMais}>Veja Mais</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default Cards;
