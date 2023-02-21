import Box from "@mui/material/Box";
import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase_config"
import GameDisplay from "./GameDisplay";
import { Button } from "@mui/material";
import { useUser } from "@auth0/nextjs-auth0/client";

const MyCollection =() => {
  const { user } = useUser();
  const collectionInstance = collection(db, `/users/${user?.nickname}/games`)
  const [ collectionArray, setCollectionArray] = useState<{}[]>([])

  useEffect(() => {
    getDocs(collectionInstance)
    .then((data) => {
      setCollectionArray(data.docs.map((item) => {
        return { ...item.data(), id: item.id}
      }))
    })
  },[])

  const loadData = () => {
    console.log(collectionArray)
  }

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, flexWrap: 'wrap'}}>
        {collectionArray.map((game) => (
        GameDisplay(game)
        ))}
      </Box>
      <Button variant="contained" onClick={loadData}/>
    </>
  )
}
export default MyCollection;
