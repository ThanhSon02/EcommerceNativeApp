import { StyleSheet, Text } from "react-native";
import React from "react";
import {
    Box,
    Center,
    FormControl,
    HStack,
    Heading,
    Input,
    Link,
    VStack,
    Button,
} from "native-base";
import { useDispatch } from "react-redux";
import { login } from "../service/authService";
import { useState } from "react";
import axiosInstance from "../axios/axios";

const Login = ({ navigation }) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {
        const loginInfo = { email, password };
        dispatch(login({ loginInfo, navigation }));
    };

    const registerNavigate = () => {
        navigation.navigate("Register");
    };
    return (
        <Center w="100%" h="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading
                    size="lg"
                    fontWeight="600"
                    color="coolGray.800"
                    _dark={{
                        color: "warmGray.50",
                    }}>
                    Welcome
                </Heading>
                <Heading
                    mt="1"
                    _dark={{
                        color: "warmGray.200",
                    }}
                    color="coolGray.600"
                    fontWeight="medium"
                    size="xs">
                    Sign in to continue!
                </Heading>

                <VStack space={3} mt="5">
                    <FormControl isRequired>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                            type="password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </FormControl>
                    <Button onPress={handleLogin} mt="2" colorScheme="indigo">
                        Sign in
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text
                            fontSize="sm"
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200",
                            }}>
                            I'm a new user.{" "}
                        </Text>
                        <Link
                            _text={{
                                color: "indigo.500",
                                fontWeight: "medium",
                                fontSize: "sm",
                            }}
                            onPress={registerNavigate}>
                            Sign Up
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
    },
    inputContainer: {
        justifyContent: "flex-start",
        width: "100%",
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: "600",
    },
    input: {
        marginTop: 6,
        borderWidth: 1,
        borderColor: "#E2E8F0",
        padding: 10,
        width: "100%",
        borderRadius: 8,
    },
    btn: {
        width: "100%",
        marginTop: 24,
        borderRadius: 20,
        padding: 12,
    },
});
