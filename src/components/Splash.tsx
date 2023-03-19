import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Container } from "@mui/system";

const SplashBackground = styled.div`
    width: 100vw; 
    min-height: 100vh;
    background: linear-gradient(85deg, #482257 0%, #2D5C62 100%);
    display: flex;
    flex-direction: column;
    color: white;
    padding: 32px;
    @media (max-width: 600px) {
      padding: 16px;
    }
    justify-content: center;
`

const Splash = () => {
  return (
    <SplashBackground>
      <Container>
        <Typography variant="h3">
          Board Game Collection
        </Typography>
        <Typography variant="h5">
          Sign Up Now
        </Typography>
        <Typography variant="h6">
          Unlock the potential of your board game collection.
        </Typography>
        <Button href="/collection" variant="contained" sx={{ maxWidth: '200px'}}>
          Log In
        </Button>
      </Container>
    </SplashBackground>
  )
}

export { Splash, SplashBackground };