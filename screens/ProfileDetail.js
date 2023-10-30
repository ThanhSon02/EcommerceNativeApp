import {
    Box,
    Button,
    Flex,
    FormControl,
    Heading,
    Icon,
    Input,
    Pressable,
    VStack,
} from "native-base";
import { useEffect, useState } from "react";
import AntdIcon from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../service/authService";

function ProfileDetail() {
    const userInfo = useSelector((state) => state.auth.auth.userInfo);
    const accessToken = useSelector((state) => state.auth.auth.accessToken);
    const dispatch = useDispatch();

    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [phone, setPhone] = useState(userInfo.phone);
    const [address, setAddress] = useState(userInfo.address);
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
    };

    const handleUpdateInfo = () => {
        const userInfo = {
            name,
            email,
            phone,
            address,
        };
        dispatch(updateUser({ userInfo, accessToken }));
    };

    return (
        <Flex h={"100%"} w={"100%"} bgColor={"#fff"}>
            <Box safeArea w={"100%"} p="6" py="8">
                <Box
                    w={"100%"}
                    display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
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
                        Profile Detail
                    </Heading>
                    <Box w={8}></Box>
                </Box>

                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input
                            type="text"
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
                        <FormControl.Label>Phone</FormControl.Label>
                        <Input
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                        />
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Address</FormControl.Label>
                        <Input
                            value={address}
                            onChangeText={(text) => setAddress(text)}
                        />
                    </FormControl>
                    <Button
                        onPress={handleUpdateInfo}
                        mt="5"
                        colorScheme="indigo">
                        Update info
                    </Button>
                </VStack>
            </Box>
        </Flex>
    );
}

export default ProfileDetail;
