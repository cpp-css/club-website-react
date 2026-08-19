import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Rootlayout from "./layouts/Rootlayout.tsx";
import { ROUTE_PATHS } from "./lib/navigation.ts";
import { Home } from "./pages/Home.tsx";

const EBoard = lazy(() =>
  import("./pages/E_Board.tsx").then((module) => ({ default: module.EBoard })),
);
const Events = lazy(() =>
  import("./pages/Events.tsx").then((module) => ({ default: module.Events })),
);
const Projects = lazy(() =>
  import("./pages/Projects.tsx").then((module) => ({
    default: module.Projects,
  })),
);
const Contact = lazy(() =>
  import("./pages/Contact.tsx").then((module) => ({ default: module.Contact })),
);

// redesign global style
import "./styles/index.css";

const router = createBrowserRouter(
  [
    {
      element: <Rootlayout />,
      children: [
        {
          path: ROUTE_PATHS.home,
          element: <Home />,
        },
        {
          path: ROUTE_PATHS.eBoard,
          element: (
            <Suspense fallback={null}>
              <EBoard />
            </Suspense>
          ),
        },
        {
          path: ROUTE_PATHS.events,
          element: (
            <Suspense fallback={null}>
              <Events />
            </Suspense>
          ),
        },
        {
          path: ROUTE_PATHS.projects,
          element: (
            <Suspense fallback={null}>
              <Projects />
            </Suspense>
          ),
        },
        {
          path: ROUTE_PATHS.contact,
          element: (
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          ),
        },
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
