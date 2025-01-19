import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NewNote from "../pages/NewNote";
import Authenticate from "../pages/Authenticate";
import Note from "../pages/Note";

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
        <Footer />
      </>
    );
  },
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const authenticationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: Authenticate,
});

const newNoteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/new-note",
  component: NewNote,
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
  path: "notes/$noteId",
  loader: ({ params }) => {
    console.log(params.noteId);
  },
  component: Note,
});

const routes = [
  indexRoute,
  profileRoute,
  noteRoute,
  newNoteRoute,
  authenticationRoute,
];
export const routeTree = rootRoute.addChildren(routes);

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const router = createRouter({ routeTree });
