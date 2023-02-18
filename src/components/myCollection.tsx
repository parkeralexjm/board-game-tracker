import Box from "@mui/material/Box";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app, database } from "../../firebase_config"
import exampleCollection from "@/utils/exampleCollection";
import GameDisplay from "./GameDisplay";

// const dbInstance = collection(database, 'users')

const MyCollection =() => {
  const [ collectionArray, setCollectionArray] = useState<{}>([])

  // Commented while quota is exceeded
  // useEffect(() => {
  //   getDocs(dbInstance)
  //   .then((data) => {
  //     setCollectionArray(data.docs.map((item) => {
  //       return { ...item.data(), id: item.id}
  //     }))
  //   })
  // },[])

  return (
    <>
      <Box sx={{ display: "flex", gap: 2}}>
        {exampleCollection.map((game) => (
        GameDisplay(game)
      ))}
      </Box>
    </>
  )
}
export default MyCollection;
