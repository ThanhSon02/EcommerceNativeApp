import { useState } from "react";
import { Text, Image, Pressable, VStack, Box, Flex } from "native-base";
import { useNavigation } from "@react-navigation/native";

const CardProduct = ({ data }) => {
    const navigation = useNavigation();
    return (
        <Pressable
            bgColor={"#f5f5f5"}
            p={4}
            borderRadius={24}
            onPress={() =>
                navigation.navigate("Detail", {
                    _id: data?._id,
                    product_img: data?.product_img,
                    product_name: data?.product_name,
                    price: data?.price,
                    category: data?.category,
                    discount: data?.discount,
                    description: data?.description,
                    in_stock: data?.in_stock,
                })
            }
            w={170}
            h={300}>
            {({ isHovered, isPressed }) => {
                return (
                    <Box>
                        <Box
                            position={"relative"}
                            overflow={"hidden"}
                            mb={2}
                            bg={
                                isPressed
                                    ? "coolGray.200"
                                    : isHovered
                                    ? "coolGray.200"
                                    : "coolGray.100"
                            }
                            style={{
                                transform: [
                                    {
                                        scale: isPressed ? 0.96 : 1,
                                    },
                                ],
                            }}>
                            <Image
                                w={160}
                                height={160}
                                source={{ uri: data.product_img }}
                                alt="product"
                            />
                        </Box>
                        <VStack>
                            <Box display={"flex"} flexDirection={"row"} gap={3}>
                                {data.discount ? (
                                    <Text
                                        fontSize={18}
                                        fontWeight={"bold"}
                                        color={"red.500"}>
                                        $
                                        {Math.ceil(
                                            (1 - data.discount / 100) *
                                                data.price
                                        )}
                                    </Text>
                                ) : (
                                    <></>
                                )}
                                <Text
                                    fontSize={18}
                                    fontWeight={"bold"}
                                    textDecorationLine={
                                        data.discount ? "line-through" : ""
                                    }>
                                    ${data.price}
                                </Text>
                            </Box>
                            <Text fontSize={14} fontWeight={"semibold"}>
                                {data.product_name}
                            </Text>
                        </VStack>
                    </Box>
                );
            }}
        </Pressable>
    );
};

export default CardProduct;
