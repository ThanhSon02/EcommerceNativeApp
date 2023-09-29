import Home from "./src/components/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native'
import Tabbar from "./src/components/Tabbar";
import Search from "./src/components/Search";
import Favotite from "./src/components/Favorite";
import Cart from "./src/components/Cart";
import Profile from "./src/components/Profile";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={Tabbar}>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Search" component={Search}/>
                <Tab.Screen name="Favotite" component={Favotite}/>
                <Tab.Screen name="Cart" component={Cart}/>
                <Tab.Screen name="Profile" component={Profile}/>
            </Tab.Navigator>
        </NavigationContainer>    
    );
}
