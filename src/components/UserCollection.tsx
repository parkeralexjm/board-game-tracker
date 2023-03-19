import Box from "@mui/material/Box";

import { useUser } from "reactfire";

const UserCollection =(props: any) => {

  const { status, data:user } = useUser();

  return (
    <>
      <Box sx={{ display: "flex", gap: 2, flexWrap: 'wrap'}}>
        <h1>Welcome Back, {user?.uid}!</h1>
      </Box>
    </>
  )
}
export default UserCollection;
