import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Game from "./pages/Game";
import Ranking from "./pages/Ranking";
import PageNotFound from "./pages/PageNotFound";
import Options from "./pages/Options";
import { SettingsProvider } from "./features/context/SettingsContext";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 0,
//     },
//   },
// });

function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    //   <ReactQueryDevtools initialIsOpen={false} />
    <SettingsProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Homepage />} />
          <Route path="options" element={<Options />} />
          <Route path="game" element={<Game />} />
          <Route path="ranking" element={<Ranking />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </SettingsProvider>
    // </QueryClientProvider>
  );
}

export default App;
