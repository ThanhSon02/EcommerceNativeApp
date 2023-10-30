import {
    View,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import axiosInstance from "../axios/axios";
import { Box, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";

const screen_width = Dimensions.get("window").width;
const carouselItemWidth = screen_width - 40;

function CarouselCPN() {
    const navigation = useNavigation();

    const [deal, setDeal] = useState();

    useEffect(() => {
        const getDeal = async () => {
            const res = await axiosInstance.get("/product/getDeal");
            setDeal(res.data.dealList);
        };
        getDeal();
    }, []);

    return (
        <View
            style={{
                display: "flex",
                flexDirection: "column",
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
            </View>
            <FlatList
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                data={deal}
                renderItem={({ item, index }) => (
                    <Pressable
                        onPress={() =>
                            navigation.navigate("Detail", {
                                id: item?._id,
                                product_img: item?.product_img,
                                product_name: item?.product_name,
                                price: item?.price,
                                category: item?.category,
                                discount: item?.discount,
                                description: item?.description,
                            })
                        }
                        w={160}>
                        {({ isHovered, isPressed }) => {
                            return (
                                <Box
                                    bgColor={"#f5f5f5"}
                                    borderRadius={24}
                                    p={6}
                                    gap={4}
                                    flex={1}
                                    display={"flex"}
                                    alignItems={"center"}
                                    flexDirection={"row"}
                                    width={carouselItemWidth}>
                                    <Image
                                        source={{ uri: item.product_img }}
                                        style={{ width: 100, height: 100 }}
                                    />
                                    <View style={{ width: "60%" }}>
                                        <View
                                            style={{ display: "flex", gap: 2 }}>
                                            <Text
                                                color={"#868D94"}
                                                fontWeight={600}
                                                fontSize={20}>
                                                {item.product_name}
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
                                                    $
                                                    {(1 - item.discount / 100) *
                                                        item.price}
                                                </Text>
                                                <Text
                                                    style={{
                                                        textDecorationLine:
                                                            "line-through",
                                                    }}>
                                                    ${item.price}
                                                </Text>
                                            </View>
                                            <Text style={{ color: "#868D94" }}>
                                                {item.category}
                                            </Text>
                                        </View>
                                    </View>
                                </Box>
                            );
                        }}
                    </Pressable>
                )}
            />
        </View>
    );
}

export default CarouselCPN;
