import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Tabbar() {
    return ( 
        <View style={styles.tabBarContainer}>
            <TouchableOpacity style={styles.tabItem}>
                <View>
                    <Image source={require("../../assets/Home.png")}/>
                    <Text>Home</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem}>
                <View>
                    <Image source={require("../../assets/Search.png")}/>
                    <Text>Brower</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem}>
                <View>
                    <Image source={require("../../assets/Heart.png")}/>
                    <Text>Favorites</Text>
                </View>
                {/* <View style={styles.badge}>
                    <Text>3</Text>
                </View> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem}>
                <View>
                    <Image source={require("../../assets/CartIcon.png")}/>
                    <Text>Cart</Text>
                </View>
                {/* <View style={styles.badge}>
                    <Text>3</Text>
                </View> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem}>
                <View>
                    <Image source={require("../../assets/Profile.png")}/>
                    <Text>Profile</Text>
                </View>
            </TouchableOpacity>
        </View>
     );
}

const styles = StyleSheet.create({
    tabBarContainer: {
        display: "flex",
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    tabItem: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyItems: "center",
        position: "relative"
    },
    badge: {
        position: "absolute",
        color: "red",
        top: 0,
        right: 0,
        borderWidth: 1,
        borderColor: "back",
        padding: 2,
    }
})

export default Tabbar;