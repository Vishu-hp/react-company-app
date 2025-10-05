import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Company, Error, HomeLayout } from "./pages";
import AppContext from "./context/AppContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Company />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <>
      <AppContext>
        <RouterProvider router={router} />
      </AppContext>
    </>
  );
}

export default App;
