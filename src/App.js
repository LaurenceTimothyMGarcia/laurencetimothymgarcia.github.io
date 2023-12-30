import logo from './logo.svg';
import './App.css';

import { ChakraProvider, Box } from '@chakra-ui/react';
import Main from './pages/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Box bg={'#010A25'} textColor={'#D2E0FD'}>
        <NavBar/>
        <Main></Main>
        <Footer/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
