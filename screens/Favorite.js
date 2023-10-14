import { Box, Flex, ScrollView, Text, VStack } from "native-base";
import FavoriteItem from "../components/FavoriteItem";

function Favotite() {
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
        <Box w={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Text fontSize={18} fontWeight={"bold"}>Favorite</Text>
        </Box>
        <ScrollView w={"100%"} px={4}>
          <VStack>
            <FavoriteItem/>
          </VStack>
        </ScrollView>
      </Flex>
    );
}

export default Favotite;