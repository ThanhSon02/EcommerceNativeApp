import { Box, Flex, ScrollView, Text } from "native-base";
import { useState } from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native";

function Navbar() {
    const category = [
        {
            label: "All",
        },
        {
            label: "Audio",
        },
        {
            label: "Drones + Electrolics",
        },
        {
            label: "Photo + Videos",
        },
        {
            label: "Gaming + VR",
        },
        {
            label: "Networking",
        },
    ];

    const [tab, setTab] = useState(0);
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Flex direction="row">
                {category.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => setTab(index)}>
                        <Box py={2}>
                            <Text
                                fontSize={14}
                                px={2}
                                borderBottomWidth={tab === index ? 1 : 0}>
                                {item.label}
                            </Text>
                        </Box>
                    </TouchableOpacity>
                ))}
            </Flex>
        </ScrollView>
    );
}

export default Navbar;
