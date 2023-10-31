import CarouselCPN from "../components/CarouselCPN";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { Box, Flex, ScrollView, Text } from "native-base";
import { useEffect } from "react";
import { getAllProduct } from "../service/productService";

function Home({ navigation }) {
    const userInfo = useSelector((state) => state.auth.auth?.userInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = navigation.addListener("tabPress", (e) => {
            dispatch(getAllProduct());
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <Flex bg={"#fff"} py={8} px={5}>
            <Box>
                <Text fontSize={32} mb={5} fontWeight={"bold"}>
                    Hello, {userInfo?.name}
                </Text>
            </Box>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CarouselCPN />
                <ProductList title={"Recommended for you"} />
            </ScrollView>
        </Flex>
    );
}

export default Home;
