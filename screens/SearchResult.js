import {
  ScrollView,
  Icon,
  Box,
  Pressable,
  Text,
  Flex,
} from "native-base";
import AntdIcon from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import CardProduct from "../components/CardProduct";

function SearchResult({ navigation }) {
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
      <ScrollView w={"100%$"}>
        <Flex
          w={"100%"}
          direction="row"
          flexWrap={"wrap"}
          display={"flex"}
          gap={4}
        >
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </Flex>
      </ScrollView>
    </Flex>
  );
}

export default SearchResult;
