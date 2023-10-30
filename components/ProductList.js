import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardProduct from "./CardProduct";
import { useSelector } from "react-redux";

const ProductList = ({ title }) => {
    const data = useSelector((state) => state.products.allProduct);
    return (
        <View style={{ width: "100%", marginBottom: 100 }}>
            <Text style={styles.title}>{title}</Text>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    width: "100%",
                    gap: 10,
                }}>
                {data.map((item, index) => (
                    <CardProduct data={item} key={index} />
                ))}
            </View>
        </View>
    );
};

export default ProductList;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
});
