import React from 'react';
import { Container, Box, ChakraProvider } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import colors from '../theme/Color';

// Figure out aspect ratio here
function Layout({ children }) {
  return (
    <ChakraProvider>
      <Box bg={colors.bg} textColor={colors.text}>
        <NavBar />
        <Container maxW='90vw'>
          {children}
        </Container>
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default Layout;