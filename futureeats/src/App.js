import { Router } from './Routes/Routers'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './Styled/Themas'
import GlobalState from './context/GlobalState';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ChakraProvider>
  );
}

export default App;
