import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import { Text } from "react-native";
import FeatherIcon from "@expo/vector-icons/Feather";

const Tab = createBottomTabNavigator();

function Tabbar() {
    return (
        <Tab.Navigator labelStyle={{ fontSize: 20, fontWeight: "bold" }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: ({ focused }) =>
                        focused ? (
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#212429",
                                }}>
                                Home
                            </Text>
                        ) : (
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#868D94",
                                }}>
                                Home
                            </Text>
                        ),
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <FeatherIcon
                                name="home"
                                size={24}
                                color={"#212429"}
                            />
                        ) : (
                            <FeatherIcon
                                name="home"
                                size={24}
                                color={"#868D94"}
                            />
                        ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: ({ focused }) =>
                        focused ? (
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#212429",
                                }}>
                                Search
                            </Text>
                        ) : (
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#868D94",
                                }}>
                                Search
                            </Text>
                        ),
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <FeatherIcon
                                name="search"
                                size={24}
                                color={"#212429"}
                            />
                        ) : (
                            <FeatherIcon
                                name="search"
                                size={24}
                                color={"#868D94"}
                            />
                        ),
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarLabel: ({ focused }) =>
                        focused ? (
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#212429",
                                }}>
                                Cart
                            </Text>
                        ) : (
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#868D94",
                                }}>
                                Cart
                            </Text>
                        ),
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <FeatherIcon
                                name="shopping-cart"
                                size={24}
                                color={"#212429"}
                            />
                        ) : (
                            <FeatherIcon
                                name="shopping-cart"
                                size={24}
                                color={"#868D94"}
                            />
                        ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: ({ focused }) =>
                        focused ? (
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#212429",
                                }}>
                                Profile
                            </Text>
                        ) : (
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "#868D94",
                                }}>
                                Profile
                            </Text>
                        ),
                    tabBarIcon: ({ focused }) =>
                        focused ? (
                            <FeatherIcon
                                name="user"
                                size={24}
                                color={"#212429"}
                            />
                        ) : (
                            <FeatherIcon
                                name="user"
                                size={24}
                                color={"#868D94"}
                            />
                        ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabbar;
