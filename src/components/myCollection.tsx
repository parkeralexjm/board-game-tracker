import Box from "@mui/material/Box";
import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import GameDisplay from "./GameDisplay";
import AddGame from "./AddGame";

const MyCollection =() => {
  const [ collectionArray, setCollectionArray] = useState<{}[]>([])

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, flexWrap: 'wrap'}}>
        {/* {collectionArray.map((game) => (
        GameDisplay(game)
        ))} */}
      </Box>
      <AddGame/>
    </>
  )
}
export default MyCollection;
