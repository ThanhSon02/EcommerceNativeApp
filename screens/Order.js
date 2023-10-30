import { useNavigation } from "@react-navigation/native";
import {
    Box,
    Flex,
    Heading,
    Icon,
    Pressable,
    ScrollView,
    VStack,
} from "native-base";
import AntdIcon from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";
import OrderItem from "../components/OrderItem";
import { useSelector } from "react-redux";
import axiosInstance from "../axios/axios";

function Order() {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };
    const [myOrder, setMyOrder] = useState([]);
    const accessToken = useSelector((state) => state.auth.auth.accessToken);

    useEffect(() => {
        const getMyOrder = async () => {
            const res = await axiosInstance.get("order/get-my-order", {
                headers: {
                    token: `Beare ${accessToken}`,
                },
            });
            setMyOrder(res.data.userOrder);
        };
        getMyOrder();
    }, []);
    return (
        <Flex h={"100%"} w={"100%"} bgColor={"#fff"}>
            <Box safeArea w={"100%"} p="6" py="8">
                <Box
                    w={"100%"}
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    mb={10}
                    justifyContent={"space-between"}>
                    <Pressable onPress={goBack}>
                        {({ isHovered, isPressed }) => {
                            return (
                                <Box
                                    bg={
                                        isPressed
                                            ? "coolGray.200"
                                            : isHovered
                                            ? "coolGray.200"
                                            : "gray.200"
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
                    <Heading
                        // w={"100%"}
                        textAlign={"center"}
                        size="lg"
                        fontWeight="600"
                        color="coolGray.800"
                        _dark={{
                            color: "warmGray.50",
                        }}>
                        My Order
                    </Heading>
                    <Box w={8}></Box>
                </Box>
                <ScrollView>
                    {myOrder.map((item, index) => (
                        <OrderItem key={index} data={item} />
                    ))}
                </ScrollView>
            </Box>
        </Flex>
    );
}

export default Order;
