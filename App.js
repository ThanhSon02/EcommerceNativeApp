import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import StackNavigator from "./navigation/StackNavigation";
import { NativeBaseProvider } from "native-base";
import { PersistGate } from "redux-persist/integration/react";
import { AlertNotificationRoot } from "react-native-alert-notification";
export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NativeBaseProvider>
                    <AlertNotificationRoot>
                        <StackNavigator />
                    </AlertNotificationRoot>
                </NativeBaseProvider>
            </PersistGate>
        </Provider>
    );
}
