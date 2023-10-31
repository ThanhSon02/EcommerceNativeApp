import React, { useState } from "react";
import AntdIcon from "@expo/vector-icons/AntDesign";
import {
    ScrollView,
    VStack,
    Input,
    Icon,
    Box,
    Pressable,
    Text,
    Flex,
    Button,
} from "native-base";
import axiosInstance from "../axios/axios";

const category = [
    {
        label: "Audio",
        value: "Audio",
    },
    {
        label: "Drones + Electrolics",
        value: "DronesElectrolics",
    },
    {
        label: "Photo + Videos",
        value: "PhotoVideos",
    },
    {
        label: "Gaming + VR",
        value: "GamingVR",
    },
    {
        label: "Networking",
        value: "Networking",
    },
];

function Search({ navigation }) {
    const getSearchResult = async (categoryType, category) => {
        try {
            const res = await axiosInstance.get(
                `/product/category/${category}`
            );
            navigation.navigate("SearchResult", {
                data: res.data.productList,
                categoryType,
            });
        } catch (error) {
            console.log(error.response.data.message);
        }
    };
    const [keyword, setKeyword] = useState("");

    const handleSearchInput = async (keyword) => {
        try {
            const res = await axiosInstance.get(`/product/search/${keyword}`);
            navigation.navigate("SearchResult", {
                data: res.data.result,
                categoryType: `Result for '${keyword}'`,
            });
        } catch (error) {
            console.log(error.response.data.message);
        }
    };

    return (
        <Flex
            pt={"16"}
            px={4}
            direction="column"
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            height="100%"
            backgroundColor={"#fff"}>
            <Box display={"flex"} flexDirection={"row"} w={"100%"}>
                <Input
                    placeholder="Search"
                    variant="filled"
                    value={keyword}
                    onChangeText={(text) => setKeyword(text)}
                    flex={1}
                    py="1"
                    px="3"
                />
                <Button onPress={() => handleSearchInput(keyword)}>
                    <Icon
                        color={"#fff"}
                        as={AntdIcon}
                        name="search1"
                        w={"100%"}
                    />
                </Button>
            </Box>
            <ScrollView w={"100%"}>
                <VStack alignItems="center">
                    {category.map((item, index) => (
                        <Pressable
                            key={index}
                            onPress={() =>
                                getSearchResult(item.label, item.value)
                            }
                            w="100%"
                            mt={5}>
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
                                        px={2}>
                                        <VStack alignItems="center">
                                            <Flex
                                                direction="row"
                                                alignItems={"center"}
                                                w={"100%"}
                                                justifyContent={"space-between"}
                                                borderBottomWidth={0.5}
                                                py={2}>
                                                <Text
                                                    fontSize={18}
                                                    fontWeight={"bold"}>
                                                    {item.label}
                                                </Text>
                                                <Icon
                                                    as={AntdIcon}
                                                    name="right"
                                                    color={"#000"}
                                                />
                                            </Flex>
                                        </VStack>
                                    </Box>
                                );
                            }}
                        </Pressable>
                    ))}
                </VStack>
            </ScrollView>
        </Flex>
    );
}

export default Search;
