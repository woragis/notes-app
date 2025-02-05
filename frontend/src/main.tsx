import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes/router.tsx";
import { global } from "./styles/global.styles.ts";
import { Global } from "@emotion/react";
import { Provider } from "react-redux";
import store from "./features/store.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./api/queryClient.ts";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <ToastContainer
        autoClose={5000}
        draggable
        draggableDirection="x"
        newestOnTop
        stacked
        position="top-left"
      />
      <Global styles={global} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);
