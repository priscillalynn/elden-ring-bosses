import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";

// react-query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    // global error handling for useQuery
    onError: (error) => {
      const responseMessage = error?.response?.data?.message;

      toast.error(
        `Error: ${error.message} \n\nMessage: ${responseMessage || "None"}`,
      );
    },
  }),
  mutationCache: new MutationCache({
    // global error handling for useMutation
    onError: (error) => {
      const responseMessage = error?.response?.data?.message;

      toast.error(
        `Error: ${error.message} \n\nMessage: ${responseMessage || "None"}`,
      );
    },
  }),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
