import { Box, Container } from "@mui/material";

import ContactHeader from "./ContactHeader";
import ContactContent from "./ContactContent";

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: {
          xs: 10,
          md: 14,
        },
      }}
    >
      <Container maxWidth="lg">
        <ContactHeader />

        <ContactContent />
      </Container>
    </Box>
  );
};

export default Contact;