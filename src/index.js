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
import Portfolio from "./Portfolio/Portfolio";
import PortfolioEditor, { PortfolioEditorRoute } from "./Portfolio/PortfolioEditor";
import PortfolioPreview from "./Portfolio/PortfolioPreview";
import LearningHub from "./Portfolio/LearningHub/LearningHub";



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
    {
        path: "/portfolio",
        element: <PortfolioPreview />,
        children: [
            { index: true, element: <Portfolio /> },
            {
                path: "/portfolio/editor",
                element: <PortfolioEditor />,
            },
            {
                path: "/portfolio/learning-hub",
                element: <LearningHub />,
            },
        ],
    },
    { ...PortfolioEditorRoute }
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
