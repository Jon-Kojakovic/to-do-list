import ErrorScreen from "../screens/error";
import LoginScreen from "../screens/login";
import MyListsScreen from "../screens/myLists";
import NewListScreen from "../screens/newList";
import RegisterScreen from "../screens/register";

const ALL_ROUTES = {
  LOGIN: {
    path: "/login",
    component: <LoginScreen />,
    hasToBeLoggedOut: true,
  },
  REGISTER: {
    path: "/register",
    component: <RegisterScreen />,
    hasToBeLoggedOut: true,
  },
  NEW_LIST: {
    path: "/new-list",
    component: <NewListScreen />,
    hasToBeLoggedIn: true,
  },
  MY_LISTS: {
    path: "/",
    component: <MyListsScreen />,
    hasToBeLoggedIn: true,
  },
  ERROR: {
    path: "*",
    component: <ErrorScreen />,
  },
};

export default ALL_ROUTES;
