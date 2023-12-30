import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import Main from './pages/Main';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <NavBar/>
      <Main></Main>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
