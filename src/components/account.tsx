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
        <Box sx={{backgroundColor: '#2D5C62', width: '100%', margin: '2rem', borderRadius:'15px', padding:'1rem' }}>
          <h2>This is your account info</h2>
        </Box>
      </Background>
  )
}

export default Account;