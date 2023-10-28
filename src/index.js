import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import App from "./components/App/App";
import store from './redux/store';
import "./styles.css";
import Preview from "./shared/Preview";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <Preview />
    </Provider>
);
