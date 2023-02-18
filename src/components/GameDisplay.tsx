import { Favorite, FavoriteOutlined } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

type Game = {name:string, plays: number, recommended: boolean, thumb_url: string}

const gameDisplay = (game: Game) => {
  return (
    <Card key={game.name} variant={"outlined"} sx={{minWidth: 200}}>
      <CardMedia
      sx={{ height: 150}}
      image={game.thumb_url}
      title={game.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
      </CardContent>
      <CardActions>
      <h3>Played {game.plays} times</h3>
      {game.recommended === true ? <IconButton><Favorite/></IconButton> : <IconButton><FavoriteOutlined/></IconButton> }
      </CardActions>
    </Card>
  )
}

export default gameDisplay;