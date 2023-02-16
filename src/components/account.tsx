import { Background } from "@/styles/Background";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box } from "@mui/material";

import loginRedirect from "@/utils/loginRedirect";
import { useRouter } from "next/router";

const Account = () => {
  const { user, isLoading } = useUser();
  const router = useRouter()
  if (isLoading) return <div>Loading...</div>

  loginRedirect(user, isLoading, router);

  return (
      <Background aria-label="account-background">
        <Box sx={{backgroundColor: '#2D5C62', width: '100%', margin: '2rem', borderRadius:'15px', padding:'1rem', display:"flex", flexDirection:"column", alignItems:"center" }}>
          <img src={user?.picture!} alt={'user avatar'}></img>
          <h2>{user?.nickname}</h2>
          <h2>{user?.email}</h2>
          <h2>{user?.updated_at}</h2>
        </Box>
      </Background>
  )
}

export default Account;