import Link from 'next/link'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const FourOhFour = () => (
  <Container>
    <Typography variant="h3">404 - Page Not Found</Typography>
    <Link href="/">
      <Button>
        Go back home
      </Button>
    </Link>
  </Container>
);

export default FourOhFour;
