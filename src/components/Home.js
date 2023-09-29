import { View, StyleSheet, Text } from "react-native"
import Navbar from "./Navbar"
import CarouselCPN from "./Carousel"

function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.header_text}>Hello Michael</Text>
            <Navbar/>
            <CarouselCPN/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingLeft: 20,
        paddingRight: 20
    },
    header_text: {
        fontSize: 32,
        fontWeight: "bold"
    }
})

export default Home