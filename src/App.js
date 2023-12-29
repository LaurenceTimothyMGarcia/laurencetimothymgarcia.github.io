import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import Main from './pages/Main';

function App() {
  return (
    <ChakraProvider>
      <Main></Main>
    </ChakraProvider>
  );
}

export default App;
