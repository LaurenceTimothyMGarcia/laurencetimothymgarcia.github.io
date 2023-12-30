import logo from './logo.svg';
import './App.css';

import { ChakraProvider, Box } from '@chakra-ui/react';
import Main from './pages/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import colors from './theme/Color';

function App() {
  return (
    <ChakraProvider>
      <Box bg={colors.bg} textColor={colors.text}>
        <NavBar/>
        <Main></Main>
        <Footer/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
