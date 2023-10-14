import { View,  TouchableOpacity } from "react-native";
import AntdIcon from "@expo/vector-icons/AntDesign";
import React, { useState } from "react";
import { Text, Image, Pressable, VStack, Box } from "native-base";
import { useNavigation } from "@react-navigation/native";

const CardProduct = () => {
    const navigation = useNavigation()
  const [favotite, setFavorite] = useState(false);
  const handleSetFavorite = () => {
    setFavorite(!favotite);
  };

  const gotoDetail = () => {
    navigation.replace("Detail");
  };

  return (
    <Pressable onPress={gotoDetail} w={160}>
      {({ isHovered, isPressed }) => {
        return (
          <VStack>
            <Box
              bgColor={"#F5F5F5"}
              borderRadius={24}
              position={"relative"}
              bg={
                isPressed
                  ? "coolGray.200"
                  : isHovered
                  ? "coolGray.200"
                  : "coolGray.100"
              }
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.96 : 1,
                  },
                ],
              }}
            >
              <Image
                w={160}
                height={160}
                source={require("../assets/sonyHeadphone.png")}
                alt="product"
              />
              <TouchableOpacity
                onPress={handleSetFavorite}
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                  zIndex: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 50,
                    padding: 5,
                  }}
                >
                  <AntdIcon
                    name="heart"
                    size={16}
                    color={favotite ? "red" : "black"}
                  />
                </View>
              </TouchableOpacity>
            </Box>
            <VStack>
              <Text fontSize={14} fontWeight={"bold"}>
                $349.99
              </Text>
              <Text fontSize={14} fontWeight={"semibold"}>
                SONY Premium Wireless Headphones
              </Text>
              <Text fontSize={10} color={"#868D94"}>
                Model: WH-1000XM4, Black
              </Text>
            </VStack>
          </VStack>
        );
      }}
    </Pressable>
  );
};

export default CardProduct;

