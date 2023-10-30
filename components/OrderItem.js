import { Box, Flex, Image, Text, VStack } from "native-base";

function OrderItem({ data }) {
    return (
        <Box bgColor={"gray.400"} mb={4} p={2} gap={3} borderRadius={10}>
            {data.orderItems.map((item, index) => (
                <Flex
                    key={index}
                    w={"100%"}
                    direction="row"
                    alignItems={"center"}
                    borderRadius={4}
                    bgColor={"#fff"}
                    px={3}
                    justifyContent={"space-between"}
                    gap={3}>
                    <Box bgColor={"#F5F5F5"} borderRadius={16}>
                        <Image
                            w={60}
                            h={60}
                            alt="img"
                            source={{ uri: item.product.product_img }}
                        />
                    </Box>
                    <Text fontSize={14} fontWeight={"bold"}>
                        {item.product.product_name}
                    </Text>
                    <VStack py={2}>
                        <Box display={"flex"} flexDirection={"column"} gap={3}>
                            <Text
                                fontSize={14}
                                fontWeight={"bold"}
                                color={"red.500"}>
                                ${item.product.price}
                            </Text>
                            <Text fontSize={14} fontWeight={"bold"}>
                                x{item.quantity}
                            </Text>
                        </Box>
                    </VStack>
                </Flex>
            ))}
            <Text
                fontSize={16}
                fontWeight={600}
                color={"red.500"}
                textAlign={"end"}
                w={"100%"}>
                ${data.totalPrice}
            </Text>
        </Box>
    );
}

export default OrderItem;
