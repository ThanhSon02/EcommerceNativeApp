import React from 'react'
import { Box, Flex, Icon, Image, Pressable, Text, VStack, View } from 'native-base'
import Feather from "@expo/vector-icons/Feather";
import AntdIcon from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from 'react-native-web';

const FavoriteItem = () => {
  return (
    <Flex
      w={"100%"}
      direction="row"
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={3}
    >
      <Box bgColor={"#F5F5F5"} borderRadius={16}>
        <Image
          w={60}
          h={60}
          source={require("../assets/sonyHeadphone.png")}
          alt="img"
        />
      </Box>
      <VStack w={160} py={2}>
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

      <Pressable>
        {({ isHovered, isPressed }) => {
          return (
            <Box
              bg={
                isPressed
                  ? "coolGray.200"
                  : isHovered
                  ? "coolGray.200"
                  : "#f5f5f5"
              }
              p={3}
              borderRadius={"10"}
            >
              <Icon as={AntdIcon} name="shoppingcart" color={"#000"} size={5}/>
            </Box>
          );
        }}
      </Pressable>
      <Box>
        <Icon size={5} as={Feather} name="more-vertical" />
      </Box>
    </Flex>
  );
}

export default FavoriteItem