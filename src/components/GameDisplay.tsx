/* eslint-disable @next/next/no-img-element */
import { StyledGameBorder, StyledGameDivider, StyledGameOutline } from "@/styles/StyledComponents";
import { Favorite, FavoriteOutlined } from "@mui/icons-material";
import Image from "next/image";
import frame from '../assets/Frame.png'

type Game = {name:string, plays: number, recommended: boolean, thumb_url: string}

const gameDisplay = (game: Game) => {
  return (
    <StyledGameOutline>
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
      <StyledGameBorder>
        {game.name}
        <StyledGameDivider/>
        Plays: {game.plays}
        <StyledGameDivider/>
        {game.recommended ? <Favorite/> : <FavoriteOutlined/> }
      </StyledGameBorder>
    </StyledGameOutline>
  )
}

export default gameDisplay;