import Box from "@mui/material/Box";
import { useState } from "react";


const UserCollection =() => {
  const [ collectionArray, setCollectionArray] = useState<{}[]>([])

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, flexWrap: 'wrap'}}>
      </Box>
    </>
  )
}
export default UserCollection;
