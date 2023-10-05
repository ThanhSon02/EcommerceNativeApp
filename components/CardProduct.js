import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import AntdIcon from "@expo/vector-icons/AntDesign";
import React from "react";

const screenWidth = Dimensions.get("window").width;
const cardWidth = (screenWidth - 50) / 2;
const CardProduct = () => {
    return (
        <View style={styles.container}>
            <View
                style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "red",
                    width: 160,
                    height: 170,
                    borderRadius: 24,
                }}>
                <View style={styles.icon}>
                    <AntdIcon name="heart" size={20} />
                </View>
                <Image
                    source={require("../assets/sonyHeadphone.png")}
                    style={styles.image}
                />
            </View>
            <Text>CardProduct</Text>
        </View>
    );
};

export default CardProduct;

const styles = StyleSheet.create({
    container: {
        width: cardWidth,
    },
    icon: {
        position: "absolute",
        right: 20,
        top: 10,
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 50,
    },
    image: {
        width: 140,
        height: 140,
    },
});
