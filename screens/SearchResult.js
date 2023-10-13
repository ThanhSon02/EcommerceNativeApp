import { ScrollView, VStack, HStack, Input, Icon, Center, Box, Pressable, Badge, Spacer, Text, Heading, Flex } from 'native-base'
import AntdIcon from "@expo/vector-icons/AntDesign";
import CardProduct from '../components/CardProduct';


function SearchResult() {
    return (
        <Flex width={"100%"} height={"100%"} pt={16} direction='column' justifyContent={"start"} alignItems={"center"} backgroundColor={"#fff"}>
            <Box style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} w={"100%"} px={3}>
                <Pressable>
                    {({
                        isHovered,
                        isPressed
                    }) => {
                        return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"} p={3} borderRadius={"50"}>
                            <Icon as={AntdIcon} name='left' color={"#000"} />
                        </Box>
                    }}
                </Pressable>
                <Text fontSize={18} fontWeight={"bold"}>Audio</Text>
                <Pressable>
                    {({
                        isHovered,
                        isPressed
                    }) => {
                        return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"} p={3} borderRadius={"50"}>
                            <Icon as={AntdIcon} name='search1' color={"#000"} />
                        </Box>
                    }}
                </Pressable>
            </Box>
            <ScrollView>
                
            </ScrollView>
        </Flex>
    ); 
}

export default SearchResult;