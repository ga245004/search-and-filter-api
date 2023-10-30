import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import App from "./components/App/App";
import store from './redux/store';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./styles.css";
import Components from "./shared/Components";
import Preview from "./shared/Preview";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/components",
        element: <Components />,
    },
    {
        path: "/preview",
        element: <Preview />,
    },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
