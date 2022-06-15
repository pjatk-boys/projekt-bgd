import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "layouts/AppLayout";
import { theme } from "styles/theme";
import { AppRoutes } from "routes";

const App = () => (
  <ChakraProvider theme={theme}>
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  </ChakraProvider>
);
export default App;
