import { Box, Button, Flex, ScrollView, Text, VStack } from "native-base";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { caculateTotal } from "../util/calculateTotal";
import { createOrder } from "../service/orderService";
function Cart() {
    const cartList = useSelector((state) => state.cart.cartList);
    const accessToken = useSelector((state) => state.auth.auth.accessToken);
    const user = useSelector((state) => state.auth.auth.userInfo);
    const { _id, name, email, phone, address } = user;
    const dispatch = useDispatch();
    const handleOrder = () => {
        dispatch(
            createOrder({
                orderInfo: {
                    orderItems: cartList,
                    user: { _id, name, email, phone, address },
                    totalPrice: caculateTotal(cartList),
                    isDelivered: false,
                },
                accessToken,
            })
        );
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
            <Box w={"100%"} justifyContent={"center"} alignItems={"center"}>
                <Text fontSize={18} fontWeight={"bold"}>
                    Cart
                </Text>
            </Box>
            <ScrollView w={"100%"} px={4}>
                <VStack>
                    {cartList.map((item, index) => (
                        <CartItem data={item} key={index} />
                    ))}
                </VStack>
            </ScrollView>
            <Flex
                w={"100%"}
                direction="row"
                mb={2}
                justifyContent={"space-between"}
                px={4}
                py={2}>
                <Text fontSize={20} fontWeight={600}>
                    Total:{" "}
                </Text>
                <Text fontSize={20} fontWeight={600}>
                    ${caculateTotal(cartList)}
                </Text>
            </Flex>
            <Button w={"90%"} fontWeight={600} onPress={handleOrder}>
                Order
            </Button>
        </Flex>
    );
}

export default Cart;
