/* eslint-disable @next/next/no-img-element */
import { Favorite, FavoriteOutlined } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";
import { Box } from "@mui/system";
import Image from "next/image";
import frame from '../assets/Frame.png'

type Game = {name:string, plays: number, recommended: boolean, thumb_url: string}

const gameDisplay = (game: Game) => {
  return (
    <Box key={game.name} sx={{width: 200, height: 300, display: "flex", flexDirection: 'column' }}>
      <img
        src={game.thumb_url} alt={""}      
        width={200}
        height={200}
        className='rounded-corner'
      />
      <Image 
        width={200}
        height={300}
        src={frame} alt={""}
        style={{ position:"absolute" }}
      />
      <Box display={"flex"} flexDirection={'column'} alignItems={'center'} textAlign={'center'} zIndex={100}>
        {game.name}
        <Box sx={{height: '3px', width: 100, backgroundColor: 'darkGrey', borderRadius: '5px'}}/>
        Plays: {game.plays}
        <Box sx={{height: '3px', width: 100, backgroundColor: 'darkGrey', borderRadius: '5px'}}/>
        {game.recommended ? <Favorite/> : <FavoriteOutlined/> }
      </Box>
    </Box>
  )
}

export default gameDisplay;