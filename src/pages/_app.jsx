import "@/src/styles/index.scss";
import {Provider} from "react-redux";
import {store} from "/src/bll/store";

if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}


export default function App({Component, pageProps}) {
    return <Provider store={store}>
        <Component {...pageProps} />
    </Provider>;
}
