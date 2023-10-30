import React from "react";
import {
    Box,
    Flex,
    Icon,
    Image,
    Pressable,
    ScrollView,
    Text,
    VStack,
} from "native-base";
import AntdIcon from "@expo/vector-icons/AntDesign";
import { View, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

const Detail = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(
            addToCart({
                product: {
                    product_name: route.params.product_name,
                    _id: route.params._id,
                    product_img: route.params.product_img,
                    price: route.params.price,
                    in_stock: route.params.in_stock,
                    discount: route.params.discount,
                },
                quantity: 1,
            })
        );
        Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: "Đã thêm sản phẩm vào giở hàng",
        });
    };

    return (
        <Flex
            width={"100%"}
            height={"100%"}
            pt={16}
            direction="column"
            justifyContent={"start"}
            alignItems={"center"}
            backgroundColor={"#fff"}>
            <Box
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
                w={"100%"}
                px={3}
                pb={4}>
                <Pressable onPress={goBack}>
                    {({ isHovered, isPressed }) => {
                        return (
                            <Box
                                bg={
                                    isPressed
                                        ? "coolGray.200"
                                        : isHovered
                                        ? "coolGray.200"
                                        : "white"
                                }
                                p={3}
                                borderRadius={"50"}>
                                <Icon
                                    as={AntdIcon}
                                    name="left"
                                    color={"#000"}
                                />
                            </Box>
                        );
                    }}
                </Pressable>
                <Text fontSize={18} fontWeight={"bold"}>
                    {route?.params?.category}
                </Text>
                <Box w={8}></Box>
            </Box>
            <ScrollView w={"100%"} px={2}>
                <Flex w={"100%"} flexDirection={"column"}>
                    <Box
                        bgColor={"#F5F5F5"}
                        borderRadius={24}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        h={350}>
                        <Image
                            width={300}
                            height={300}
                            source={{ uri: route?.params?.product_img }}
                            alt="product"
                        />
                        <TouchableOpacity
                            onPress={handleAddToCart}
                            style={{
                                position: "absolute",
                                right: 20,
                                bottom: 30,
                                zIndex: 10,
                            }}>
                            <View
                                style={{
                                    backgroundColor: "#fff",
                                    borderRadius: 50,
                                    padding: 10,
                                }}>
                                <AntdIcon name="shoppingcart" size={20} />
                            </View>
                        </TouchableOpacity>
                    </Box>

                    <VStack px={3} mt={4}>
                        <Box display={"flex"} flexDirection={"row"} gap={3}>
                            {route?.params?.discount ? (
                                <Text
                                    fontSize={20}
                                    fontWeight={"bold"}
                                    color={"red.500"}>
                                    $
                                    {Math.ceil(
                                        (1 - route?.params?.discount / 100) *
                                            route?.params?.price
                                    )}
                                </Text>
                            ) : (
                                <></>
                            )}
                            <Text
                                fontSize={20}
                                fontWeight={"bold"}
                                textDecorationLine={
                                    route?.params?.discount
                                        ? "line-through"
                                        : ""
                                }>
                                ${route?.params?.price}
                            </Text>
                        </Box>
                        <Text fontSize={20} fontWeight={"semibold"}>
                            {route?.params?.product_name}
                        </Text>

                        <Text mt={3} color={"#868D94"}>
                            {route?.params?.description}
                        </Text>
                    </VStack>
                </Flex>
            </ScrollView>
        </Flex>
    );
};

export default Detail;
