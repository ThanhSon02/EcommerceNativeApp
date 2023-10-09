import { Provider } from "react-redux";
import store from "./redux/store";
import StackNavigator from "./navigation/StackNavigation";

export default function App() {
    return (
        <>
            <Provider store={store}>
                <StackNavigator/>
            </Provider>
        </>
    );
}
