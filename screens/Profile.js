import { Box, Flex, Pressable, ScrollView, Text, VStack } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../service/authService";

function Profile({ navigation }) {
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.auth.auth.accessToken);

    const handleLogout = () => {
        dispatch(logout({ accessToken, navigation }));
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
                    Profile
                </Text>
            </Box>
            <ScrollView w={"100%"} px={4}>
                <VStack alignItems="center">
                    <Pressable
                        w="100%"
                        mb={2}
                        onPress={() => navigation.navigate("ProfileDetail")}>
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
                                    <Text
                                        borderBottomWidth={0.2}
                                        py={2}
                                        fontSize={18}
                                        fontWeight={"bold"}>
                                        Profile detail
                                    </Text>
                                </Box>
                            );
                        }}
                    </Pressable>

                    <Pressable
                        w="100%"
                        mb={2}
                        onPress={() => navigation.navigate("Order")}>
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
                                    <Text
                                        py={2}
                                        borderBottomWidth={0.2}
                                        fontSize={18}
                                        fontWeight={"bold"}>
                                        My order
                                    </Text>
                                </Box>
                            );
                        }}
                    </Pressable>

                    <Pressable onPress={handleLogout} w="100%" mb={2}>
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
                                    <Text
                                        py={2}
                                        borderBottomWidth={0.2}
                                        fontSize={18}
                                        fontWeight={"bold"}>
                                        Log out
                                    </Text>
                                </Box>
                            );
                        }}
                    </Pressable>
                </VStack>
            </ScrollView>
        </Flex>
    );
}

export default Profile;
