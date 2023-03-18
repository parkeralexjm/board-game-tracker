import Box from "@mui/material/Box";
import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase_config"
import GameDisplay from "./GameDisplay";
import AddGame from "./AddGame";

const MyCollection =() => {
  const collectionInstance = collection(db, `/users/parkeralexjm/games`)
  const [ collectionArray, setCollectionArray] = useState<{}[]>([])

  useEffect(() => {
    getDocs(collectionInstance)
    .then((data) => {
      setCollectionArray(data.docs.map((item) => {
        return { ...item.data(), id: item.id}
      }))
    })
  },[])
  console.log(collectionArray)

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, flexWrap: 'wrap'}}>
        {collectionArray.map((game) => (
        GameDisplay(game)
        ))}
      </Box>
      <AddGame/>
    </>
  )
}
export default MyCollection;
