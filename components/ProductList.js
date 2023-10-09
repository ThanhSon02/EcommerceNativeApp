import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardProduct from "./CardProduct";

const arr = [1, 2, 3, 4, 5, 6, 7];

const ProductList = ({ title }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={{display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: 'flex-start', gap: 10}}>
                {arr.map((item, index) => <CardProduct key={index}/>)}
            </View>
        </View>
    );
};

export default ProductList;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
