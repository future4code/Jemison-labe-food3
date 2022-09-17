import {Router} from './Routes/Routers'
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from './Styled/Themas'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router/>
    </ChakraProvider>
  );
}

export default App;
