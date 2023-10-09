import { useState } from "react";
import { TouchableHighlight, TouchableOpacity } from "react-native";
import { ScrollView, Text, View } from "react-native";

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
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                    marginTop: 14,
                    marginBottom: 10,
                }}>
                {category.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => setTab(index)}>
                        <View
                            style={
                                tab === index
                                    ? {
                                          padding: 2,
                                          borderBottomWidth: 2,
                                      }
                                    : { padding: 2 }
                            }>
                            <Text style={{ margin: 2, fontSize: 14 }}>
                                {item.label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

export default Navbar;
