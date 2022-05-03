
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';

const App = () => {
  return (
    <ChakraProvider>
      <div>

        <Header />
        <Home />
      </div>
    </ChakraProvider>
  );
}

export default App;