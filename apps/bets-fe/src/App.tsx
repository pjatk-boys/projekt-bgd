import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "layouts/AppLayout";
import { theme } from "styles/theme";
import { AppRoutes } from "routes";
import { QueryClientProvider } from "react-query";
import { queryClient } from "services/queryClient";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </ChakraProvider>
  </QueryClientProvider>
);
export default App;
