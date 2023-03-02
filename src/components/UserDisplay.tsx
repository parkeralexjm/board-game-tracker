import { Box } from "@mui/material";
import Image from "next/image";

const gameDisplay = (user: any) => {
  return (
    <Box>
      <h2>
      {user.name}
      </h2>
    </Box>
  )
}

export default gameDisplay;