import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes/router.tsx";
import { global } from "./styles/global.styles.ts";
import { Global } from "@emotion/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global styles={global} />
    <RouterProvider router={router} />
  </StrictMode>
);
