import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useState } from "react";
import {
    Box,
    Center,
    FormControl,
    Heading,
    Input,
    VStack,
    Button,
    HStack,
    Link,
} from "native-base";
import { useDispatch } from "react-redux";
import { registerUser } from "../service/authService";

const Register = ({ navigation }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();

    const navigationLogin = () => {
        navigation.navigate("Login");
    };

    const handleRegister = () => {
        const registerInfo = { email, password, name, phone, address };
        dispatch(registerUser({ registerInfo, navigation }));
    };

    return (
        <Center w="100%" h="100%">
            <Box safeArea p="2" w="90%" maxW="290" py="8">
                <Heading
                    size="lg"
                    color="coolGray.800"
                    _dark={{
                        color: "warmGray.50",
                    }}
                    fontWeight="semibold">
                    Welcome
                </Heading>
                <Heading
                    mt="1"
                    color="coolGray.600"
                    _dark={{
                        color: "warmGray.200",
                    }}
                    fontWeight="medium"
                    size="xs">
                    Sign up to continue!
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input
                            type="password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Phone</FormControl.Label>
                        <Input
                            type="text"
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Address</FormControl.Label>
                        <Input
                            type="text"
                            value={address}
                            onChangeText={(text) => setAddress(text)}
                        />
                    </FormControl>
                    <Button
                        onPress={handleRegister}
                        mt="2"
                        colorScheme="indigo">
                        Sign up
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text
                            fontSize="sm"
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200",
                            }}>
                            You have an account.
                        </Text>
                        <Link
                            _text={{
                                color: "indigo.500",
                                fontWeight: "medium",
                                fontSize: "sm",
                            }}
                            onPress={navigationLogin}>
                            Sign In
                        </Link>
                    </HStack>
                </VStack>
            </Box>
        </Center>
    );
};

export default Register;

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
