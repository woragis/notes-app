import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes/router.tsx";
import { global } from "./styles/global.styles.ts";
import { Global } from "@emotion/react";
import { Provider } from "react-redux";
import store from "./features/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={global} />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
