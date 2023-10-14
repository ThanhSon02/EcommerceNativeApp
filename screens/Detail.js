import React from "react";
import {
  Box,
  Flex,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import AntdIcon from "@expo/vector-icons/AntDesign";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const Detail = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const [favotite, setFavorite] = useState(false);
  const handleSetFavorite = () => {
    setFavorite(!favotite);
  };

  return (
    <Flex
      width={"100%"}
      height={"100%"}
      pt={16}
      direction="column"
      justifyContent={"start"}
      alignItems={"center"}
      backgroundColor={"#fff"}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        w={"100%"}
        px={3}
        pb={4}
      >
        <Pressable onPress={goBack}>
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
                p={3}
                borderRadius={"50"}
              >
                <Icon as={AntdIcon} name="left" color={"#000"} />
              </Box>
            );
          }}
        </Pressable>
        <Text fontSize={18} fontWeight={"bold"}>
          Audio
        </Text>
        <Box w={8}></Box>
      </Box>
      <ScrollView w={"100%"} px={2}>
        <Flex w={"100%"} flexDirection={"column"}>
          <Box
            bgColor={"#F5F5F5"}
            borderRadius={24}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            h={350}
          >
            <Image
              width={300}
              height={300}
              source={require("../assets/sonyHeadphone.png")}
              alt="product"
            />
            <TouchableOpacity
            onPress={handleSetFavorite}
              style={{
                position: "absolute",
                right: 20,
                bottom: 70,
                zIndex: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  padding: 6,
                }}
              >
                <AntdIcon
                  name="heart"
                  size={20}
                  color={favotite ? "red" : "black"}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 20,
                bottom: 30,
                zIndex: 10,
              }}
            >
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  padding: 6,
                }}
              >
                <AntdIcon
                  name="shoppingcart"
                  size={20}
                  // color={favotite ? "red" : "black"}
                />
              </View>
            </TouchableOpacity>
          </Box>

          <VStack px={3} mt={4}>
            <Text fontSize={20} fontWeight={"bold"}>
              $349.99
            </Text>
            <Text fontSize={20} fontWeight={"semibold"}>
              SONY Premium Wireless Headphones
            </Text>
            <Text fontSize={16} color={"#868D94"}>
              Model: WH-1000XM4, Black
            </Text>
            <Text mt={3} color={"#868D94"}>
              The technology with two noise sensors and two microphones on each
              ear cup detects ambient noise and sends the data to the HD noise
              minimization processor QN1. Using a new algorithm, the QN1 then
              processes and minimizes noise for different acoustic environments
              in real time. Together with a new Bluetooth Audio SoC
              
            </Text>
          </VStack>
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default Detail;
