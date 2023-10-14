import {  StyleSheet } from 'react-native'
import React from 'react'
import AntdIcon from "@expo/vector-icons/AntDesign";
import {ScrollView, VStack, HStack, Input, Icon, Center, Box, Pressable, Badge, Spacer, Text, Heading, Flex } from 'native-base'

function Search({navigation}) {

  const getSearchResult = () => {
    navigation.navigate("SearchResult")
  }

  return (
    <Flex pt={'16'} px={4} direction='column' alignItems={"center"} justifyContent={"center"} width={"100%"} height='100%' backgroundColor={"#fff"}>
        <Input placeholder="Search" variant="filled" width="100%" py="1" px="3" InputRightElement={<Icon as={AntdIcon} mr={3} name='search1' />} />
        <ScrollView w={"100%"}>
          <VStack alignItems="center">
            <Pressable onPress={getSearchResult} w="100%" mt={5}>
              {({
                isHovered,
                isPressed
              }) => {
                return <Box bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "white"} px={2}>
                  <VStack alignItems="center">
                    <Flex direction='row' alignItems={"center"} w={"100%"} justifyContent={"space-between"} borderBottomWidth={0.5} py={2}>
                      <Text fontSize={18} fontWeight={"bold"}>
                        Audio
                      </Text>
                      <Icon as={AntdIcon} name='right' color={"#000"}/>
                    </Flex>
                  </VStack>
                </Box>;
              }}
            </Pressable>

          </VStack>
        </ScrollView>
    </Flex>
  )
}

export default Search

const styles = StyleSheet.create({})