import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  Outlet,
} from "@tanstack/react-router";
import Profile from "../pages/Profile";
import Home from "../pages/Home";

// const router = createRouter({});
const rootRoute = createRootRoute({
  notFoundComponent: () => {
    return <h1>Not found</h1>;
  },
  component: () => {
    return (
      <>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/profile"}>Profile</Link>
        </nav>
        <hr />
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
