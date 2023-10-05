import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import AntdIcon from "@expo/vector-icons/AntDesign";
import { useState } from "react";

const screen_width = Dimensions.get("window").width;
const carouselItemWidth = screen_width - 40;

function CarouselCPN() {
    const category = [
        {
            label: "All",
            img: require("../assets/rodepodmic.png"),
        },
        {
            label: "Audio",
            img: require("../assets/rodepodmic.png"),
        },
        {
            label: "Drones + Electrolics",
            img: require("../assets/rodepodmic.png"),
        },
        {
            label: "Photo + Videos",
            img: require("../assets/rodepodmic.png"),
        },
        {
            label: "Gaming + VR",
            img: require("../assets/rodepodmic.png"),
        },
        {
            label: "Networking",
            img: require("../assets/rodepodmic.png"),
        },
    ];

    const [favorite, setFavorite] = useState(false);
    const handleSetFavorite = () => {
        setFavorite(!favorite);
    };

    return (
        <View
            style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 36,
                marginBottom: 20,
            }}>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 16,
                }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Deals for the day
                </Text>
                <TouchableOpacity underlayColor={"#000"}>
                    <Text style={{ color: "#B0B5B9" }}>See all</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={category}
                renderItem={({ item, index }) => (
                    <View style={styles.navItem}>
                        <Image
                            source={item.img}
                            style={{ width: 100, height: 100 }}
                        />
                        <View style={{ width: "60%" }}>
                            <TouchableOpacity onPress={handleSetFavorite}>
                                <View
                                    style={{
                                        alignSelf: "flex-end",
                                        backgroundColor: "#fff",
                                        padding: 10,
                                        borderRadius: 50,
                                    }}>
                                    <AntdIcon
                                        name="heart"
                                        color={favorite ? "red" : "black"}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={{ display: "flex", gap: 2 }}>
                                <Text
                                    style={{
                                        color: "#868D94",
                                        fontWeight: 600,
                                    }}>
                                    Microphones
                                </Text>
                                <View
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        gap: 8,
                                    }}>
                                    <Text
                                        style={{
                                            color: "#FA254C",
                                            fontWeight: "bold",
                                        }}>
                                        $108.20
                                    </Text>
                                    <Text
                                        style={{
                                            textDecorationLine: "line-through",
                                        }}>
                                        $199.99
                                    </Text>
                                </View>
                                <Text>RØDE PodMic</Text>
                                <Text style={{ color: "#868D94" }}>
                                    Dynamic microphone, Speaker microphone
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    navItem: {
        backgroundColor: "#f5f5f5",
        borderRadius: 24,
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        width: carouselItemWidth,
        height: 170,
        padding: 16,
    },
});

export default CarouselCPN;
