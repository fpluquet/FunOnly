import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GamePage from "./GamePage/GamePage";
import HomePage from "./Home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>
  },
  {
    path: "/game/:id",
    element: <GamePage/>
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router}/>
}
