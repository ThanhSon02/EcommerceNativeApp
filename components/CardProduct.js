import { View, Text, Image, StyleSheet,  TouchableOpacity } from "react-native";
import AntdIcon from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";

const CardProduct = () => {
    const [favotite, setFavorite] = useState(false)
    const handleSetFavorite = () => {
        setFavorite(!favotite)
    }
    return (
        <View style={styles.container}>
            <View
                style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#f5f5f5",
                    width: "100%",
                    height: 170,
                    borderRadius: 24,
                    marginBottom: 8
                }}>
                <TouchableOpacity onPress={handleSetFavorite} style={{position: "absolute", right: 20, top: 10, zIndex: 10}}>
                    <View style={styles.icon}>
                        <AntdIcon name="heart" size={16} color={favotite ? "red" : "black"}/>
                    </View>
                </TouchableOpacity>
                <Image
                    source={require("../assets/sonyHeadphone.png")}
                    style={styles.image}
                />
            </View>
            <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 14, fontWeight: "bold"}}>$349.99</Text>
                <Text style={{fontSize: 14, fontWeight: 500}}>SONY Premium Wireless Headphones</Text>
                <Text style={{fontSize: 10, color: "#868D94"}}>Model: WH-1000XM4, Black</Text>
            </View>
        </View>
    );
};

export default CardProduct;

const styles = StyleSheet.create({
    container: {
        width: "48%",
        marginBottom: 12
    },
    icon: {
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 50,
    },
    image: {
        width: 140,
        height: 140,
    },
});
