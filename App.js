import { Provider } from "react-redux";
import store from "./redux/store";
import StackNavigator from "./navigation/StackNavigation";
import { NativeBaseProvider } from "native-base";

export default function App() {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <StackNavigator />
            </NativeBaseProvider>
        </Provider>
    );
}
