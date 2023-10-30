import { Box, Flex, Icon, Image, Text, VStack } from "native-base";
import { Pressable } from "react-native";
import AntdIcon from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

function CartItem({ data }) {
    const [quantity, setQuantity] = useState(data?.quantity);
    const dispatch = useDispatch();
    const handleIncrease = () => {
        setQuantity(quantity + 1);
        dispatch(addToCart({ ...data, quantity: quantity + 1 }));
    };

    const handleDeCrease = () => {
        setQuantity(quantity - 1);
        dispatch(addToCart({ ...data, quantity: quantity - 1 }));
    };

    const handleRemove = () => {
        dispatch(removeFromCart(data));
        Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: "Đã xoá sản phẩm khỏi giở hàng",
        });
    };

    return (
        <Flex
            w={"100%"}
            direction="row"
            alignItems={"center"}
            mb={5}
            justifyContent={"space-between"}
            gap={3}>
            <Box bgColor={"#F5F5F5"} borderRadius={16}>
                <Image
                    w={60}
                    h={60}
                    source={{ uri: data?.product?.product_img }}
                    alt="img"
                />
            </Box>
            <VStack w={160} py={2}>
                <Box display={"flex"} flexDirection={"row"} gap={3}>
                    <Text fontSize={14} fontWeight={"bold"} color={"red.500"}>
                        $
                        {Math.ceil(
                            (1 - data?.product?.discount / 100) *
                                data?.product?.price
                        )}
                    </Text>
                    <Text
                        fontSize={14}
                        fontWeight={"bold"}
                        textDecorationLine={
                            data?.product?.discount ? "line-through" : ""
                        }>
                        ${data?.product?.price}
                    </Text>
                </Box>
                <Text fontSize={14} fontWeight={"semibold"}>
                    {data?.product?.product_name}
                </Text>
            </VStack>

            <Flex direction="column" alignItems={"space-between"} gap={2}>
                <Pressable onPress={handleRemove}>
                    <Icon size={5} as={Feather} name="x" />
                </Pressable>
                <Flex
                    gap={2}
                    direction="row"
                    alignItems={"center"}
                    justifyContent={"space-around"}>
                    <Pressable
                        onPress={handleDeCrease}
                        disabled={quantity == 1}>
                        {({ isHovered, isPressed }) => {
                            return (
                                <Box
                                    bg={
                                        isPressed
                                            ? "coolGray.200"
                                            : isHovered
                                            ? "coolGray.200"
                                            : "#f5f5f5"
                                    }
                                    p={1}
                                    borderRadius={"10"}>
                                    <Icon
                                        as={AntdIcon}
                                        name="minus"
                                        color={"#000"}
                                        size={5}
                                    />
                                </Box>
                            );
                        }}
                    </Pressable>
                    <Text>{quantity}</Text>
                    <Pressable onPress={handleIncrease}>
                        {({ isHovered, isPressed }) => {
                            return (
                                <Box
                                    bg={
                                        isPressed
                                            ? "coolGray.200"
                                            : isHovered
                                            ? "coolGray.200"
                                            : "#f5f5f5"
                                    }
                                    p={1}
                                    borderRadius={"10"}>
                                    <Icon
                                        as={AntdIcon}
                                        name="plus"
                                        color={"#000"}
                                        size={5}
                                    />
                                </Box>
                            );
                        }}
                    </Pressable>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default CartItem;
