import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProviderComponent } from "./context/Context.jsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <ProviderComponent>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </ProviderComponent>
);
