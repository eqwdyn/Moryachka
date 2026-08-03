import { BrowserRouter } from "react-router-dom";
import "./styles/normalize.css";
import "./styles/fonts.css";
import "./styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "@app/routes/AppRouter";
import { AuthContextProvider } from "@app/providers/AuthContext";
import { YMaps } from "@pbe/react-yandex-maps";
import { YA_MAPS_URL } from "@shared/api/urls";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <YMaps query={{ apikey: YA_MAPS_URL }}>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </YMaps>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
