import { createHashRouter } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";
import NotFound from "./pages/404";
import Test from "./pages/auth/testing-form";
import Profile from "./pages/account/outlets/Profile";
import Account from "./pages/account";
import Balance from "./pages/account/outlets/Balance";
import NewsList from "./pages/news/news-list";
import NewsPost from "./pages/news/news-post";
import LauncherForAndroid from "./pages/launcher/android";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/account",
        element: <Account />,
        children: [
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "balance",
              element: <Balance />,
            },
          ],
    },
    {
        path: "/launcheer-for-android",
        element: <LauncherForAndroid />,
    },
    {
        path: "/launcheer-for-pc",
        element: <LauncherForAndroid />,
    },
    {
        path: "/news",
        element: <NewsList />,
    },
    {
        path: "/news/:id",
        element: <NewsPost />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;