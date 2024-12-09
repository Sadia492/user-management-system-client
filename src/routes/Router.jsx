import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import MainLayout from "../components/MainLayout";
import ViewUsers from "../components/ViewUsers";
import AddUsers from "../components/AddUsers";
import Update from "../components/Update";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <ViewUsers></ViewUsers>,
        loader: () =>
          fetch("https://user-management-system-server-iota.vercel.app/users"),
      },
      {
        path: "/add-users",
        element: <AddUsers></AddUsers>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(
            `https://user-management-system-server-iota.vercel.app/users/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
