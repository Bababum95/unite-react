import { createHashRouter } from "react-router-dom";
import Home from "../pages/home";
import SignIn from "../pages/auth/sign-in";
import SignUp from "../pages/auth/sign-up";
import NotFound from "../pages/404";
import Account from "../pages/account";
import Balance from "../pages/account/outlets/Balance";
import NewsList from "../pages/news/news-list";
import NewsPost from "../pages/news/news-post";
import LauncherForAndroid from "../pages/launcher/android";
import LauncherForPC from "../pages/launcher/pc";
import Mumble from "../pages/voice/Mumble";
import Teamspeak from "../pages/voice/Teamspeak";
import Test from "../test";
import Forgot from "../pages/auth/forgot";
import Confirm from "../pages/auth/confirm"
import ServerGames from "../pages/games/ServerGames";
import NetworkGames from "../pages/games/NetworkGames";
import SingleGames from "../pages/games/SingleGames";
import AndroidGames from "../pages/games/AndroidGames";
import Review from "../pages/account/outlets/review";
import UserInfo from "../pages/account/outlets/user-info";

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
        path: "/forgot",
        element: <Forgot />,
    },
    {
        path: "/confirm",
        element: <Confirm />,
    },
    {
        path: "/account",
        element: <Account />,
        children: [
            {
              path: "",
              element: <Review />,
            },
            {
              path: "user-info",
              element: <UserInfo />,
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
        element: <LauncherForPC />,
    },
    {
        path: "/mumble",
        element: <Mumble />,
    },
    {
        path: "/teamspeak",
        element: <Teamspeak />,
    },
    {
        path: "/single-games",
        element: <SingleGames />,
    },
    {
        path: "/android-games",
        element: <AndroidGames />,
    },
    {
        path: "/network-games",
        element: <NetworkGames />,
    },
    {
        path: "/server-games",
        element: <ServerGames />,
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
        path: "/test",
        element: <Test />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;