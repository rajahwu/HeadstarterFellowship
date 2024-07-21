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
    return <p>React Router Is Working</p>
}

export default router;