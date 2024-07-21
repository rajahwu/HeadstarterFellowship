import Dashboard from "./pages/Dashboard";

import {
    createRoutesFromElements,
    createBrowserRouter,
    Route
  } from "react-router-dom";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<HomePage />}
      />
    )
  )

function HomePage() {
    return <Dashboard />
}

export default router;