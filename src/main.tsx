import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Rootlayout from "./layouts/Rootlayout.tsx";
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
        { path: "/", element: <Home /> },
        { path: "/e-board", element: <EBoard /> },
        { path: "/events", element: <Events /> },
        { path: "/projects", element: <Projects /> },
        { path: "/contact", element: <Contact /> },
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
