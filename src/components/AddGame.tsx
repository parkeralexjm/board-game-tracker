/* eslint-disable @next/next/no-img-element */
import { StyledGameBorder, StyledGameDivider, StyledGameOutline } from "@/styles/StyledComponents";
import { Favorite, FavoriteOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Image from "next/image";
import frame from '../assets/Frame.png'

// type Game = {name:string, plays: number, recommended: boolean, thumb_url: string}

const AddGame = (game: any) => {
  return (
    <StyledGameOutline>
      <Box>
        Add Game
      </Box>
      <Image 
        width={200}
        height={300}
        src={frame} alt={""}
        style={{ position:"absolute" }}
      />
      <StyledGameBorder>
      </StyledGameBorder>
    </StyledGameOutline>
  )
}

export default AddGame;