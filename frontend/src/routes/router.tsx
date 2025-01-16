import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";

// const router = createRouter({});
const rootRoute = createRootRoute({
  notFoundComponent: () => {
    return <h1>Not found</h1>;
  },
  component: () => {
    return (
      <>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <footer>footer</footer>
      </>
    );
  },
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  //   beforeLoad: () => {
  //     if (true) {
  //         throw redirect({
  //             to: '/',
  //             search: {
  //                 redirect: location.href
  //             }
  //         });
  //     }
  //   },
  component: Profile,
});

const noteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "$noteId",
  loader: ({ params }) => {
    console.log(params.noteId);
  },
  component: Home,
});

const routes = [indexRoute, profileRoute, noteRoute];
export const routeTree = rootRoute.addChildren(routes);

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const router = createRouter({ routeTree });
