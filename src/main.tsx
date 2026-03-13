import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Rootlayout from "./layouts/Rootlayout.tsx";
import { ROUTE_PATHS } from "./lib/navigation.ts";
import { Contact } from "./pages/Contact.tsx";
import { EBoard } from "./pages/E_Board.tsx";
import { Events } from "./pages/Events.tsx";
import { Projects } from "./pages/Projects.tsx";
import { Home } from "./pages/Home.tsx";

// redesign global style
import "./styles/index.css";

const router = createBrowserRouter(
  [
    {
      element: <Rootlayout />,
      children: [
        { path: ROUTE_PATHS.home, element: <Home /> },
        { path: ROUTE_PATHS.eBoard, element: <EBoard /> },
        { path: ROUTE_PATHS.events, element: <Events /> },
        { path: ROUTE_PATHS.projects, element: <Projects /> },
        { path: ROUTE_PATHS.contact, element: <Contact /> },
      ],
    },
  ],
  {
    basename: "/",
  },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
