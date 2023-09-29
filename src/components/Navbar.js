import { ScrollView, Text, View } from "react-native";

function Navbar() {
    const category = [
        {
            label: "All"
        },
        {
            label: "Audio"
        },
        {
            label: "Drones + Electrolics"
        },
        {
            label: "Photo + Videos"
        },
        {
            label: "Gaming + VR"
        },
        {
            label: "Networking"
        },
    ]
    return ( 
        <ScrollView horizontal={true} bounces={true} showsHorizontalScrollIndicator={false}>
            <View style={{display: "flex", flexDirection: "row", gap: 20, marginTop: 14}}>
                {category.map((item, index) => (
                    <View key={index} style={{borderBottomWidth: 2, padding: 2}}>
                        <Text>{item.label}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

export default Navbar;